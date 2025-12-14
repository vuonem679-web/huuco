import { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { calculateWater } from '../../../utils/calculators';
import Card from '../../common/Card';
import Button from '../../common/Button';

export default function WaterCalculator({ totalPlants }) {
    const [plantCountInput, setPlantCountInput] = useLocalStorage('calcPlantCount', 0);
    const [waterPerPlant, setWaterPerPlant] = useLocalStorage('calcWaterPerPlant', 0.5);

    const totalWater = calculateWater(plantCountInput, waterPerPlant);

    return (
        <Card className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">💧</span>
                Tính lượng nước tưới
            </h3>

            <div className="bg-cyan-50 rounded-lg p-3 md:p-4">
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4">
                    <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Số lượng cây:
                        </label>
                        <input
                            type="number"
                            value={plantCountInput || ''}
                            onChange={(e) => setPlantCountInput(parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:border-cyan-500 focus:outline-none text-sm md:text-base mb-2"
                            placeholder="0"
                        />
                        <Button
                            onClick={() => setPlantCountInput(totalPlants)}
                            variant="secondary"
                            size="sm"
                            className="w-full"
                        >
                            Dùng số cây đã tính ({totalPlants})
                        </Button>
                    </div>

                    <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Lượng nước/cây (lít):
                        </label>
                        <select
                            value={waterPerPlant}
                            onChange={(e) => setWaterPerPlant(parseFloat(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:border-cyan-500 focus:outline-none text-sm md:text-base"
                        >
                            <option value="0.5">Rau lá nhỏ (0.5L)</option>
                            <option value="1">Rau củ (1L)</option>
                            <option value="2">Cây bụi (2L)</option>
                            <option value="5">Cây ăn quả nhỏ (5L)</option>
                            <option value="20">Cây ăn quả lớn (20L)</option>
                        </select>
                    </div>
                </div>

                <div className="text-center border-t border-cyan-200 pt-4">
                    <div className="text-xl md:text-2xl font-bold text-cyan-800 mb-2">
                        {totalWater.toLocaleString()} lít/ngày
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 space-y-1">
                        <p>Lượng nước/tuần: {(totalWater * 7).toLocaleString()} lít</p>
                        <p>Lượng nước/tháng: {(totalWater * 30).toLocaleString()} lít</p>
                        {totalWater > 0 && (
                            <p className="text-cyan-700 font-medium mt-2">
                                Chi phí nước ước tính: {Math.round(totalWater * 30 * 15).toLocaleString()} VNĐ/tháng
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
