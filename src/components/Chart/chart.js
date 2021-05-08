import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Bar, Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const url = 'https://covid19.mathdro.id/api/daily'; 

  const [dailyData,setDailyData] = useState([]) 

  useEffect(()=>{
    
     const fetchData = async() =>{
      try {
        const {data} = await axios.get(url);
        const modifiedData = data.map((dailyData) =>({
          confirmed:dailyData.confirmed.total,
          deaths:dailyData.deaths.total,
          date:dailyData.reportDate
        }));
        setDailyData(modifiedData)
        console.log(dailyData)
  
      } catch (error) {
        console.log(error)  
      }
  }
  fetchData()
  },[])

  const lineChart =(
     dailyData.length ?
     (<Line
      data={{
        labels:dailyData.map(({date})=>date),
        datasets:[{
          data:dailyData.map(({confirmed})=>confirmed),
          label:'infected',
          borderColor:'#3333ff',
          fill:true
        },{
          data:dailyData.map(({deaths})=>deaths),
          label:'deaths',
          borderColor:'red',
          backgroundColor:'rgba(255,0,0,0.5)',
          fill:true
        }]
      }}
     />):"No Chart"
  );
  
  const barChart = (
    confirmed ? 
    (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ):null
  )

    return (
        <div className={styles.container}>
             {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;