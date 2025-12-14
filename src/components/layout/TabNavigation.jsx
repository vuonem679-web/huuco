export default function TabNavigation({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'crops', label: 'Cây trồng', icon: '🌱' },
        { id: 'knowledge', label: 'Kiến thức', icon: '📚' },
        { id: 'formulas', label: 'Công thức', icon: '🧪' },
        { id: 'calculator', label: 'Máy tính', icon: '🧮' }
    ];

    return (
        <div className="bg-white shadow-lg sticky top-0 z-10">
            <div className="max-w-6xl mx-auto">
                {/* Mobile: Scrollable horizontal tabs */}
                <div className="flex overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 gap-1 md:gap-2 p-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 flex items-center justify-center gap-2 py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <span className="text-lg md:text-xl">{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
