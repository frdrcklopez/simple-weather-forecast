import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import { DefaultLayout } from '../modules/layout/default-layout'
import WeatherDashboard from "../modules/components/WeatherDashboard";
import LocationSelect from "../modules/components/locationSelect";
import SkeletonDashboard from "../modules/components/SkelotonDashboard";

const API_URL = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum&timeformat=unixtime&timezone=auto&`

const initialState = {
  lat : '',
  lng : '' 
}

const Home = () => {
  const [location, setLocation] = useState(initialState);
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchForecast = async () => {
      const { lat, lng } = location;
      if(lat || lng){
        const forecast = await fetch(
          `${API_URL}latitude=${lat}&longitude=${lng}`
        )
        setWeather(await forecast.json())
      }      
    }
    fetchForecast()
  },[location])

  const onSelectHandler = (e) => {
    setLocation({...e})
  }

  return(
    <Container maxWidth="lg">
      <LocationSelect 
        onChange={onSelectHandler} 
      />
      {weather
        ?
        <WeatherDashboard 
          weather={weather}
        />
        : <SkeletonDashboard />
      }
    </Container>
  );
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)

export default Home