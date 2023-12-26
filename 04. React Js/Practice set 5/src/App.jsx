/* eslint-disable no-unused-vars */
import './App.css'
import UserStatusComponent from './Components/Question1'
import { StationaryItems } from './Components/Question2'
import { FilterStationaryItems } from './Components/Question3'
import { UserProfile } from './Components/Question4'
import { UsersFeed } from './Components/Question5'
import { UserChats } from './Components/Question6'
import { Comments } from './Components/Question7'

function App() {

  return (
    <>
      {/* <UserStatusComponent/> */}
      {/* <StationaryItems /> */}
      {/* <FilterStationaryItems/> */}
      {/* <UserProfile heading="User Profile" width={300} height={300} /> */}
      {/* <UsersFeed/> */}
      {/* <UserChats/> */}
      <Comments/>
    </>
  )
}

export default App
