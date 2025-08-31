
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Story from './story.jsx'
import Profile from './profile.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'


const router =createBrowserRouter([
  {
    path:'/',
    element: <Index/>
  },
  {
    path:'/viewstory/:id/:tot/',
    element:<Story/>
  },
  {
    path:'/profile/:name',
    element:<Profile/>
  }
  
]
)
createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
   
  
)
