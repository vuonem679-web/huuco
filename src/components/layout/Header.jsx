import { Sprout } from 'lucide-react';

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-primary-600 to-emerald-600 text-white p-4 md:p-6 shadow-lg">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <Sprout className="w-6 h-6 md:w-8 md:h-8" />
                    <h1 className="text-xl md:text-3xl font-bold">Nông Nghiệp Hữu Cơ</h1>
                </div>
                <p className="text-green-100 text-sm md:text-base">
                    Hướng dẫn chi tiết cho người mới bắt đầu
                </p>
            </div>
        </div>
    );
}
