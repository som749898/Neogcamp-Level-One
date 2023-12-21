/* eslint-disable react/prop-types */
const EmployeeDetailsList = ({ employees }) => {
  console.log("employee ", employees);
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
      <ul>
        {/* Employee details will be displayed here */}
        {
          employees.map((employee, index) => <div key={index}>
            name: {employee.name}, level: {employee.level},dept: {employee.dept}, designation: {employee.designation},salary: {employee.salary}
          </div>)
        }
      </ul>
      <p className="mt-4">
        <span className="font-semibold">Total Salary Expense: </span>
        {
          employees.reduce((acc, cur) => acc += cur.salary , 0)
        }
      </p>
    </div>
  );
};

export default EmployeeDetailsList;