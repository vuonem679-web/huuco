import Card from '../../common/Card';
import knowledgeData from '../../../data/knowledge.json';

export default function KnowledgeTab() {
    return (
        <div>
            {/* Soil Preparation */}
            <Card className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                    📚 Kiến thức nông nghiệp hữu cơ
                </h2>

                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🌱</span>
                    {knowledgeData.soilPreparation.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
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

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-orange-800 mb-2 text-sm md:text-base">
                        📋 Nguyên tắc 5 KHÔNG
                    </h4>
                    <p className="text-xs md:text-sm font-medium text-red-700">
                        {knowledgeData.principles.fiveNos}
                    </p>
                </div>
            </Card>

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
                            </ul>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
