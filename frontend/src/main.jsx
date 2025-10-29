import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import Homescreen from './screens/Homescreen.jsx';
import Login from './adminScreen/Login.jsx';
import Dashboard from './adminScreen/Dashboard.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <Homescreen />},
    {path: '/admin/login', element: <Login />},
    {path: '/admin/dashboard', element: <Dashboard />}
  ]}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
  </Provider>
)
