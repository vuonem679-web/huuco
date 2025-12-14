import Card from '../../common/Card';
import cropsData from '../../../data/crops.json';

export default function CropSelector({ selectedCrop, setSelectedCrop }) {
    return (
        <Card className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">📖</span>
                Chọn loại cây trồng
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {Object.entries(cropsData).map(([key, data]) => (
                    <button
                        key={key}
                        onClick={() => setSelectedCrop(key)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all active:scale-95 ${selectedCrop === key
                            ? 'border-primary-500 bg-primary-50 shadow-md'
                            : 'border-gray-200 hover:border-primary-300 bg-white'
                            }`}
                    >
                        <div className="text-3xl md:text-4xl mb-1 md:mb-2">{data.icon}</div>
                        <div className="font-semibold text-sm md:text-base text-gray-800">{data.name}</div>
                    </button>
                ))}
            </div>
        </Card>
    );
}
