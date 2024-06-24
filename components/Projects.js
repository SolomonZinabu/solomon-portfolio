// components/Projects.js
import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

const projects = [
  {
    title: "Telegram Bot",
    description: `I have developed a full-fledged telegram bot that has the ability to transfer money, pay for merchants, pay bills, buy airtime, buy tickets and fees, and has many features for users to manage their accounts. I was one of the lead developers for the Freelance Ethiopia Telegram Bot development which was used for connecting talents and employers. This bot has many features like role-based registration, job seeker profile, employer profile, push notifications, company/startup registration, applying for jobs, attaching CVs, shortlisting CVs, hiring processes, and payment integration.`,
    image: '/imgs/telegrambotsubmenu.png'
  },
  {
    title: "Rest API's",
    description: `I enhanced the existing API used for communication with the Fettan Core system across various channels, supporting different payload structures such as JSON, SOAP, XML, and YAML. `,
    image: '/path/to/rest-api-screenshot.png'
  },
  {
    title: "Amazon Web Services API Integration",
    description: `I have done more than 20 API integrations to our vendors/clients through AWS Lambda and EC2.`,
    image: '/path/to/aws-integration-screenshot.png'
  },
  {
    title: "Application Level Traffic Router",
    description: `I have built a traffic router to a Fettan core banking system which has API integration to secured vendors.`,
    image: '/path/to/traffic-router-screenshot.png'
  },
  {
    title: "mPOS",
    description: `I have led the development team and was the lead developer for mPOS applications development which has both Android and web support with one code base. This application has a lot of features like two-level authorization, purchase, pay bills, supply order (merchant to merchant transaction), cash in, cash out, merchant registration, customer registration.`,
    image: '/imgs/mposwebpurchasebold.png'
  },
  {
    title: "Internet Banking / Mobile Banking",
    description: `I am the lead developer for the new version of the IB/MB application for Android, iOS, and web (one code base), which will replace the old application. This application is a full-fledged mobile/internet banking system which has all the latest functionalities related to the banking world.`,
    image: '/imgs/internetbankingloggedin.png'
  },
  {
    title: "USSD and WhatsApp Bot",
    description: `I managed and led USSD and WhatsApp bot development.`,
    image: '/path/to/ussd-whatsapp-bot-screenshot.png'
  },
  {
    title: "Fast Park",
    description: `I am managing and leading development for the Fast Park system, which is a parking solution. It has features like user registration with different roles (drivers, parking workers, parking lot owners, and system admins), parking lot registration, parking spot management.`,
    image: '/path/to/fast-park-screenshot.png'
  }
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box id="projects" my={5}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClickOpen(project)}
              style={{ cursor: 'pointer' }}
            >
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body1">
                  {project.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedProject?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            {selectedProject?.description}
          </Typography>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Projects;
