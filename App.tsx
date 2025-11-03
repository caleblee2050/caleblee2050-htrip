import React, { useState } from 'react';
import type { Tab } from './types';
import InternalContent from './components/InternalContent';
import ProposalContent from './components/ProposalContent';
import LoginPage from './components/LoginPage';
import { FileTextIcon, SendIcon, LogOutIcon, CogIcon } from './components/icons';

type View = 'public' | 'login' | 'admin';

const App: React.FC = () => {
    const [view, setView] = useState<View>('public');
    const [activeTab, setActiveTab] = useState<Tab>('internal');

    const handleLoginSuccess = () => {
        setView('admin');
        setActiveTab('internal'); // Default to internal view after login
    };

    const handleLogout = () => {
        setView('public');
    };

    const getButtonClasses = (tabName: Tab) => {
        const base = 'flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300';
        if (activeTab === tabName) {
            return `${base} bg-blue-600 text-white shadow-md`;
        }
        return `${base} bg-gray-200 text-gray-700 hover:bg-gray-300`;
    };

    if (view === 'login') {
        return <LoginPage onLoginSuccess={handleLoginSuccess} onCancel={() => setView('public')} />;
    }

    if (view === 'public') {
        return (
             <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden my-4 md:my-8">
                <header className="bg-white p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">대안학교 체험학습 프로젝트</h1>
                         <button onClick={() => setView('login')} className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Admin Login">
                            <CogIcon className="h-7 w-7" />
                        </button>
                    </div>
                </header>
                <main className="p-6 md:p-8">
                    <ProposalContent />
                </main>
             </div>
        );
    }

    // view === 'admin'
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden my-4 md:my-8">
            <header className="bg-white p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">대안학교 체험학습 프로젝트</h1>
                    <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Logout">
                        <LogOutIcon className="h-7 w-7" />
                    </button>
                </div>

                <div className="flex space-x-2">
                    <button onClick={() => setActiveTab('internal')} className={getButtonClasses('internal')}>
                        <FileTextIcon className="h-5 w-5" />
                        <span className="ml-2 hidden sm:inline">내부 전략 문서</span>
                    </button>
                    <button onClick={() => setActiveTab('proposal')} className={getButtonClasses('proposal')}>
                        <SendIcon className="h-5 w-5" />
                        <span className="ml-2 hidden sm:inline">학교 제안용</span>
                    </button>
                </div>
            </header>

            <main className="p-6 md:p-8">
                {activeTab === 'internal' && <InternalContent />}
                {activeTab === 'proposal' && <ProposalContent />}
            </main>
        </div>
    );
};

export default App;
