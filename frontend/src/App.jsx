import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./admin-components/AdminRoutes";
import WebsiteRoutes from "./components/WebsiteRoutes";
import ScrollToTop from "./components/ScrollToTop";

export const ADMIN_BASE_URL = import.meta.env.VITE_REACT_APP_ADMIN_BASE_URL;
export const SERVER_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL + "/api/";

export default function App() {
  // console.log(API_URL);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
         {/* Admin Routes */}
        <Route path={ADMIN_BASE_URL+"/*"} element={<AdminRoutes />} />
        {/* Website Routes */}
        <Route path="/*" element={<WebsiteRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
