import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import GrammarPage from './pages/GrammarPage';
import VocabularyPage from './pages/VocabularyPage';
import PracticesPage from './pages/PracticesPage';
import PracticeDetailPage from './pages/PracticeDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "programacion", element: <ProgramPage /> },
      { path: "gramatica", element: <GrammarPage /> },
      { path: "vocabulario", element: <VocabularyPage /> },
      { path: "practicas", element: <PracticesPage /> },
      { path: "practicas/:practiceId", element: <PracticeDetailPage /> }, // Using :practiceId for future scalability
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);