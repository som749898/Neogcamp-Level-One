/* eslint-disable react/prop-types */
const EmployeeDetails = ({ employee }) => {
  return (
    <>
    <h1>Employee Data</h1>
    <ul className="list-disc ml-4">
      {
        employee.map(employee => <>
          <li>
        <span className="font-semibold">name:</span> {employee.name},
      </li>
      <li>
        <span className="font-semibold">level:</span> {employee.level},
      </li>
      <li>
        <span className="font-semibold">dept:</span> {employee.dept},
      </li>
      <li>
        <span className="font-semibold">designation:</span> {employee.designation},
      </li>
      <li>
        <span className="font-semibold">salary:</span> {employee.salary}
      </li>
      <br/>
      <br/>
        </>)
      }
    </ul>
    </>
  );
};

export default EmployeeDetails;