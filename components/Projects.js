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
    description: `I played a key role in enhancing the existing API infrastructure for communication with the Fettan Core system across multiple channels, ensuring support for various payload structures such as JSON, SOAP, XML, and YAML. Additionally, I designed and developed a range of REST and GraphQL APIs for diverse platforms. Key projects include:
    - **Glumor API**: Facilitated fan and icon interactions on the platform.
    - **Fast Park API**: Provided backend services for the parking solution platform, enabling real-time parking spot management and user interactions.
    - **Inventory Management API**: Streamlined inventory tracking and management processes.
  These APIs improved system interoperability, data consistency, and provided scalable solutions to meet the dynamic needs of our clients.`,
    image: '/imgs/fettanapi.png'
  },  
  {
    title: "Amazon Web Services API Integration",
    description: `I spearheaded the integration of over 20 APIs for our vendors and clients utilizing AWS Lambda and EC2. This project involved designing, developing, and deploying serverless functions and virtual server instances to facilitate seamless and scalable API interactions. Leveraging AWS's robust infrastructure, I ensured high availability, low latency, and secure data transmission. The integrations covered a wide range of functionalities, including data synchronization, payment processing, user authentication, and third-party service communications. This initiative significantly improved operational efficiency and enabled our clients to leverage advanced cloud capabilities for their business needs.`,
    image: '/imgs/amazon.png'
  },
  {
    title: "Application Level Traffic Router",
    description: `I architected and developed two sophisticated traffic router applications for the Fettan core banking system, enhancing security and efficiency in API traffic management. The first router, the DMZ router, is designed to route traffic securely to AWS, effectively preventing direct API calls to the database server. The second router, the Secure Router, manages traffic to other clients, such as government organizations, that require direct API calls from our system. This dual-layer routing strategy significantly bolsters our system's security and operational integrity, ensuring robust and reliable communication channels.`,
    image: '/imgs/router.png'
  },
  {
    title: "mPOS",
    description: `As the lead developer, I directed the development team for the mPOS application, ensuring seamless functionality across both Android and web platforms from a single code base. This robust application is designed to meet diverse merchant needs, featuring two-level authorization, purchase and payment capabilities, bill payments, and supply orders (merchant to merchant transactions). It also supports cash in/out operations, comprehensive merchant and customer registration processes, receipt printing, and End-of-Day (EOD) reports. The mPOS system is engineered to streamline merchant operations, enhancing efficiency and user experience with its wide array of advanced functionalities.`,
    image: '/imgs/mposwebpurchasebold.png'
  },  
  {
    title: "Internet Banking / Mobile Banking",
    description: `As the lead developer, I spearheaded the development of the new Internet Banking (IB) and Mobile Banking (MB) application for Android, iOS, and web, all from a single code base. This comprehensive, full-fledged banking system replaces the previous version, introducing cutting-edge functionalities that cater to modern banking needs. The application supports secure money transfers, bill payments, airtime purchases, ticket and fee payments, and robust account management features. Additionally, it offers advanced functionalities such as real-time transaction notifications, detailed account statements, loan applications, investment tracking, and a highly secure authentication process, ensuring a seamless and efficient user experience.`,
    image: '/imgs/internetbankingloggedin.png'
  },
  {
    title: "USSD and WhatsApp Bot",
    description: `I spearheaded the development of both USSD and WhatsApp bots for the Fettan system, enhancing user access through multiple communication channels. The USSD service supports both agency banking mode and customer mode, providing a robust solution for users without internet access to perform various banking operations. The WhatsApp bot mirrors the functionality of our Telegram bot, offering features such as money transfer, bill payments, airtime purchase, and account management in a secure and user-friendly manner. These bots ensure that users can perform essential transactions anytime, anywhere, with ease.`,
    image: '/imgs/whatsappbot.png'
  },
  {
    title: "Fast Park",
    description: `Fast Park is an innovative parking solution designed to streamline the process of finding and managing parking spots. It includes a mobile app for drivers to locate, book, and navigate to available parking spots, an app for parking workers to update spot statuses in real-time, and an admin panel for owners to manage availability, process payments, and monitor usage patterns. Key features include secure user registration, payment integration, real-time notifications, feedback system, loyalty program, and accessibility features.`,
    image: '/imgs/parkingproccess.png'
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
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <Paper elevation={3} style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" style={{ flexGrow: 1 }}>
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
