import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";


export default function Register() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
  }

  const handleSubmit  = () => {
    console.log(firstName,lastName,email);
    if (firstName && lastName && email){
      fetch(' http://localhost:8000/Data' , {
          method: "POST",
          headers: {"Content-type" : "application/json"},
          body: JSON.stringify({ firstName,  lastName,  email})
      }).then(() => navigate("/Home"))
 }
}

    return( 
    <div className="form-inner">
      <h1>Register</h1>
            <div className="form-inner">
                <div className="form-group">
                    <br></br>
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Enter First Name"/>
                </div>
                <br></br>
                <div className="form-group">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Enter LastName"/>
                </div>
                <br></br>
                <div className="form-group">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter Email"/>
                </div>
                </div>
              <br></br><br></br>
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
            
    )

  }
