import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <div id='my-work' style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
      {props.projects.map((project, i) => (
        <Card key={i} sx={{ width: 400, boxShadow: '8' }}>
          <CardMedia
            sx={{
              height: 200,
              backgroundPosition: 'top',
              
            }}
            image={process.env.PUBLIC_URL + project.image}
            title={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={project.link}>
              See Project
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
