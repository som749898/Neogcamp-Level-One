/* eslint-disable react/prop-types */
const CertificationResult = ({ students }) => {
  const totalMark = students.reduce(((acc, cur) => acc += cur.marks), 0)
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Certification Result</h2>
      <p>
        {/* Certification result will be displayed here */}
        {
          totalMark/students.length > 80 ? "Certification Approved" : "Certification Not Approved"
        }
      </p>
    </div>
  );
};

export default CertificationResult;