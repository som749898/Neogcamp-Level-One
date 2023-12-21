/* eslint-disable react/prop-types */
const EmployeeCard = ({ employees }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      {
        employees.map((employee, index) => <div className="text-black" key={index}>
          {employee.name}: <span className="text-green-500">{employee.designation}</span> with <span className="text-blue-500">{employee.experience} years</span>
        </div>)
      }
    </div>
  );
};

export default EmployeeCard;
