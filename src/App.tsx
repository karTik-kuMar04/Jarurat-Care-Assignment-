import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage.tsx';
import PatientsPage from './pages/PatientsPage.tsx';
import AboutPage from './pages/AboutPage.tsx';

type Page = 'home' | 'patients' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'patients':
        return <PatientsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
