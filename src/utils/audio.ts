/**
 * Web Audio API synthesizer for ambient sounds and celebration chimes.
 * Requires zero external audio files, works completely offline.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playChimeSound(type: 'complete' | 'click' | 'reward' = 'complete') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (type === 'complete') {
      // Gentle meditation bowl chime
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(528, now); // 528 Hz - Solfeggio frequency
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1056, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.8);
      osc2.stop(now + 1.8);
    } else if (type === 'reward') {
      // Arpeggio chime
      const freqs = [440, 554.37, 659.25, 880];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.4);
      });
    } else {
      // Soft click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch {
    // Ignore audio context autoplay limitations if user hasn't interacted
  }
}

// Ambient generator nodes holder
let ambientNodes: {
  source: AudioNode;
  gain: GainNode;
  filter?: BiquadFilterNode;
} | null = null;

export function stopAmbientSound() {
  if (ambientNodes) {
    try {
      ambientNodes.gain.gain.setTargetAtTime(0, getAudioContext().currentTime, 0.2);
      setTimeout(() => {
        if (ambientNodes && 'stop' in ambientNodes.source) {
          (ambientNodes.source as AudioScheduledSourceNode).stop();
        }
        ambientNodes = null;
      }, 300);
    } catch {
      ambientNodes = null;
    }
  }
}

export function playAmbientSound(mode: 'rain' | 'whitenoise' | 'lofi' | 'cafe') {
  stopAmbientSound();
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = ctx.createBiquadFilter();
    const masterGain = ctx.createGain();

    if (mode === 'rain') {
      // Low-pass filtered noise resembling gentle rain
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      masterGain.gain.setValueAtTime(0.08, now);
    } else if (mode === 'whitenoise') {
      // Softer pink noise
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.Q.setValueAtTime(0.5, now);
      masterGain.gain.setValueAtTime(0.05, now);
    } else if (mode === 'lofi') {
      // Warm low drone
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);
      masterGain.gain.setValueAtTime(0.1, now);
    } else {
      // Cafe ambient murmur
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, now);
      filter.Q.setValueAtTime(1.2, now);
      masterGain.gain.setValueAtTime(0.06, now);
    }

    whiteNoise.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    whiteNoise.start();
    ambientNodes = { source: whiteNoise, gain: masterGain, filter };
  } catch {
    // Autoplay restrictions
  }
}
