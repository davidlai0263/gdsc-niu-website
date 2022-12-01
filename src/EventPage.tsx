import { Box } from "@mui/material"

const EventPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            </Box>
            {/* 以上為Desktop */}

            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
            </Box>
        </>
    )
}

export default EventPage