#  Patient Management Web App

A simple and responsive **Patient Management Web Application** built using **React + TypeScript + Tailwind CSS**.  
This app allows users to **view, search, and add patient records**, with data fetched from a **dummy API hosted on JSONBin.io**.

---

## Author & Live Link
- Kartik Kumar
- mysoulisinfinity1@gmail.com
- Live Link -> (https://jarurat-care-assignment-five.vercel.app/)

## Features

-  View all patient records  
-  Search patients by name  
-  Add new patients (locally in UI)  
-  TypeScript for strong type safety  
-  Tailwind CSS for modern responsive design  
-  Dummy API integration using [JSONBin.io](https://jsonbin.io)

---

## Tech Stack

| Category | Tools / Libraries |
|-----------|-------------------|
| Framework | React + TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| API | JSONBin.io (mock REST API) |
| Build Tool | Vite |

---

##  Setup Instructions

### 1️ Clone the Repository
```bash
git clone https://github.com/karTik-kuMar04/Jarurat-Care-Assignment-
cd Jarurat-Care-Assignment-
```
### 2 Install Dependencies
```bash
npm install
```
### 3 Configure API
const BIN_URL = "https://api.jsonbin.io/v3/b/68f1f6d143b1c97be96c98dd/latest";

### 4 Run the Development Server
```bash
npm run dev
```

---
# Example Patient Data
{
  "data": [
    {
      "id": 1,
      "name": "Ravi Kumar",
      "age": 45,
      "contact": "9876543210",
      "email": "ravi.kumar@example.com",
      "address": "New Delhi, India",
      "medical_condition": "Type 2 Diabetes",
      "last_visit": "2025-09-28"
    }
  ]
}


---

## 🗂️ Project Structure

```text
src/
├── components/
│   ├── AddPatientForm.tsx
│   ├── PatientCard.tsx
│   ├── PatientModal.tsx
├── lib/
│   ├── api.ts
│   ├── types.ts
├── pages/
│   ├── PatientsPage.tsx
├── App.tsx
└── main.tsx
```
