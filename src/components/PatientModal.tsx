import { X, User, Phone, Mail, MapPin, Calendar, Stethoscope } from 'lucide-react';
import type { Patient } from '../lib/types';

interface PatientModalProps {
  patient: Patient;
  onClose: () => void;
}

export default function PatientModal({ patient, onClose }: PatientModalProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{patient.name}</h3>
              <p className="text-gray-600">Patient ID: {patient.id.slice(0, 8)}...</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Age</span>
                </div>
                <p className="text-gray-900 ml-6">{patient.age} years</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Contact</span>
                </div>
                <p className="text-gray-900 ml-6">{patient.contact}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </div>
                <p className="text-gray-900 ml-6">{patient.email || 'N/A'}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Stethoscope className="w-4 h-4" />
                  <span className="text-sm font-medium">Medical Condition</span>
                </div>
                <p className="text-gray-900 ml-6">{patient.medical_condition || 'N/A'}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Last Visit</span>
                </div>
                <p className="text-gray-900 ml-6">{formatDate(patient.last_visit)}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Address</span>
                </div>
                <p className="text-gray-900 ml-6">{patient.address || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <p>Record created: {formatDate(patient.created_at)}</p>
              <p>Last updated: {formatDate(patient.updated_at)}</p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
