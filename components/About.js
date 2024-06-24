// components/About.js
import React from 'react';
import { Box, Typography, Paper, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
// import {text} from "../"
function About() {
  return (
    <Box id="about" my={5}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="Solomon Zinabu" src="/imgs/solomon.jpg" style={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                Hi, I'm Solomon Zinabu, a seasoned and passionate software developer based in [Your Location]. With a BSc in Computer Engineering from Bahirdar University, I have cultivated a robust foundation in both the theoretical and practical aspects of software development.
              </Typography>
              <Typography variant="body1" paragraph>
                My professional journey began as a Junior Full Stack Developer at Moneta Technologies S.C., where I honed my skills in full stack development. I progressed to a Full Stack Developer role at the same company, further solidifying my expertise in building and maintaining scalable web applications.
              </Typography>
              <Typography variant="body1" paragraph>
                I then advanced to a Senior Full Stack Developer position at FinServ Technologies, PLC, where I led significant projects and contributed to the growth and efficiency of fintech solutions. My ability to handle complex problems and deliver high-quality software earned me the role of Development Manager at FinServ Technologies, PLC, where I oversaw a team of developers and ensured the successful completion of various projects.
              </Typography>
              <Typography variant="body1" paragraph>
                Currently, I am serving as a Senior Development Manager at FinServ Technologies, PLC. In this role, I manage the entire development lifecycle, from initial requirements gathering to final deployment, ensuring that our solutions meet the highest standards of quality and performance.
              </Typography>
              <Typography variant="body1" paragraph>
                I am passionate about leveraging technology to create innovative solutions that drive business success and improve user experiences. In my spare time, I enjoy [Your Hobbies or Interests], which helps me stay creative and inspired. My career goal is to continue advancing in the field of software development, taking on challenging projects and leading dynamic teams to success.
              </Typography>
              <Typography variant="body1">
                Feel free to <a href="#contact">contact me</a> or connect with me on <a href="https://www.linkedin.com/in/solomon-zinabu-927bb8201/">LinkedIn</a>.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default About;
