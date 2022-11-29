import { Routes, Route } from "react-router-dom";

import './App.css';

import AdminPage from './pages/Admin/admin.index'
import HomePage from './pages/Home/home.index'
import Contacts from './pages/Home/Contacts'
import Awards from "./pages/Home/Awards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route path="" index element={<HomePage />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/awards" element={<Awards />}></Route>
        </Route>
        <Route path="/admin">
          <Route path="" index element={<AdminPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
