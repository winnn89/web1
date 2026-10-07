import React, { useState, useEffect } from 'react';
import { TabId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { College101View } from './components/College101View';
import { MethodsView } from './components/MethodsView';
import { TimeManagementView } from './components/TimeManagementView';
import { SkillsView } from './components/SkillsView';
import { ExamView } from './components/ExamView';
import { ToolsView } from './components/ToolsView';
import { WellnessView } from './components/WellnessView';
import { InteractiveHub } from './components/InteractiveHub';
import { CommunityView } from './components/CommunityView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [selectedMethodId, setSelectedMethodId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Sync dark mode class with documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const handleOpenMethodDetail = (methodId: string) => {
    setSelectedMethodId(methodId);
    setCurrentTab('methods');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearSelectedMethod = () => {
    setSelectedMethodId(null);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-900 text-slate-100'
    }`}>
      {/* Top Fixed Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            setCurrentTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenMethodDetail={handleOpenMethodDetail}
          />
        )}

        {currentTab === 'college-101' && <College101View />}

        {currentTab === 'methods' && (
          <MethodsView
            setCurrentTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            selectedMethodId={selectedMethodId}
            onClearSelectedMethod={handleClearSelectedMethod}
          />
        )}

        {currentTab === 'time' && (
          <TimeManagementView
            setCurrentTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'skills' && <SkillsView />}

        {currentTab === 'exam' && <ExamView />}

        {currentTab === 'tools' && <ToolsView />}

        {currentTab === 'wellness' && <WellnessView />}

        {currentTab === 'interactive' && <InteractiveHub />}

        {currentTab === 'community' && <CommunityView />}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
