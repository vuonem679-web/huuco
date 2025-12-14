import { useLocalStorage } from './hooks/useLocalStorage';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import TabNavigation from './components/layout/TabNavigation';
import Footer from './components/layout/Footer';
import CropsTab from './components/features/crops/CropsTab';
import KnowledgeTab from './components/features/knowledge/KnowledgeTab';
import FormulasTab from './components/features/formulas/FormulasTab';
import CalculatorTab from './components/features/calculator/CalculatorTab';

function App() {
  const [activeTab, setActiveTab] = useLocalStorage('activeTab', 'crops');

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'crops' && (
            <motion.div
              key="crops"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <CropsTab />
            </motion.div>
          )}
          {activeTab === 'knowledge' && (
            <motion.div
              key="knowledge"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <KnowledgeTab />
            </motion.div>
          )}
          {activeTab === 'formulas' && (
            <motion.div
              key="formulas"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <FormulasTab />
            </motion.div>
          )}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <CalculatorTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
