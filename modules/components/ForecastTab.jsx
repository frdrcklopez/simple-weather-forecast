import { Card, CardContent, Typography } from '@mui/material';
import { setUnixDate } from '../utils/date-format'

const ForecastTab = ({day, unit, temp_max, temp_low, val, isSeleted, selectHandler }) => {

    return (
        <Card
            onClick={selectHandler}
            sx={{ 
                m : 1,
                display : 'flex',
                flex : 'auto',
                flexDirection : 'column',
                justifyContent: "center",
                alignItems: 'center',
                height : '120px',
                width : val === isSeleted ? '200px' : 'auto',
                background : val === isSeleted ? '#f1f1f1' : '#ffffff',
                cursor : 'pointer',
            }}
        >
            <CardContent align="center">
                <Typography>
                    {setUnixDate(day, "ddd MMM D")}
                </Typography>
                <Typography>
                    {temp_max} {unit}
                </Typography>
                <Typography>
                    {temp_low} {unit}
                </Typography>
            </CardContent>
        </Card>    
    );
}
 
export default ForecastTab;