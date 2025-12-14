export function calculateArea(length, width) {
    return length * width;
}

export function calculatePlants(length, width, rowSpacing, plantSpacing) {
    const rowDistanceM = rowSpacing / 100;
    const plantDistanceM = plantSpacing / 100;
    const plantsPerRow = plantDistanceM > 0 ? Math.floor(length / plantDistanceM) : 0;
    const numberOfRows = rowDistanceM > 0 ? Math.floor(width / rowDistanceM) : 0;
    const totalPlants = plantsPerRow * numberOfRows;

    return {
        plantsPerRow,
        numberOfRows,
        totalPlants
    };
}

export function calculateDensity(totalPlants, area) {
    return area > 0 ? (totalPlants / area * 10000).toFixed(0) : 0;
}

export function calculateFertilizer(area) {
    const organicFertilizer = Math.round((area / 1000) * 4000);
    const npkFertilizer = Math.round((area / 1000) * 150);
    const ashFertilizer = Math.round((area / 1000) * 400);

    return {
        organic: organicFertilizer,
        npk: npkFertilizer,
        ash: ashFertilizer
    };
}

export function calculateWater(plantCount, waterPerPlant) {
    return plantCount * waterPerPlant;
}
