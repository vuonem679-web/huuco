import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/layout/Header';
import TabNavigation from './components/layout/TabNavigation';
import Footer from './components/layout/Footer';
import CropsTab from './components/features/crops/CropsTab';
import KnowledgeTab from './components/features/knowledge/KnowledgeTab';
import FormulasTab from './components/features/formulas/FormulasTab';
import CalculatorTab from './components/features/calculator/CalculatorTab';

function App() {
  const [activeTab, setActiveTab] = useLocalStorage('activeTab', 'crops');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-6">
        {activeTab === 'crops' && <CropsTab />}
        {activeTab === 'knowledge' && <KnowledgeTab />}
        {activeTab === 'formulas' && <FormulasTab />}
        {activeTab === 'calculator' && <CalculatorTab />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
