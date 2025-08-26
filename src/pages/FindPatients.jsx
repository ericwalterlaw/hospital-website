import { useMemo, useState } from 'react';
import { patients } from '../data/patients';
import PatientCard from '../components/PatientCard';

export default function FindPatients() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return []; // <-- now empty if no search entered
    return patients.filter(p =>
      p.patientName.toLowerCase().includes(q) ||
      String(p.roomNumber).toLowerCase().includes(q) ||
      p.diagnoses.toLowerCase().includes(q) ||
      p.dateCheckedIn.toLowerCase().includes(q) ||
      (p.possibleDischargeDate && p.possibleDischargeDate.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="max-w-3xl mx-auto pb-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Patients</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by name, room, or diagnosis..."
          className="w-full max-w-xl border rounded-xl px-4 py-3 shadow-sm
                     focus:outline-none focus:ring focus:ring-blue-200"
          aria-label="Search patients"
        />
      </div>

      <div className="grid gap-4">
        {query && results.length === 0 && (
          <p className="text-center text-gray-500">No matching patients.</p>
        )}

        {results.map((p, i) => (
          <PatientCard key={i} patient={p} />
        ))}
      </div>
    </section>
  );
}
