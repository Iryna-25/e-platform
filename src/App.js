import {LoginPage} from './pages/LoginPage';
import {SignUpPage} from './pages/SignUpPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieReviewPage = lazy(() => import('../pages/MovieReviewPage'));

export const App = () => {
  return (
    <>
    <Suspense>
      <Routes>

            <Route index element={<HomePage />} />
            <Route path='moviespage' element={<MoviesPage />} />
            <Route path='moviespage/:movieId' element={<MovieReviewPage />} />      
          
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />    
      </Routes>
    </Suspense>
    <GlobalStyle/>
    </>
  );
};