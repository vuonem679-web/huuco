import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { isGoodMonth } from '../../../utils/dateUtils';
import Card from '../../common/Card';

export default function CropInfo({ crop }) {
    const isGood = isGoodMonth(crop.bestMonths);

    return (
        <Card className="mb-4 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl">{crop.icon}</div>
                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{crop.name}</h2>
                    <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Mùa trồng:</span>
                            <span>{crop.season}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Thời gian:</span>
                            <span>{crop.duration} ngày</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Season Info */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex items-start gap-2 md:gap-3">
                    <div className="text-xl md:text-2xl">🌟</div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">
                            Đề xuất thời gian xuống giống tốt nhất
                        </h3>
                        <div className="mb-2 md:mb-3">
                            <div className="flex flex-wrap gap-1 md:gap-2 mb-2">
                                {crop.bestMonths.map((month) => (
                                    <span
                                        key={month}
                                        className="px-2 md:px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs md:text-sm font-semibold"
                                    >
                                        Tháng {month}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 text-xs md:text-sm">
                                <strong>Lý do:</strong> {crop.seasonReason}
                            </p>
                        </div>
                        {isGood ? (
                            <div className="flex items-center gap-2 text-green-700 font-semibold text-xs md:text-sm">
                                <span className="text-lg md:text-xl">✓</span>
                                <span>Tháng này phù hợp để xuống giống!</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-orange-700 text-xs md:text-sm">
                                <span className="text-lg md:text-xl">⚠</span>
                                <span>Tháng hiện tại không phải mùa vụ tối ưu, nhưng vẫn có thể trồng với chăm sóc tốt</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Tips */}
            <div className="bg-primary-50 rounded-lg p-3 md:p-4">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">
                    💡 Lưu ý quan trọng:
                </h3>
                <ul className="space-y-1 md:space-y-2">
                    {crop.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}
