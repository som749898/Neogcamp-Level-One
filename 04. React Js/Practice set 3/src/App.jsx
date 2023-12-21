import './App.css'
import ImageBuilder from './Components/Question1'
import Cartoon from './Components/Question2'
import Cartoon2 from './Components/Question3';
import Cartoon3 from './Components/Question4';
import VegetableList from './Components/Question5';
import FlowerBouquetPrice from './Components/Question6';
import FlowerBouquet from './Components/Question7';
import DonationMoney from './Components/Question8';
import {cartoons} from './Utility/cartoons';
import { vegetables } from './Utility/vegetables';
import {DonationData} from "./Utility/donationData";
import CarCategoryCount from './Components/Question9';
import { cars } from './Utility/cars';
import CertificationResult from './Components/Question10';
import { studentData } from './Utility/studentData';

function App() {
  const bouquet = [
    {
      id: 1,
      flowers: ['rose', 'lily', 'marigold'],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ['snapdragon', 'sunflower'],
      totalFlowers: 10,
      price: 3400,
    },
  ]
  return (
    <>
      {/* <ImageBuilder height={500} width={500} /> */}
      {/* <Cartoon cartoons={cartoons}/> */}
      {/* <Cartoon2 cartoons={cartoons}/> */}
      {/* <Cartoon3 cartoons={cartoons} superpower="Intelligence" /> */}
      {/* <VegetableList vegetables={vegetables}/> */}
      {/* <FlowerBouquetPrice bouquets={bouquet}/> */}
      {/* <FlowerBouquet bouquets={bouquet} /> */}
      {/* <DonationMoney donation={DonationData} /> */}
      {/* <CarCategoryCount cars={cars} /> */}
      <CertificationResult students={studentData} />
    </>
  )
}

export default App
