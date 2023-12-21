import './App.css'
import DisplayName from './Components/Question1'
import Todo from './Components/Question10'
import Product from './Components/Question2'
import UserProfile from './Components/Question3'
import Gadgets from './Components/Question4'
import Gadgets2 from './Components/Question5'
import Article from './Components/Question6'
import About from './Components/Question7'
import MyGadgets from './Components/Question8'
import ColorPicker from './Components/Question9'
import { products } from './Utility/products '
import { todoItems } from './Utility/todoItems'

function App() {
  const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
  }
  const title = 'React is awesome'
  const content = 'React is a JavaScript library for building user interfaces.'
  const heading = 'About Me'
  const name = 'Preeti' // you can put your name
  const learning = 'I am learning React JS currently at neoG Camp.'
  return (
    <>
      {/* <DisplayName name="Manish" /> */}
      {/* <Product name="Football" price={500} /> */}
      {/* <UserProfile user={userData} /> */}
      {/* <Gadgets products={products}/> */}
      {/* <Gadgets2 products={products} /> */}
      {/* <Article title={title} content={content} /> */}
      {/* <About heading={heading} name={name} learning={learning} /> */}
      {/* <MyGadgets products={products} /> */}
      {/* <ColorPicker/> */}
      <Todo todoItems={todoItems} />
    </>
  )
}

export default App
