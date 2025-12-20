import Card from '../../common/Card';
import formulasData from '../../../data/formulas.json';

function FormulaCard({ formula, type }) {
    const bgColors = {
        pesticides: 'bg-purple-50',
        fertilizers: 'bg-green-50',
        soilMixes: 'bg-amber-50',
        compost: 'bg-blue-50'
    };

    const borderColors = {
        pesticides: 'border-purple-200',
        fertilizers: 'border-green-200',
        soilMixes: 'border-amber-200',
        compost: 'border-blue-200'
    };

    const titleColors = {
        pesticides: 'text-purple-800',
        fertilizers: 'text-green-800',
        soilMixes: 'text-amber-800',
        compost: 'text-blue-800'
    };

    const bgColor = bgColors[type] || 'bg-gray-50';
    const borderColor = borderColors[type] || 'border-gray-200';
    const titleColor = titleColors[type] || 'text-gray-800';

    return (
        <div className={`border ${borderColor} rounded-lg p-4 md:p-6 ${bgColor}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl">{formula.icon}</span>
                <div className="flex-1">
                    <h3 className={`text-base md:text-lg font-semibold ${titleColor}`}>
                        {formula.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">{formula.use}</p>
                    {formula.duration && (
                        <span className={`inline-block mt-1 px-2 py-1 ${borderColor} border rounded text-xs ${titleColor}`}>
                            {formula.duration}
                        </span>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Ingredients */}
                <div>
                    <h4 className={`font-semibold ${titleColor} mb-2 md:mb-3 text-sm md:text-base`}>
                        📝 {formula.type ? 'Thành phần:' : 'Nguyên liệu:'}
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
                        ⚗️ {formula.type === 'Nuôi trùn' ? 'Quy trình nuôi:' : formula.properties ? 'Cách trộn:' : 'Cách pha chế:'}
                    </h4>
                    <ol className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                        {formula.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Frequency or Benefits */}
            {formula.dosage && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                    <p className="text-xs md:text-sm">
                        <strong className={titleColor}>Tỉ lệ pha:</strong> {formula.dosage}
                    </p>
                </div>
            )}

            {formula.frequency && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                    <p className="text-xs md:text-sm">
                        <strong className={titleColor}>Tần suất:</strong> {formula.frequency}
                    </p>
                </div>
            )}

            {formula.benefits && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                    <p className="text-xs md:text-sm">
                        <strong className={titleColor}>Ưu điểm:</strong> {formula.benefits}
                    </p>
                </div>
            )}

            {formula.properties && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                    <p className="text-xs md:text-sm">
                        <strong className={titleColor}>Đặc tính:</strong> {formula.properties}
                    </p>
                </div>
            )}

            {formula.note && (
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded">
                    <p className="text-xs md:text-sm">
                        <strong className={titleColor}>Lưu ý:</strong> {formula.note}
                    </p>
                </div>
            )}
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
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🐟</span>
                    Phân bón lỏng hữu cơ
                </h3>
                <div className="grid gap-4 md:gap-6">
                    {formulasData.fertilizers.map((formula, idx) => (
                        <FormulaCard key={idx} formula={formula} type="fertilizers" />
                    ))}
                </div>
            </Card>

            {/* Soil Mixes */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🏺</span>
                    Công thức trộn đất trồng trọt
                </h3>
                <div className="grid gap-4 md:gap-6">
                    {formulasData.soilMixes.map((formula, idx) => (
                        <FormulaCard key={idx} formula={formula} type="soilMixes" />
                    ))}
                </div>
            </Card>

            {/* Compost */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">♻️</span>
                    Công thức ủ phân Compost
                </h3>
                <div className="grid gap-4 md:gap-6">
                    {formulasData.compost.map((formula, idx) => (
                        <FormulaCard key={idx} formula={formula} type="compost" />
                    ))}
                </div>
            </Card>

            {/* Compost Quality */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🧪</span>
                    {formulasData.compostQuality.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-green-50 rounded-lg p-3 md:p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2 md:mb-3 text-sm md:text-base">
                            👁️ {formulasData.compostQuality.visual.title}
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {formulasData.compostQuality.visual.items.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2 md:mb-3 text-sm md:text-base">
                            🔬 {formulasData.compostQuality.test.title}
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {formulasData.compostQuality.test.items.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 md:p-4 border border-orange-200">
                        <h4 className="font-semibold text-orange-800 mb-2 md:mb-3 text-sm md:text-base">
                            ⚠️ {formulasData.compostQuality.warning.title}
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {formulasData.compostQuality.warning.items.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Storage and Safety */}
            <Card>
                <h3 className="text-lg md:text-xl font-semibold text-red-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">⚠️</span>
                    {formulasData.storage.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                        <h4 className="font-semibold text-red-700 mb-2 md:mb-3 text-sm md:text-base">
                            📦 Bảo quản:
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {formulasData.storage.storage.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-700 mb-2 md:mb-3 text-sm md:text-base">
                            🛡️ An toàn:
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {formulasData.storage.safety.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    );
}
