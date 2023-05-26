import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function AboutMe() {
    return (
        <Paper id= 'contact-me' maxWidth="md" elevation={4} sx={{margin: 10}}>
            <Typography variant='h4' align='center' sx={{paddingTop:3}}>
                Contact Info
            </Typography>
            <Typography variant='body1' paragraph sx={{padding:3}}>
                JessieCorbinGibbs@gmail.com
            </Typography>
            <Link href="https://github.com/Karlfranzia" variant='body1' sx={{ display: 'block', paddingBottom: 3 }}>
                My Github
            </Link>
        </Paper>
    )
}