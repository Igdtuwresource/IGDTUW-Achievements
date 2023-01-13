import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Achieve from './pages/achieve';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Edit from './pages/personal';
import LoginProvider from './components/LoginProvider';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/achievements' element={<Achieve />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/signin' element={<Signin />} />
        <Route
          path='/dashboard'
          element={
            <LoginProvider>
              <Dashboard />
            </LoginProvider >
          }
        />
      </Routes>
    </div>
  );
}

export default App;