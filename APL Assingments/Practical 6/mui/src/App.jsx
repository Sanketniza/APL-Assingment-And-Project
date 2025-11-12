import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ✅ Import Material UI components
import { AppBar, Toolbar, Typography, Button, TextField, Card, CardContent, Grid } from '@mui/material'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      {/* --- Navbar --- */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My MUI Demo App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* --- Main Content --- */}
      <div style={{ padding: '30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Welcome to React + MUI
                </Typography>

                <TextField
                  label="Enter your name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ mb: 2 }}
                />

                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6">Preview</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {name ? `Hello, ${name}! 👋` : 'Type your name above'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App