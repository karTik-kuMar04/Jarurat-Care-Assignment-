import { User, Phone, Eye } from 'lucide-react';
import type { Patient } from '../lib/types.ts';

interface PatientCardProps {
  patient: Patient;
  onViewDetails: (patient: Patient) => void;
}

export default function PatientCard({ patient, onViewDetails }: PatientCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
            <p className="text-sm text-gray-500">Age: {patient.age}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="w-4 h-4" />
          <span className="text-sm">{patient.contact}</span>
        </div>
        {patient.medical_condition && (
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {patient.medical_condition}
            </span>
          </div>
        )}
      </div>

      <button
        onClick={() => onViewDetails(patient)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium"
      >
        <Eye className="w-4 h-4" />
        View Details
      </button>
    </div>
  );
}
