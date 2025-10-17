import { Heart, Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Jarurat Care</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to revolutionizing patient care management through innovative technology
          and compassionate service.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-teal-600" fill="currentColor" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to make healthcare management more accessible and efficient, Jarurat Care
              has been serving healthcare providers for years. Our platform combines cutting-edge technology
              with a deep understanding of healthcare needs to deliver solutions that truly make a difference.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To empower healthcare providers with intuitive tools that simplify patient management,
            enhance care quality, and improve outcomes for every patient we serve.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To become the leading patient care management platform, recognized for innovation,
            reliability, and our unwavering commitment to improving healthcare delivery worldwide.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  <strong>Compassion:</strong> We care deeply about patients and healthcare providers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  <strong>Innovation:</strong> We continuously evolve to meet changing healthcare needs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  <strong>Excellence:</strong> We maintain the highest standards in everything we do
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  <strong>Security:</strong> We protect patient data with unwavering commitment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
