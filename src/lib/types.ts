export interface Patient {
  id: string;
  name: string;
  age: number;
  contact: string;
  email: string | null;
  address: string | null;
  medical_condition: string | null;
  last_visit: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewPatient {
  name: string;
  age: number;
  contact: string;
  email?: string;
  address?: string;
  medical_condition?: string;
  last_visit?: string;
}

export interface Database {
  public: {
    Tables: {
      patients: {
        Row: Patient;
        Insert: NewPatient;
        Update: Partial<NewPatient>;
      };
    };
  };
}
