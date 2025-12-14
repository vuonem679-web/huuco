import { Sprout, BookOpen, FlaskConical, Calculator } from 'lucide-react';

export default function TabNavigation({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'crops', label: 'Cây trồng', icon: Sprout, color: 'from-green-400/80 to-green-500/80' },
        { id: 'knowledge', label: 'Kiến thức', icon: BookOpen, color: 'from-blue-400/80 to-blue-500/80' },
        { id: 'formulas', label: 'Công thức', icon: FlaskConical, color: 'from-purple-400/80 to-purple-500/80' },
        { id: 'calculator', label: 'Máy tính', icon: Calculator, color: 'from-yellow-400/80 to-yellow-500/80' }
    ];

    return (
        <div className="glass sticky top-[88px] md:top-[104px] z-40 border-b border-white/30">
            <div className="max-w-6xl mx-auto">
                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-2 p-3">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-sm transition-all duration-300 backdrop-blur-md ${activeTab === tab.id
                                    ? `bg-gradient-to-r ${tab.color} text-white shadow-medium hover:shadow-strong border border-white/30`
                                    : 'glass bg-gray-200/70 text-gray-800 hover:bg-gray-300/80 border border-gray-300/50 shadow-soft'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'
                                    }`} />
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-glow"></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile: Horizontal scroll */}
                <div className="flex md:hidden overflow-x-auto scrollbar-hide gap-2 p-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 flex flex-col items-center gap-1 py-3 px-4 rounded-2xl font-semibold text-xs transition-all duration-300 min-w-[80px] backdrop-blur-md ${activeTab === tab.id
                                    ? `bg-gradient-to-r ${tab.color} text-white shadow-medium border border-white/30`
                                    : 'glass bg-gray-200/70 text-gray-800 border border-gray-300/50 shadow-soft'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : ''
                                    }`} />
                                <span className="whitespace-nowrap">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
