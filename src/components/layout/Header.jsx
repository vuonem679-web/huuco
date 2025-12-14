import { Sprout, Sparkles } from 'lucide-react';

export default function Header() {
    return (
        <div className="glass gradient-nature text-white shadow-strong sticky top-0 z-50 border-b border-white/20">
            <div className="max-w-6xl mx-auto p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative">
                            <Sprout className="w-7 h-7 md:w-9 md:h-9 animate-float drop-shadow-lg" />
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 absolute -top-1 -right-1 text-accent-200 animate-pulse" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-3xl font-display font-bold tracking-tight drop-shadow-md">
                                Nông Nghiệp Hữu Cơ
                            </h1>
                            <p className="text-green-100 text-xs md:text-sm font-light">
                                Hướng dẫn chi tiết cho người mới bắt đầu
                            </p>
                        </div>
                    </div>

                    {/* Optional: Add user menu or settings here */}
                    <div className="hidden md:flex items-center gap-2 glass px-3 py-1.5 rounded-full border border-white/20">
                        <div className="w-2 h-2 bg-accent-300 rounded-full animate-pulse"></div>
                        <span className="text-xs text-white font-medium">Organic Certified</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
