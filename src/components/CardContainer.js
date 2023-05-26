import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MediaCard from './MediaCard';
import AboutMe from './AboutMe';
import ContactInfo from './ContactInfo';

export default function CardContainer() {
    const projects = [
        {
          title: "Playlist Maker",
          description: "This app lets you create a Spotify playlist that displays the lyrics of the song currently playing",
          image: "/assets/screencapture-whitneywishart-github-io-project-one-lyrics-legend-2023-02-21-18_24_46.png",
          link: "https://whitneywishart.github.io/project-one-lyrics-legend/"
        },
        {
          title: "Group Calendar",
          description: "This app lets you and your friends view and edit the same calendar simultaneously",
          image: "/assets/group-calendar.png",
          link: "https://group-calendar.herokuapp.com/login"
        },
        {
          title: "Landing Page",
          description: "This is an example landing page.",
          image: "/assets/landing-page.png",
          link: "https://karlfranzia.github.io/landing-page/"
        },
        {
            title: "Weather Dashboard",
            description: "A simple Dashboard that lets you look up a forecast in a city.",
            image: "/assets/weather-dashboard.png",
            link: "https://karlfranzia.github.io/weather-dashboard/"
          },
        
      ];

    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx = {{ margin: '0 auto' , marginBottom: '100rem'}}>
        <AboutMe />
        <MediaCard projects = {projects}/>
        <ContactInfo/>
      </Container>
    </React.Fragment>
  
    )
}

