/* eslint-disable no-unused-vars */
import './App.css'
import TabComponent from './Components/Question1'
import FontSizeController from './Components/Question2'
import ItemList from './Components/Question3'
import { characters } from './Utility/characters'
import {itemList} from './Utility/itemList'
import TodoList from './Components/Question4'
import {todoItems} from './Utility/todoItems'
import NewTodoList from './Components/Question5'
import BookList from './Components/Question6'
import {books} from './Utility/books'
import GameComponent from './Components/Question7'

function App() {

  return (
    <>
      {/* <TabComponent characters={characters} /> */}
      {/* <FontSizeController/> */}
      {/* <ItemList itemList={itemList} /> */}
      {/* <TodoList todoItems={todoItems} /> */}
      {/* <NewTodoList todoItems={todoItems} /> */}
      {/* <BookList books={books}/> */}
      <GameComponent lives={3}  />
    </>
  )
}

export default App
