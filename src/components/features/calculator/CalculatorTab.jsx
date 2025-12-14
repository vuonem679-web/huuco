import { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { calculateArea, calculatePlants } from '../../../utils/calculators';
import AreaCalculator from './AreaCalculator';
import FertilizerCalculator from './FertilizerCalculator';
import WaterCalculator from './WaterCalculator';
import Card from '../../common/Card';

export default function CalculatorTab() {
    const [length] = useLocalStorage('calcLength', 0);
    const [width] = useLocalStorage('calcWidth', 0);
    const [rowSpacing] = useLocalStorage('calcRowSpacing', 50);
    const [plantSpacing] = useLocalStorage('calcPlantSpacing', 40);

    const area = calculateArea(length, width);
    const { totalPlants } = calculatePlants(length, width, rowSpacing, plantSpacing);

    return (
        <div>
            <Card className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    🧮 Máy tính nông nghiệp
                </h2>
                <p className="text-gray-600 text-xs md:text-sm">
                    Công cụ tính toán diện tích, số lượng cây, phân bón và nước tưới
                </p>
            </Card>

            <AreaCalculator />
            <FertilizerCalculator area={area} />
            <WaterCalculator totalPlants={totalPlants} />
        </div>
    );
}
