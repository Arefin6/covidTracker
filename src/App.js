import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPIcker/CountryPicker';

function App() {
   
  const url = 'https://covid19.mathdro.id/api'; 

  const [cardData,setCardData] = useState({}) 

  useEffect(()=>{
     const fetchData = async() =>{
      try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        const modefiedData = {confirmed,recovered,deaths,lastUpdate}
        setCardData(modefiedData)
  
      } catch (error) {
        console.log(error)  
      }
  }
  fetchData()
  },[])

  return (
    <div className="container">
       <Cards data={cardData}></Cards>
       <CountryPicker></CountryPicker>
       <Chart></Chart>     
    </div>
  );
}
export default App;
