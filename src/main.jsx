import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.css'; // <--- ADD THIS LINE

import App from './App';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import CoursePage from './pages/CoursePage';
import PracticesPage from './pages/PracticesPage';
import PracticeDetailPage from './pages/PracticeDetailPage';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "programacion", element: <ProgramPage /> },
      { path: "curso", element: <CoursePage /> },
      { path: "practicas", element: <PracticesPage /> },
      { path: "practicas/:practiceId", element: <PracticeDetailPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);