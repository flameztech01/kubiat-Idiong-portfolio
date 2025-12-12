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
import Messages from './adminComponents/Messages.jsx';
import ViewMessage from './adminComponents/Viewmessage.jsx';
import Projects from './adminComponents/Projects.jsx';
import Uploadproject from './adminComponents/Uploadproject.jsx';
import EditProject from './adminScreen/EditProject.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <Homescreen />},
    {path: '/admin/login', element: <Login />},
    {path: '/admin/dashboard', element: <Dashboard />},
    {path: 'admin/messages', element: <Messages />},
    {path: `/admin/messages/:id`, element: <ViewMessage /> },
    {path: '/admin/project/upload', element: <Uploadproject /> },
    {path: '/admin/projects', element: <Projects /> },
    {path: '/admin/project/edit/:id', element: <EditProject /> },
  ]}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
  </Provider>
)
