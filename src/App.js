import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPIcker/CountryPicker';

function App() {
   
  const url = 'https://covid19.mathdro.id/api'; 
  const [cardData,setCardData] = useState({}) 
  const [country,setCountry] = useState('')

  const handleCountryChange = async(country) =>{
    const data = await fetchData(country)
    
  }

  const fetchData = async(country) =>{
    let changeableUrl = url
    if(country){
      changeableUrl =`${url}/countries/${country}`
    }
    try {
      const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
      const modefiedData = {confirmed,recovered,deaths,lastUpdate}
      setCardData(modefiedData)

    } catch (error) {
      console.log(error)  
    }
}

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="container">
       <Cards data={cardData}></Cards>
       <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
       <Chart></Chart>     
    </div>
  );
}
export default App;
