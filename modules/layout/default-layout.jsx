import { Box } from '@mui/material'
  
export const DefaultLayout = ({ children }) => {
    return (
        <Box component="main" id="main">
            {children}
        </Box>
    )
}