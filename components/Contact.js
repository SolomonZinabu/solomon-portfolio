import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function Contact() {
  return (
    <Box id="contact" my={5}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // Handle form submission
            console.log(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="name" />}
                error={Boolean(<ErrorMessage name="name" />)}
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="email" />}
                error={Boolean(<ErrorMessage name="email" />)}
              />
              <Field
                as={TextField}
                name="message"
                label="Message"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                helperText={<ErrorMessage name="message" />}
                error={Boolean(<ErrorMessage name="message" />)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                style={{ marginTop: '16px' }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default Contact;
