import React from 'react';
// Importing Bootstrap CSS for Experiments 1, 2, and 4
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing Material UI Components for Experiment 3
import { Button, TextField, Card as MuiCard, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <div className="bg-light min-vh-100">
      
      {/* EXPERIMENT 4: Responsive Navigation Bar */}
      {/* This uses Bootstrap's dark theme classes */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <span className="navbar-brand fw-bold">Aman's UI Portfolio</span>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#exp1">Bootstrap Form</a>
            <a className="nav-link" href="#exp2">Grid Layout</a>
            <a className="nav-link" href="#exp3">Material UI</a>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        
        {/* EXPERIMENT 1: Designing UI Using Bootstrap Components */}
        <section id="exp1" className="mb-5 pt-4 text-center">
          <h2 className="fw-bold text-primary mb-4">Experiment 1: Bootstrap UI</h2>
          <div className="card shadow-sm border-0 p-4 mx-auto" style={{maxWidth: '500px'}}>
            <input className="form-control mb-3" placeholder="Enter name" />
            <button className="btn btn-primary w-100">Submit via Bootstrap</button>
          </div>
        </section>

        <hr className="my-5" />

        {/* EXPERIMENT 2: Card-Based Layout Using Bootstrap */}
        <section id="exp2" className="mb-5 pt-4">
          <h2 className="text-center fw-bold mb-4">Experiment 2: Grid & Cards</h2>
          <div className="row g-4"> {/* Bootstrap Grid System */}
            {[1, 2, 3].map((num) => (
              <div className="col-md-4" key={num}>
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <h5 className="fw-bold">Card {num}</h5>
                  <p className="text-muted">A dynamic card created using Bootstrap's Grid.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-5" />

        {/* EXPERIMENT 3: UI Design Using Material UI Components */}
        <section id="exp3" className="pb-5 pt-4">
          <h2 className="text-center fw-bold mb-4" style={{color: '#1976d2'}}>Experiment 3: Material UI</h2>
          <MuiCard sx={{ maxWidth: 400, margin: 'auto', boxShadow: 3, borderRadius: 3 }}>
            <CardContent className="text-center">
              <Typography variant="h6" gutterBottom>MUI Modern Form</Typography>
              <TextField label="Name" variant="outlined" fullWidth margin="normal" />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Submit via MUI</Button>
            </CardContent>
          </MuiCard>
        </section>

      </div>
    </div>
  );
}

export default App;