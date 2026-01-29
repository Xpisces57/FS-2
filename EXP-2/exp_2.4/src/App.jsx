import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid,
  Card, CardContent, CardMedia, Box, TextField,
  ThemeProvider, createTheme, CssBaseline, Snackbar, Alert
} from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#4f46e5' },
    secondary: { main: '#6366f1' },
    background: { default: '#f8fafc' }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h2: { fontWeight: 800 },
    h5: { fontWeight: 700 }
  },
});

export default function App() {
  const [toast, setToast] = useState({ open: false, msg: '' });

  const showToast = (msg) => {
    setToast({ open: true, msg });
  };

  const cards = [
    {
      title: 'Efficient Logic',
      desc: 'React hooks provide clean and predictable state management.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800'
    },
    {
      title: 'Material UI',
      desc: 'Prebuilt components following Google Material Design.',
      img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800'
    },
    {
      title: 'Scalable Code',
      desc: 'Reusable components that scale with application growth.',
      img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>

        {/* NAVBAR */}
        <AppBar position="sticky" elevation={0} className="appbar">
          <Toolbar className="nav">
            <Typography variant="h6" className="logo">
              MUI LAB
            </Typography>
            <Box>
              <Button onClick={() => showToast('Home clicked')} color="inherit">Home</Button>
              <Button onClick={() => showToast('Features clicked')} color="inherit">Features</Button>
              <Button variant="contained" onClick={() => showToast('Login successful')}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* HERO */}
        <Container maxWidth="md" className="hero">
          <Typography variant="h2" align="center">
            Professional <span className="accent">Material UI</span> Project
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>
            Experiment 3 demonstrates how Material UI integrates with React to
            build clean, responsive, real-world interfaces.
          </Typography>
          <Box textAlign="center" mt={4}>
            <Button size="large" variant="contained" onClick={() => showToast('Viewing work')}>
              View Work
            </Button>
          </Box>
        </Container>

        {/* CARDS */}
        <Container maxWidth="lg" className="cards">
          <Grid container spacing={4}>
            {cards.map((c, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card className="card">
                  <CardMedia component="img" height="180" image={c.img} />
                  <CardContent>
                    <Typography variant="h6">{c.title}</Typography>
                    <Typography color="text.secondary">{c.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CONTACT */}
        <Container maxWidth="sm" className="contact">
          <Typography variant="h5" align="center" mb={3}>
            Get in Touch
          </Typography>
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField fullWidth label="Message" margin="normal" multiline rows={3} />
          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={() => showToast('Message sent')}>
            Send Message
          </Button>
        </Container>

        {/* FOOTER */}
        <Box className="footer">
          <Typography variant="body2">
            © 2024 MUI Lab – College Assignment
          </Typography>
        </Box>

        {/* SNACKBAR */}
        <Snackbar
          open={toast.open}
          autoHideDuration={2500}
          onClose={() => setToast({ ...toast, open: false })}
        >
          <Alert severity="success" variant="filled">
            {toast.msg}
          </Alert>
        </Snackbar>

      </Box>
    </ThemeProvider>
  );
}
