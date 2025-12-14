import { calculateFertilizer } from '../../../utils/calculators';
import Card from '../../common/Card';

export default function FertilizerCalculator({ area }) {
    const { organic, npk, ash } = calculateFertilizer(area);

    return (
        <Card className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">🌱</span>
                Tính lượng phân bón
            </h3>

            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-yellow-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2 md:mb-3 text-sm md:text-base">
                        📦 Phân chuồng hoai mục
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-2">
                        Liều lượng: 3-5 tấn/1000m²
                    </p>
                    <div className="text-lg md:text-xl font-bold text-yellow-800">{organic} kg</div>
                    <p className="text-xs text-gray-600 mt-1">
                        Chi phí: ~{Math.round(organic * 3).toLocaleString()} VNĐ
                    </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 md:mb-3 text-sm md:text-base">
                        🧪 NPK hữu cơ
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-2">
                        Liều lượng: 100-200 kg/1000m²
                    </p>
                    <div className="text-lg md:text-xl font-bold text-blue-800">{npk} kg</div>
                    <p className="text-xs text-gray-600 mt-1">
                        Chi phí: ~{Math.round(npk * 15).toLocaleString()} VNĐ
                    </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-purple-800 mb-2 md:mb-3 text-sm md:text-base">
                        🔥 Tro trấu
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-2">
                        Liều lượng: 300-500 kg/1000m²
                    </p>
                    <div className="text-lg md:text-xl font-bold text-purple-800">{ash} kg</div>
                    <p className="text-xs text-gray-600 mt-1">
                        Chi phí: ~{Math.round(ash * 2).toLocaleString()} VNĐ
                    </p>
                </div>
            </div>
        </Card>
    );
}
