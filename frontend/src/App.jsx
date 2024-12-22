import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./admin-components/AdminRoutes";
import WebsiteRoutes from "./components/WebsiteRoutes";

export const ADMIN_BASE_URL = "/admin";
export const SERVER_URL = "http://localhost:5001/api/";
// const API_URL = process.env.REACT_APP_API_URL ;

export default function App() {
  // console.log(API_URL);
  return (
    <BrowserRouter>
      <Routes>
        {/* Website Routes */}
        <Route path="/*" element={<WebsiteRoutes />} />
        {/* Admin Routes */}
        <Route path={ADMIN_BASE_URL+"/*"} element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}