import Card from '../../common/Card';

export default function PestManagement({ pests }) {
    return (
        <Card className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">🐛</span>
                Sâu bệnh thường gặp & Cách xử lý
            </h2>
            <div className="grid gap-3 md:gap-4">
                {pests.map((pest, idx) => (
                    <div key={idx} className="border border-red-200 rounded-lg p-3 md:p-4 bg-red-50">
                        <h3 className="font-semibold text-red-800 mb-2 text-sm md:text-base">{pest.name}</h3>
                        <div className="space-y-2 text-xs md:text-sm">
                            <div>
                                <strong className="text-gray-700">Dấu hiệu:</strong>
                                <span className="text-gray-600 ml-2">{pest.signs}</span>
                            </div>
                            <div>
                                <strong className="text-gray-700">Cách xử lý:</strong>
                                <span className="text-gray-600 ml-2">{pest.solution}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
