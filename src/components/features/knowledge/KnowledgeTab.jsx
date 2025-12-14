import Card from '../../common/Card';
import knowledgeData from '../../../data/knowledge.json';

export default function KnowledgeTab() {
    return (
        <div>
            {/* Quick Reference Table */}
            {knowledgeData.quickReference && (
                <Card className="mb-4 md:mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
                        <span className="text-2xl md:text-3xl">🔍</span>
                        {knowledgeData.quickReference.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mb-4">
                        {knowledgeData.quickReference.description}
                    </p>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                                    <th className="p-3 text-left text-sm font-semibold">Sâu bệnh</th>
                                    <th className="p-3 text-left text-sm font-semibold">Dấu hiệu</th>
                                    <th className="p-3 text-left text-sm font-semibold">Thiên địch</th>
                                    <th className="p-3 text-left text-sm font-semibold">Giải pháp hữu cơ</th>
                                    <th className="p-3 text-left text-sm font-semibold">Phòng ngừa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {knowledgeData.quickReference.table.map((item, idx) => (
                                    <tr
                                        key={idx}
                                        className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50 transition-colors`}
                                    >
                                        <td className="p-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">{item.icon}</span>
                                                <span className="font-medium text-sm text-gray-800">{item.pest}</span>
                                            </div>
                                        </td>
                                        <td className="p-3 text-xs text-gray-700">{item.signs}</td>
                                        <td className="p-3 text-xs text-gray-700">{item.predator}</td>
                                        <td className="p-3 text-xs text-blue-700 font-medium">{item.organicSolution}</td>
                                        <td className="p-3 text-xs text-green-700">{item.prevention}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-3">
                        {knowledgeData.quickReference.table.map((item, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-3 bg-gradient-to-br from-white to-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="font-semibold text-sm text-gray-800">{item.pest}</h4>
                                </div>
                                <div className="space-y-2 text-xs">
                                    <div>
                                        <span className="font-semibold text-gray-700">🔍 Dấu hiệu:</span>
                                        <p className="text-gray-600 mt-1">{item.signs}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">🦋 Thiên địch:</span>
                                        <p className="text-gray-600 mt-1">{item.predator}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-blue-700">💊 Giải pháp:</span>
                                        <p className="text-blue-600 mt-1 font-medium">{item.organicSolution}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-green-700">🛡️ Phòng ngừa:</span>
                                        <p className="text-green-600 mt-1">{item.prevention}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* General Tips */}
                    <div className="mt-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-3 md:p-4 border-l-4 border-amber-500">
                        <h4 className="font-semibold text-amber-800 mb-2 text-sm md:text-base flex items-center gap-2">
                            <span className="text-lg">💡</span>
                            Mẹo chung khi xử lý sâu bệnh
                        </h4>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                            {knowledgeData.quickReference.generalTips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">✓</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            )}

            <Card className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                    📚 Kiến thức nông nghiệp hữu cơ
                </h2>

                {/* Soil Preparation */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🌱</span>
                    {knowledgeData.soilPreparation.title}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                    {knowledgeData.soilPreparation.sections.map((section, idx) => (
                        <div key={idx} className="bg-amber-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-amber-800 mb-2 md:mb-3 text-sm md:text-base flex items-center gap-2">
                                <span className="text-lg md:text-xl">{section.icon}</span>
                                {section.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {section.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Principles */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">💡</span>
                    {knowledgeData.principles.title}
                </h3>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 md:p-4 mb-4">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        {knowledgeData.principles.general.map((principle, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                                <span className="text-green-600 mt-1">✓</span>
                                <span><strong>{principle.split(':')[0]}:</strong> {principle.split(':')[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 md:p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-3 text-sm md:text-base flex items-center gap-2">
                        <span className="text-lg">🚫</span>
                        Nguyên tắc 5 KHÔNG
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                        {knowledgeData.principles.fiveNos.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-2 md:p-3 shadow-sm">
                                <span className="text-red-600 text-lg md:text-xl flex-shrink-0">❌</span>
                                <span className="text-xs md:text-sm font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            {/* IPM */}
            {knowledgeData.ipm && (
                <Card className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🛡️</span>
                        {knowledgeData.ipm.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-700 mb-4">{knowledgeData.ipm.description}</p>

                    {/* IPM Pyramid */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 md:p-4 mb-4">
                        <h4 className="font-semibold text-green-800 mb-3 text-sm md:text-base">
                            🎯 Nguyên tắc 4 tầng phòng thủ
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm">
                            {knowledgeData.ipm.pyramid.map((level, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2">
                                        <span className="text-lg md:text-xl">{level.icon}</span>
                                    </div>
                                    <h5 className="font-medium text-gray-700 mb-1 text-xs md:text-sm">{level.level}</h5>
                                    <p className="text-xs text-gray-600">{level.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Attract Predators & Warning Signs */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-yellow-800 mb-2 md:mb-3 text-sm md:text-base">
                                🦋 {knowledgeData.ipm.attractPredators.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.ipm.attractPredators.items.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-red-800 mb-2 md:mb-3 text-sm md:text-base">
                                🚨 {knowledgeData.ipm.warningSign.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.ipm.warningSign.items.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            )}

            {/* Natural Predators */}
            {knowledgeData.naturalPredators && (
                <Card className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🐞</span>
                        Thu hút và nuôi dưỡng thiên địch
                    </h3>

                    <div className="grid gap-4 md:gap-6">
                        {knowledgeData.naturalPredators.map((predator, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
                                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                    <span className="text-2xl md:text-3xl">{predator.icon}</span>
                                    <div className="flex-1">
                                        <h4 className="text-base md:text-lg font-semibold text-gray-800">{predator.name}</h4>
                                        <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                                            {predator.target}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                                    <div className="bg-white rounded p-2 md:p-3">
                                        <h5 className="font-semibold text-gray-700 mb-2 text-xs md:text-sm">🎯 Mồi săn:</h5>
                                        <ul className="space-y-1 text-xs text-gray-600">
                                            {predator.prey.map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded p-2 md:p-3">
                                        <h5 className="font-semibold text-gray-700 mb-2 text-xs md:text-sm">
                                            🌼 {predator.attract ? 'Thu hút:' : 'Môi trường:'}
                                        </h5>
                                        <ul className="space-y-1 text-xs text-gray-600">
                                            {(predator.attract || predator.environment).map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 rounded p-2 md:p-3">
                                        <h5 className="font-semibold text-gray-700 mb-2 text-xs md:text-sm">
                                            💡 {predator.shelter ? 'Nơi ẩn náu:' : predator.note ? 'Lưu ý:' : predator.protect ? 'Bảo vệ:' : 'Đặc điểm:'}
                                        </h5>
                                        <ul className="space-y-1 text-xs text-gray-600">
                                            {(predator.shelter || predator.note || predator.protect || predator.features || predator.benefits).map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {/* General Attract Predators */}
            {knowledgeData.attractPredatorsGeneral && (
                <Card className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4 flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🌿</span>
                        {knowledgeData.attractPredatorsGeneral.title}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4">
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2 md:mb-3 text-sm md:text-base">✅ NÊN LÀM:</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.attractPredatorsGeneral.shouldDo.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-700 mb-2 md:mb-3 text-sm md:text-base">❌ TRÁNH LÀM:</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.attractPredatorsGeneral.shouldAvoid.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-red-600 mt-1">✗</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-green-100 rounded p-3 text-xs md:text-sm text-green-800">
                        <strong>💡 Mẹo vàng:</strong> {knowledgeData.attractPredatorsGeneral.goldenTip}
                    </div>
                </Card>
            )}

            {/* Soil Health */}
            {knowledgeData.soilHealth && (
                <Card className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🌍</span>
                        {knowledgeData.soilHealth.title}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-green-800 mb-2 md:mb-3 text-sm md:text-base">
                                🔄 {knowledgeData.soilHealth.rotation.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.soilHealth.rotation.items.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-blue-800 mb-2 md:mb-3 text-sm md:text-base">
                                💧 {knowledgeData.soilHealth.waterManagement.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.soilHealth.waterManagement.items.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-purple-800 mb-2 md:mb-3 text-sm md:text-base">
                                📊 {knowledgeData.soilHealth.monitoring.title}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                {knowledgeData.soilHealth.monitoring.items.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            )}

            {/* Fertilizers */}
            <Card className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🌿</span>
                    Phân bón hữu cơ - Kiến thức chuyên sâu
                </h3>

                <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                    {knowledgeData.fertilizers.map((fert, idx) => (
                        <div key={idx} className="bg-emerald-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-emerald-800 mb-2 md:mb-3 text-sm md:text-base flex items-center gap-2">
                                <span className="text-lg md:text-xl">{fert.icon}</span>
                                {fert.name}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                <li><strong>Thành phần:</strong> {fert.composition}</li>
                                <li><strong>Liều lượng:</strong> {fert.dosage}</li>
                                <li><strong>Ưu điểm:</strong> {fert.benefits}</li>
                                <li><strong>Lưu ý:</strong> {fert.note}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Microorganisms */}
            <Card>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🔬</span>
                    Vi sinh vật có ích
                </h3>

                <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                    {knowledgeData.microorganisms.map((micro, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-blue-800 mb-2 md:mb-3 text-sm md:text-base flex items-center gap-2">
                                <span className="text-lg md:text-xl">{micro.icon}</span>
                                {micro.name}
                            </h4>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
                                <li><strong>Loại:</strong> {micro.type}</li>
                                <li><strong>Công dụng:</strong> {micro.use}</li>
                                <li><strong>Liều lượng:</strong> {micro.dosage}</li>
                                <li><strong>Dùng:</strong> {micro.application}</li>
                                {micro.benefits && (
                                    <li className="mt-2">
                                        <strong>Lợi ích:</strong>
                                        <ul className="mt-1 ml-2 space-y-1">
                                            {micro.benefits.map((benefit, i) => (
                                                <li key={i} className="text-xs">✓ {benefit}</li>
                                            ))}
                                        </ul>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
