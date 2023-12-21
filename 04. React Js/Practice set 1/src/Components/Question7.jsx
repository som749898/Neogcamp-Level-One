/* eslint-disable react/prop-types */
const StudentDetails = ({ student }) => {
  const totalMarks = student.english + student.maths + student.computers;
  let grade = "";
  if(totalMarks>= 225)
    grade = "A"
  else if(totalMarks>= 180)
    grade = "B"
  else if(totalMarks >= 150)
    grade = "C"
  else
    grade = "D"
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Details</h2>
      <div>
        {/* Student details, total marks, and grade will be displayed here */}
        <div>Name: {student.name}</div>
        <div>English: {student.english}</div>
        <div>Math: {student.maths}</div>
        <div>Computer: {student.computers}</div>
        <div>Total Marks: {totalMarks}</div>
        <div>Grade: {grade}</div>
      </div>
    </div>
  );
};

export default StudentDetails;