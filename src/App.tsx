import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/Navbar"
import Home from "./pages/Home"
import Destinations from "./pages/Destnations"
import AboutPage from "./pages/AboutPage"
import Footer from "./components/Footer"
import BlogPage from "./pages/BlogPage"
import DestinationsByRegion from "./pages/DestinationsByRegion "


function App() {

  return (
    
            <Router>
      <NavigationBar

      />
      <Routes>
        
        {/* <Route path="/" element={<ProductGrid products={products} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationsByRegion />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog"  element={<BlogPage />} />

        

        {/* <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/registration" element={<Registration />} />
         <Route path="/product-listing" element={<ProductListing />} /> 
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/seller-registration" element={<SellerRegistration />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/inquiry-chat" element={<InquiryChat />} />
        <Route path="/contact-support" element={<ContactSupport />} /> */}
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
