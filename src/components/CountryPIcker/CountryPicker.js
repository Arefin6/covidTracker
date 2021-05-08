import { FormControl, NativeSelect, StylesProvider } from '@material-ui/core';
import axios from 'axios';
import styles from './CountryPicker.module.css'
import React, { useEffect, useState } from 'react';

const CountryPicker = ({handleCountryChange}) => {

    const url = 'https://covid19.mathdro.id/api/countries'; 

  const [countryData,setCountryData] = useState([]) 

  useEffect(()=>{
     const fetchData = async() =>{
      try {
        const {data:{countries}}= await axios.get(url);
         
        const requiredData = countries.map((country)=>country.name)

        setCountryData(requiredData)
  
      } catch (error) {
        console.log(error)  
      }
  }
  fetchData()
  },[])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countryData.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;