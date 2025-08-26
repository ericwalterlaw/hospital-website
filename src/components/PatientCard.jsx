export default function PatientCard({ patient }) {
  const {
    patientName,
    roomNumber,
    diagnoses,
    dateCheckedIn,
    possibleDischargeDate
  } = patient;

  return (
    <div className="border rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{patientName}</h3>
        <span className="text-sm px-2 py-1 rounded-full bg-gray-100">
          Room {roomNumber}
        </span>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <div>
          <dt className="text-gray-500">Diagnoses</dt>
          <dd className="font-medium">{diagnoses}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Checked In</dt>
          <dd className="font-medium">{dateCheckedIn}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Possible Discharge</dt>
          <dd className="font-medium">{possibleDischargeDate || "TBD"}</dd>
        </div>
      </dl>
    </div>
  );
}
