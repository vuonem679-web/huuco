import { Leaf, Sparkles } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400"></div>

            <div className="max-w-6xl mx-auto p-6 md:p-8 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative">
                            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-primary-400" />
                            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-accent-300 animate-pulse" />
                        </div>
                        <div>
                            <span className="font-display font-semibold text-base md:text-lg">Nông Nghiệp Hữu Cơ</span>
                            <p className="text-gray-400 text-xs">Hướng dẫn chi tiết cho người mới bắt đầu</p>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-xs md:text-sm mb-1">
                            Made with 💚 for sustainable farming
                        </p>
                        <p className="text-gray-500 text-xs">
                            Lưu ý: Thông tin chỉ mang tính chất tham khảo
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
