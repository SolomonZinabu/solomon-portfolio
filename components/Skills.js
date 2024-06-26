import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <Box id="skills" my={5}>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Skills
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Frontend
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">JavaScript</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">TypeScript</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">React</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Next.js</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">React Native</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Angular</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Ionic</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">HTML</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">CSS</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Material-UI</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Tailwind CSS</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Bootstrap</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '16px' }}>
            Backend
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">Node.js</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Express.js</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Python</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Django</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">RESTful APIs</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">GraphQL</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '16px' }}>
            Database
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">MySQL</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">PostgreSQL</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">MongoDB</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">SQLite</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '16px' }}>
            DevOps and Server Management
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">AWS</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Docker</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Nginx</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">CI/CD</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Production Deployment</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Server Debugging</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '16px' }}>
            Other Skills
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">Git</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">Agile Methodologies</Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Skills;
