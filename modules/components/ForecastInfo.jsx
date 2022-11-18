import { Box, Paper, Grid, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { setUnixDate } from '../utils/date-format';
import { styled } from '@mui/material/styles';
import OpacityIcon from '@mui/icons-material/Opacity';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
}));

const ForecastInfo = ({ isSeleted, daily, daily_units }) => {
    const { 
        precipitation_sum,
        apparent_temperature_max,
        apparent_temperature_min,
        sunrise,
        sunset,
        rain_sum,
    } = daily

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Item>
                        <Typography>
                            Sunrise {setUnixDate(sunrise[isSeleted], "h:mm")} - Sunset {setUnixDate(sunset[isSeleted], "h:mm")}
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <DeviceThermostatIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Average High ${apparent_temperature_max[isSeleted]} ${daily_units.apparent_temperature_max}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <DeviceThermostatIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Average Low ${apparent_temperature_min[isSeleted]} ${daily_units.apparent_temperature_max}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <OpacityIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Chance of Rain ${rain_sum[isSeleted]} mm`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AcUnitIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Chance of Snow ${precipitation_sum[isSeleted]} cm`}
                                />
                            </ListItem>
                        </List>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default ForecastInfo;