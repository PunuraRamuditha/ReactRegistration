import React, {useState} from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import View from "./components/View";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import "./index.css"

 function App() {  
  const adminUser = {
    email: "admin@gmail.com",
    password: "Admin@123"
  }  

  const [user, setUser] = useState({name: "", email: ""});
  const  [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email

      
    });
    
   
  } else {
    console.log("Details do not match");
    setError("Details do not match!");
  
  } 
  }

  
  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  return (
    <div className="container">
     {(user.email != "") ? (
     <div>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/View" element={<View />} />
       <Route path="/LoginForm" element={<LoginForm />} />
     </Routes>
     </div>
   
     ) : (
      <div className="App">
      <LoginForm Login={Login} error={error} />
      </div>
     )}
    </div>
    
  );

// return (
//   <>
//     <Navbar />
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/View" element={<View />} />
//         <Route path="/Logout" element={<Logout />} />
//       </Routes>
//     </div>
//   </>
// )



 }

export default App;
