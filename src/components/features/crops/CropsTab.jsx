import { useLocalStorage } from '../../../hooks/useLocalStorage';
import CropSelector from './CropSelector';
import CropInfo from './CropInfo';
import ActivitySchedule from './ActivitySchedule';
import PestManagement from './PestManagement';
import HarvestGuide from './HarvestGuide';
import cropsData from '../../../data/crops.json';

export default function CropsTab() {
    const [selectedCrop, setSelectedCrop] = useLocalStorage('selectedCrop', 'ca-chua');
    const crop = cropsData[selectedCrop];

    return (
        <div>
            <CropSelector selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop} />
            <CropInfo crop={crop} />
            <ActivitySchedule crop={crop} />
            <PestManagement pests={crop.pests} />
            <HarvestGuide harvest={crop.harvest} />
        </div>
    );
}
