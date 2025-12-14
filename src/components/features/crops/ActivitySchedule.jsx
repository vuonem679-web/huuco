import { useState } from 'react';
import { Calendar, List } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';
import ListView from './ListView';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export default function ActivitySchedule({ crop }) {
    const [startDate, setStartDate] = useLocalStorage(
        'startDate',
        new Date().toISOString().split('T')[0]
    );
    const [showCalendar, setShowCalendar] = useLocalStorage('showCalendar', false);

    return (
        <Card className="mb-4 md:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-xl md:text-2xl">📅</span>
                    Lịch trình chăm sóc chi tiết
                </h2>
                <Button
                    onClick={() => setShowCalendar(!showCalendar)}
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                >
                    {showCalendar ? (
                        <>
                            <List className="w-4 h-4 mr-2" />
                            <span>Xem danh sách</span>
                        </>
                    ) : (
                        <>
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Xem lịch</span>
                        </>
                    )}
                </Button>
            </div>

            {/* Start Date Picker */}
            <div className="mb-4 md:mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chọn ngày bắt đầu trồng:
                </label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full sm:w-auto px-3 md:px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-sm md:text-base"
                />
            </div>

            {/* View Toggle */}
            {showCalendar ? (
                <div className="text-center p-6 md:p-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm md:text-base">
                        📅 Calendar view đang được phát triển...
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mt-2">
                        Tạm thời sử dụng List view
                    </p>
                </div>
            ) : (
                <ListView crop={crop} startDate={startDate} />
            )}
        </Card>
    );
}
