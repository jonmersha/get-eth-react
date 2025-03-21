import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/Navbar"
import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import Footer from "./components/Footer"
import BlogPage from "./pages/BlogPage"
//import DestinationsByRegion from "./pages/destinations/DestinationsByRegion "
import RegionDetails from "./pages/RegionDetails"
import SiteDetail from "./pages/SiteDetail"
import Contact from "./pages/Contact"
import RegionList from "./pages/RegionList"
import SuccessPage from "./admin/suaccess"

function App() {

  return (
    
            <Router>
      <NavigationBar

      />
      <Routes>
        
        
        {/* <Route path="/" element={<ProductGrid products={products} />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/destination" element={<DestinationsByRegion />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog"  element={<BlogPage />} />
        <Route path="/region"  element={<RegionList />} />
        <Route path="/region/:id" element={<RegionDetails />} />
        <Route path="/site/:id" element={<SiteDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
