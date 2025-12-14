import Card from '../../common/Card';
import formulasData from '../../../data/formulas.json';

function FormulaCard({ formula, type }) {
    const bgColor = type === 'pesticides' ? 'bg-purple-50' : 'bg-green-50';
    const borderColor = type === 'pesticides' ? 'border-purple-200' : 'border-green-200';
    const titleColor = type === 'pesticides' ? 'text-purple-800' : 'text-green-800';

    return (
        <div className={`border ${borderColor} rounded-lg p-4 md:p-6 ${bgColor}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl">{formula.icon}</span>
                <div className="flex-1">
                    <h3 className={`text-base md:text-lg font-semibold ${titleColor}`}>
                        {formula.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">{formula.use}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Ingredients */}
                <div>
                    <h4 className={`font-semibold ${titleColor} mb-2 md:mb-3 text-sm md:text-base`}>
                        📝 Nguyên liệu:
                    </h4>
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                        {formula.ingredients.map((ingredient, idx) => (
                            <li key={idx}>• {ingredient}</li>
                        ))}
                    </ul>
                </div>

                {/* Steps */}
                <div>
                    <h4 className={`font-semibold ${titleColor} mb-2 md:mb-3 text-sm md:text-base`}>
                        ⚗️ Cách pha chế:
                    </h4>
                    <ol className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                        {formula.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Frequency */}
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                <p className="text-xs md:text-sm">
                    <strong className={titleColor}>Tần suất:</strong> {formula.frequency}
                </p>
            </div>
        </div>
    );
}

export default function FormulasTab() {
    return (
        <div>
            <Card className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    🧪 Công thức hữu cơ tự làm
                </h2>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                        <span className="text-xl md:text-2xl">💡</span>
                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1 md:mb-2 text-sm md:text-base">
                                Lưu ý quan trọng
                            </h3>
                            <p className="text-xs md:text-sm text-amber-700">
                                Tất cả công thức đều sử dụng nguyên liệu tự nhiên, an toàn cho sức khỏe và môi trường.
                                Hãy tuân thủ đúng tỷ lệ và cách bảo quản để đạt hiệu quả tối ưu.
                            </p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Pesticides */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🌿</span>
                    Thuốc bảo vệ thực vật hữu cơ
                </h3>
                <div className="grid gap-4 md:gap-6">
                    {formulasData.pesticides.map((formula, idx) => (
                        <FormulaCard key={idx} formula={formula} type="pesticides" />
                    ))}
                </div>
            </Card>

            {/* Fertilizers */}
            <Card>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🌱</span>
                    Phân bón lá hữu cơ
                </h3>
                <div className="grid gap-4 md:gap-6">
                    {formulasData.fertilizers.map((formula, idx) => (
                        <FormulaCard key={idx} formula={formula} type="fertilizers" />
                    ))}
                </div>
            </Card>
        </div>
    );
}
