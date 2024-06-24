import React, { useState } from 'react';
import { Box, Typography, Paper, Link, Grid, IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { motion } from 'framer-motion';

function Contact() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };

  return (
    <Box id="contact" my={5}>
      <Paper elevation={3} style={{ padding: '32px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <IconButton>
                  <EmailIcon color="primary" style={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h6">Email</Typography>
                <Link href="mailto:solomonzinabu56@gmail.com" color="inherit">
                  solomonzinabu56@gmail.com
                </Link>
                <Tooltip title="Copy to clipboard">
                  <IconButton onClick={() => handleCopy('solomonzinabu56@gmail.com')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
                {copied === 'solomonzinabu56@gmail.com' && <Typography variant="body2" color="secondary">Copied!</Typography>}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <IconButton>
                  <PhoneIcon color="primary" style={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">+251939811170</Typography>
                <Tooltip title="Copy to clipboard">
                  <IconButton onClick={() => handleCopy('+251939811170')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
                {copied === '+251939811170' && <Typography variant="body2" color="secondary">Copied!</Typography>}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <IconButton>
                  <LinkedInIcon color="primary" style={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h6">LinkedIn</Typography>
                <Link href="https://www.linkedin.com/in/solomon-zinabu-927bb8201/" target="_blank" color="inherit">
                  linkedin.com/solomon-zinabu
                </Link>
                <Tooltip title="Copy to clipboard">
                  <IconButton onClick={() => handleCopy('https://www.linkedin.com/in/solomon-zinabu-927bb8201/')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
                {copied === 'https://www.linkedin.com/in/solomon-zinabu-927bb8201/' && <Typography variant="body2" color="secondary">Copied!</Typography>}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <IconButton>
                  <GitHubIcon color="primary" style={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h6">GitHub</Typography>
                <Link href="https://github.com/SolomonZinabu" target="_blank" color="inherit">
                  github.com/SolomonZinabu
                </Link>
                <Tooltip title="Copy to clipboard">
                  <IconButton onClick={() => handleCopy('https://github.com/SolomonZinabu')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
                {copied === 'https://github.com/SolomonZinabu' && <Typography variant="body2" color="secondary">Copied!</Typography>}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Contact;
