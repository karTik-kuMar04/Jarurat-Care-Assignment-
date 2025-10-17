import { Heart, Users, Clock, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-teal-600" fill="currentColor" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Jarurat Care
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted partner in patient care management. We provide comprehensive healthcare solutions
          with compassion and excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Management</h3>
          <p className="text-gray-600">
            Efficiently manage patient records with our intuitive dashboard system.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Round-the-clock access to patient information whenever you need it.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
          <p className="text-gray-600">
            Your patient data is protected with industry-standard security measures.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 mb-6">
          Visit the Patients page to view and manage patient records.
        </p>
        <div className="inline-flex items-center gap-2 text-teal-600 font-medium">
          <Heart className="w-5 h-5" fill="currentColor" />
          <span>Caring for your patients, one record at a time</span>
        </div>
      </div>
    </div>
  );
}
