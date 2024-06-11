import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <Box id="projects" my={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h5" component="h3">
                Project 1
              </Typography>
              <Typography variant="body1">
                Description of project 1.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h5" component="h3">
                Project 2
              </Typography>
              <Typography variant="body1">
                Description of project 2.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        {/* Add more projects as needed */}
      </Grid>
    </Box>
  );
}

export default Projects;
