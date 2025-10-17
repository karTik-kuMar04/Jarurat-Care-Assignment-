interface NavigationProps {
  currentPage: 'home' | 'patients' | 'about';
  onNavigate: (page: 'home' | 'patients' | 'about') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'patients' as const, label: 'Patients' },
    { id: 'about' as const, label: 'About' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                currentPage === item.id
                  ? 'border-teal-600 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
