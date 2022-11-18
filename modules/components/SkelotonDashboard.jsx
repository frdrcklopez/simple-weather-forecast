import { Grid, Stack, Paper, Box, Skeleton } from '@mui/material';

const arr = [1,2,3,4,5,6,7]; 

const SkeletonDashboard = () => {
    return (
        <Box>
            <Box
                display="flex"
                direction="column"
                alignItems="center"
                justifyContent="center"
                mb={2}
            >
            {arr.map((item) => (
                <Skeleton 
                    key={item}
                    variant="rectangular"
                    sx={{ 
                        m : 1,
                        display : 'flex',
                        flex : 'auto',
                        flexDirection : 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        height : '120px',
                        width : '200px',
                    }}
                />
            ))}
            </Box>

            <Skeleton variant="rectangular" height={200} />
        </Box>
    );
}
 
export default SkeletonDashboard;