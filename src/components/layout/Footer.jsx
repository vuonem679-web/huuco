import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 md:p-6 mt-12">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    <span className="font-semibold text-sm md:text-base">Nông Nghiệp Hữu Cơ</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                    Hướng dẫn chi tiết cho người mới bắt đầu
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Lưu ý: Thông tin chỉ mang tính chất tham khảo. Hãy điều chỉnh phù hợp với điều kiện địa phương.
                </p>
            </div>
        </footer>
    );
}
