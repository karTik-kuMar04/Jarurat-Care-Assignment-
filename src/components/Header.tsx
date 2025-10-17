import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-teal-600" fill="currentColor" />
          <h1 className="text-2xl font-bold text-gray-900">Jarurat Care</h1>
        </div>
      </div>
    </header>
  );
}
