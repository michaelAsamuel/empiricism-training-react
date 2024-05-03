import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home/home.component.jsx";
import ContactUs from "./features/contact-us/contact-us.component.jsx";
import Navigation from "./features/navigation/navigation.component.jsx";
import { CourseCatalog } from "./features/course-catalog/course-catalog.component.jsx";
import Checkout from "./features/shopping-checkout/checkout.component.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="courses" element={<CourseCatalog />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
