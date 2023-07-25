import {BrowserRouter,Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    
<BrowserRouter>
    <div className="App">
      <ToastContainer theme='dark'/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      
      
    </div>

</BrowserRouter>
  );
}

export default App;
