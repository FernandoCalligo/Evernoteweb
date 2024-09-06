import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CssBaseline, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import NotesPage from './pages/NotesPage';
import CalendarPage from './pages/CalendarPage'; // Asegúrate de tener esta página

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Drawer
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 250,
              boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#1976d2', // Color de fondo del Drawer
              color: 'white',
              display: 'flex',
              flexDirection: 'column', // Asegura que el Drawer use flexbox
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ padding: '16px', backgroundColor: '#1976d2', color: 'white' }}>
            <Typography variant="h6" noWrap component="div">
              LaraNotes
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1565c0', // Color de fondo en hover
                  },
                  '&.active': {
                    backgroundColor: '#0d47a1', // Color de fondo para el enlace activo
                  },
                }}
              >
                <ListItemText primary="Notas" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/calendar"
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1565c0', // Color de fondo en hover
                  },
                  '&.active': {
                    backgroundColor: '#0d47a1', // Color de fondo para el enlace activo
                  },
                }}
              >
                <ListItemText primary="Calendario" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: '20px',
            marginLeft: '250px', // La misma medida que el ancho del Drawer
          }}
        >
          <CssBaseline />
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
