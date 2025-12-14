import { TYPE_COLORS, TYPE_ICONS, TYPE_LABELS } from '../../../data/constants';
import { calculateDate } from '../../../utils/dateUtils';
import * as Icons from 'lucide-react';

export default function ListView({ crop, startDate }) {
    return (
        <div className="space-y-3 md:space-y-4">
            {crop.activities.map((activity, idx) => {
                const IconComponent = Icons[TYPE_ICONS[activity.type]];

                return (
                    <div
                        key={idx}
                        className={`border-l-4 rounded-lg p-3 md:p-4 ${TYPE_COLORS[activity.type]} hover:shadow-md transition-all`}
                    >
                        <div className="flex items-start justify-between mb-2 gap-2">
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="font-bold text-base md:text-lg">Ngày {activity.day}</span>
                                <span className="text-xs md:text-sm opacity-75">
                                    ({calculateDate(startDate, activity.day)})
                                </span>
                            </div>
                            <span className="text-xs px-2 py-1 bg-white rounded uppercase font-semibold flex items-center gap-1 flex-shrink-0">
                                {IconComponent && <IconComponent className="w-3 h-3" />}
                                <span className="hidden sm:inline">{TYPE_LABELS[activity.type]}</span>
                            </span>
                        </div>
                        <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{activity.title}</h3>
                        <p className="text-xs md:text-sm">{activity.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}
