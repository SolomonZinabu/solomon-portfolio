import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box id="about" my={5}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            This is a brief introduction about myself.  this is a brief introduction about solomon
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default About;
