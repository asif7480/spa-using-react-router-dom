import Layout from "./layout"

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Gallery from "./Pages/Gallery"
import Testimonials from "./Pages/Testimonials"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout />}>
        <Route path="" element={ <Home />}/>
        <Route path="gallery" element={ <Gallery />} />
        <Route path="testimonials" element={ <Testimonials/>} />
        <Route path="contact" element={ <Contact/>} />
      </Route>
    )
)

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
