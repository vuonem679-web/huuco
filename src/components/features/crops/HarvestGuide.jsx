import Card from '../../common/Card';

export default function HarvestGuide({ harvest }) {
    return (
        <Card className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">✂️</span>
                Hướng dẫn thu hoạch
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-3 md:space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">🎯 Dấu hiệu chín</h3>
                        <p className="text-gray-700 text-xs md:text-sm">{harvest.signs}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">✂️ Cách thu hoạch</h3>
                        <p className="text-gray-700 text-xs md:text-sm">{harvest.method}</p>
                    </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">📦 Phân loại sản phẩm</h3>
                        <div className="space-y-1 md:space-y-2">
                            {harvest.grading.map((grade, idx) => (
                                <div key={idx} className="text-xs md:text-sm text-gray-700">
                                    <span className="font-medium">• {grade}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">🏪 Bảo quản</h3>
                        <p className="text-gray-700 text-xs md:text-sm">{harvest.storage}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
