import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import Chat from "./pages/Chat";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Usersdashboard from "./pages/Admin/Users/UsersDashboard";
import Createusers from "./components/Dashboard/Users/CreateUsers";
import Viewusers from "./components/Dashboard/Users/ViewUsers";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Sendorder from "./pages/SendOrder";
import Adminchat from "./pages/Admin/Chat/AdminChat";
import Admindashboard from "./pages/Admin/AdminDashboard";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        //RUTAS DEL CHAT //LOGIN
        <Route
          path="/"
          element={user ? <Navigate to={"/chat"} /> : <Login />}
        />
        //CHAT
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="/" />} />
        <Route
          path="/chat/send-order"
          element={user ? <Sendorder /> : <Login />}
        />
        //ADMINISTRADOR
        <Route path="/admin" element={<Admindashboard />}>

          <Route path="/admin" element={<Dashboard />}></Route>

          <Route path="chat" element={<Adminchat />}></Route>

          <Route path="users" element={<Usersdashboard />}>
            <Route path="/admin/users" element={<Viewusers />}></Route>
            <Route path="create" element={<Createusers />}></Route>
          </Route>

        </Route>
        <Route path="*" element={<span>No existe esta pagina</span>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
