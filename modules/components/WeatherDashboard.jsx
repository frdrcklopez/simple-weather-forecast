import { useState } from 'react';
import { Box } from '@mui/material';
import ForecastTab from './ForecastTab';
import ForecastInfo from './ForecastInfo';

const WeatherDashboard = ({weather}) => {
    const { 
        daily, 
        daily_units 
    } = weather;

    const { 
        time, 
        temperature_2m_max, 
        temperature_2m_min, 
    } = daily;

    const [isSeleted, setIsSeleted] = useState(0)

    const selectHandler = (value) => {
        setIsSeleted(value)
    }

    return (
        <Box>
            <Box 
                display="flex"
                direction="column"
                alignItems="center"
                justifyContent="center"
                mb={2}
            >
                {time.map((day, key) => (
                    <ForecastTab 
                        key={key}
                        day={day}
                        temp_max={temperature_2m_max[key]}
                        temp_low={temperature_2m_min[key]}
                        unit={daily_units.temperature_2m_max}
                        val={key}
                        isSeleted={isSeleted}
                        selectHandler={() => selectHandler(key)}
                    />
                ))}
            </Box>

            <ForecastInfo 
                isSeleted={isSeleted}
                daily={daily}
                daily_units={daily_units}
            />
        </Box>
    );
}
 
export default WeatherDashboard;