import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function AboutMe() {
    return (
        <Paper id= 'about-me' maxWidth="md" elevation={4} sx={{margin: 10}}>
            <Typography variant='h4' align='center' sx={{paddingTop:3}}>
               About Me
            </Typography>
            <Typography variant='body1' paragraph sx={{padding:3}}>
                Hi! My names Jessie And I'm a junior full stack web developer.
            </Typography>
        </Paper>
    )
}