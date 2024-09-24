import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import ColorPicker from './components/ReactColorPicker.tsx';
import PasswordStrengthChecker from './components/ReactPasswordCheck.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />
  },
  {
    path: "/password-check",
    Component:  PasswordStrengthChecker
  },
  {
    path: "/color-picker",
    Component:   ColorPicker
  },
]);

createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router} />
)
