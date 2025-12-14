export function calculateDate(startDate, daysToAdd) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString('vi-VN');
}

export function isGoodMonth(bestMonths) {
    const currentMonth = new Date().getMonth() + 1;
    return bestMonths.includes(currentMonth);
}

export function getDaysSinceStart(startDate, targetDate) {
    const start = new Date(startDate);
    const target = new Date(targetDate);
    return Math.floor((target - start) / (1000 * 60 * 60 * 24));
}
