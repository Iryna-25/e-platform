import MaterialsPage from "../pages/MaterialsPage";
import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import {LoginPage} from '../pages/LoginPage';
import {SignUpPage} from '../pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const MaterialsPage = lazy(() => import('../pages/MaterialsPage'));
// const InstructionPage = lazy(() => import('../pages/InstructionPage'));

export const App = () => {
  return (
    <>
      <Routes>

            <Route index element={<HomePage />} />
            <Route path='materials' element={<MaterialsPage />} />
            <Route path='instruction' element={<InstructionPage />} />      
          
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />    
      </Routes>
    <GlobalStyle/>
    </>
  );
};