import './App.css'
import { employees } from './Utility/employees'
import {employeeData} from './Utility/employeeData';
import EmployeeCard from './Components/Question1'
import StyledButton from './Components/Question2'
import StationeryList from "./Components/Question3"
import ImageWithCaption from './Components/Question4'
import ProductList from './Components/Question5'
import ProductListSort from './Components/Question6'
import StudentDetails from './Components/Question7'
import EmployeeDetails from './Components/Question8';
import EmployeeDetailsList from './Components/Question9';
import EmployeeDetailsList2 from './Components/Question10';

function App() {
  const items = ['pen', 'pencil', 'ruler', 'eraser'];
  const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
  const caption = 'Spring Flowers'
  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]
  const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }
  return (
    <>
      {/* <EmployeeCard employees={employees}  /> */}
      {/* <StyledButton backgroundColor="lightgreen" color="darkgreen" borderRadius="5px" padding="10px" /> */}
      {/* <StationeryList header="Stationery Items" items={items} /> */}
      {/* <ImageWithCaption imageSrc={imageLink} caption={caption}  /> */}
      {/* <ProductList products={products} /> */}
      {/* <ProductListSort products={products} /> */}
      {/* <StudentDetails student={student}/> */}
      {/* <EmployeeDetails employee={employeeData} /> */}
      {/* <EmployeeDetailsList employees={employeeData} /> */}
      <EmployeeDetailsList2 employees={employeeData} />
    </>
  )
}

export default App
