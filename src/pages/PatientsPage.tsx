import { useState, useEffect } from 'react';
import { Search, UserPlus, AlertCircle, Loader2 } from 'lucide-react';
import { loadPatients } from '../lib/api.ts';
import type { Patient, NewPatient } from '../lib/types.ts';
import PatientCard from '../components/PatientCard.tsx';
import PatientModal from '../components/PatientModal.tsx';
import AddPatientForm from '../components/AddPatientForm.tsx';

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = patients.filter((patient) =>
        patient.name.toLowerCase().includes(query)
      );
      setFilteredPatients(filtered);
    }
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await loadPatients();

      setPatients(data || []);
      setFilteredPatients(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch patients');
      console.error('Error fetching patients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPatient = async (newPatient: NewPatient) => {
    const now = new Date().toISOString();
    const newRecord: Patient = {
      id: Date.now().toString(),
      name: newPatient.name,
      age: newPatient.age,
      contact: newPatient.contact,
      email: newPatient.email ?? null,
      address: newPatient.address ?? null,
      medical_condition: newPatient.medical_condition ?? null,
      last_visit: newPatient.last_visit ?? null,
      created_at: now,
      updated_at: now,
    };

    setPatients((prev) => [newRecord, ...prev]);
    setFilteredPatients((prev) => [newRecord, ...prev]);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-12 h-12 text-teal-600 animate-spin mb-4" />
          <p className="text-gray-600 text-lg">Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-red-900 mb-1">Error Loading Patients</h3>
            <p className="text-red-700 mb-4">{error}</p>
            <button
              onClick={fetchPatients}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Records</h1>
            <p className="text-gray-600 mt-1">
              Manage and view all patient information
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm"
          >
            <UserPlus className="w-5 h-5" />
            Add New Patient
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      {filteredPatients.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">No patients found</h3>
          <p className="text-gray-600">
            {searchQuery
              ? 'Try adjusting your search query'
              : 'Get started by adding your first patient'}
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredPatients.length} of {patients.length} patients
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onViewDetails={setSelectedPatient}
              />
            ))}
          </div>
        </div>
      )}

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddPatient}
        />
      )}
    </div>
  );
}
