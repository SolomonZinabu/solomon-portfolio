import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
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
          <List>
            <ListItem>
              <ListItemText primary="JavaScript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="React" />
            </ListItem>
            <ListItem>
              <ListItemText primary="CSS" />
            </ListItem>
            {/* Add more skills as needed */}
          </List>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Skills;
