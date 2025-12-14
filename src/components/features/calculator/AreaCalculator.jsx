import { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { calculateArea, calculatePlants, calculateDensity } from '../../../utils/calculators';
import Card from '../../common/Card';

export default function AreaCalculator() {
    const [length, setLength] = useLocalStorage('calcLength', 0);
    const [width, setWidth] = useLocalStorage('calcWidth', 0);
    const [rowSpacing, setRowSpacing] = useLocalStorage('calcRowSpacing', 50);
    const [plantSpacing, setPlantSpacing] = useLocalStorage('calcPlantSpacing', 40);

    const area = calculateArea(length, width);
    const { plantsPerRow, numberOfRows, totalPlants } = calculatePlants(length, width, rowSpacing, plantSpacing);
    const density = calculateDensity(totalPlants, area);

    return (
        <Card className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-xl md:text-2xl">📏</span>
                Tính diện tích và số lượng cây
            </h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Input Section */}
                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-blue-800 mb-3 text-sm md:text-base">Thông số đất</h4>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                                Chiều dài (m):
                            </label>
                            <input
                                type="number"
                                value={length || ''}
                                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm md:text-base"
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                                Chiều rộng (m):
                            </label>
                            <input
                                type="number"
                                value={width || ''}
                                onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm md:text-base"
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                                Khoảng cách hàng (cm):
                            </label>
                            <input
                                type="number"
                                value={rowSpacing || ''}
                                onChange={(e) => setRowSpacing(parseFloat(e.target.value) || 50)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm md:text-base"
                                placeholder="50"
                            />
                        </div>
                        <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                                Khoảng cách cây (cm):
                            </label>
                            <input
                                type="number"
                                value={plantSpacing || ''}
                                onChange={(e) => setPlantSpacing(parseFloat(e.target.value) || 40)}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm md:text-base"
                                placeholder="40"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-green-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-green-800 mb-3 text-sm md:text-base">Kết quả tính toán</h4>
                    <div className="space-y-2 text-xs md:text-sm">
                        <p><strong>Diện tích:</strong> {area.toFixed(1)} m²</p>
                        <p><strong>Số hàng trồng:</strong> {numberOfRows} hàng</p>
                        <p><strong>Cây/hàng:</strong> {plantsPerRow} cây</p>
                        <p><strong>Tổng số cây:</strong> {totalPlants} cây</p>
                        <p><strong>Mật độ:</strong> {density} cây/ha</p>
                        {area > 0 && (
                            <div className="mt-3 p-2 bg-green-100 rounded">
                                <p className="text-green-800 font-semibold text-xs md:text-sm">Chi phí ước tính:</p>
                                <p className="text-xs md:text-sm">Giống: {Math.round(totalPlants * 1000).toLocaleString()} VNĐ</p>
                                <p className="text-xs md:text-sm">Tổng: {Math.round(area * 5000).toLocaleString()} VNĐ</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
