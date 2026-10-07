import React, { useState } from 'react';
import { TabId } from '../types';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Sparkles, 
  Sun, 
  Moon, 
  BrainCircuit, 
  Clock, 
  BookOpen, 
  Wrench, 
  HeartHandshake, 
  Award,
  Users
} from 'lucide-react';

interface NavbarProps {
  currentTab: TabId;
  setCurrentTab: (tab: TabId) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  isDarkMode,
  setIsDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Trang chủ', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'college-101', label: 'Làm quen ĐH', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'methods', label: 'Phương pháp', icon: <BrainCircuit className="w-4 h-4" /> },
    { id: 'time', label: 'Thời gian', icon: <Clock className="w-4 h-4" /> },
    { id: 'skills', label: 'Kỹ năng', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'exam', label: 'Thi cử', icon: <Award className="w-4 h-4" /> },
    { id: 'tools', label: 'Công cụ', icon: <Wrench className="w-4 h-4" /> },
    { id: 'wellness', label: 'Sức khỏe', icon: <HeartHandshake className="w-4 h-4" /> },
    { id: 'interactive', label: 'Góc tương tác', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { id: 'community', label: 'Cộng đồng', icon: <Users className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: TabId) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  HỌC ĐẠI HỌC
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-400 border border-amber-400/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide">
                Phương pháp học tập đỉnh cao 2026
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = currentTab === item.id;
              const isHighlight = item.id === 'interactive';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? isHighlight
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 font-bold'
                        : 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30'
                      : isHighlight
                      ? 'text-amber-300 hover:bg-amber-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Quick interactive CTA for desktop/tablet */}
            <button
              onClick={() => handleNavClick('interactive')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Góc Tương Tác Peak</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((item) => {
              const isActive = currentTab === item.id;
              const isHighlight = item.id === 'interactive';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-all ${
                    isActive
                      ? isHighlight
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-indigo-600 text-white'
                      : isHighlight
                      ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                      : 'text-slate-300 bg-slate-900/60 hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => handleNavClick('interactive')}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mở Bộ Công Cụ Tương Tác Peak (Quiz, Pomodoro, GPA)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
