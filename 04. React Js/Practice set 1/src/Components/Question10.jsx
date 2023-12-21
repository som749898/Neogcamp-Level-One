/* eslint-disable react/prop-types */
const EmployeeDetailsList2 = ({ employees }) => {
  const styleFunction = (employee) => {
    let style = "";
    if(employee.level === 2)
       style += "bg-orange-500 ";
    if(employee.designation === "President")
      style += "bg-red-500 "
    return style;
  }
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
      <ul>
        {
          employees.map((employee, index) => <li className={styleFunction(employee)} key={index}>
            name: {employee.name}, level: {employee.level},dept: {employee.dept}, designation: {employee.designation},salary: {employee.salary}
          </li>)
        }
      </ul>
    </div>
  );
};

export default EmployeeDetailsList2;