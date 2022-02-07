import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import './pix/font-awesome-4.7.0/css/font-awesome.css'

function Form() {
  const {register,login}=useAuth()
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");

  const [isSubmitting, SetIsSubmitting] = useState(false);
  
  const [loginvisible, setLoginVisible] = useState(false);
  const [signinvisible, setsigninVisible] = useState(true);

  var doUpdate=()=>{
    SetEmail("");
  }
  var signin=()=>{
    setsigninVisible(false);
    setLoginVisible(true);
  }
  var logIn=()=>{
    setsigninVisible(true);
    setLoginVisible(false);
  }

  return <div>
  <center>
  <form >
  <Card className='bg-transparent form'>
  <Card.Body className='center'>
  <i class="fa fa-users mb-3 icon" aria-hidden="true"></i>
  <InputGroup className="mb-3">
  <Button variant="outline-secondary" id="button-addon1">
  <i class="fa fa-envelope-o" aria-hidden="true"></i>
</Button>
    <FormControl aria-label="Text input with checkbox" name='Email' value={Email} onChange={(e)=>{SetEmail(e.target.value)}} placeholder='Email' />
  </InputGroup>
  <InputGroup className="mb-3">
  <Button variant="outline-secondary" id="button-addon1">
  <i class="fa fa-key" aria-hidden="true"></i>
</Button>
    <FormControl type="password" name='Password' value={Password} onChange={(e)=>{SetPassword(e.target.value)}} placeholder="Password" />
  </InputGroup>
  <div class="form-group mb-3">
    <button hidden={loginvisible} onClick={async e=> {
      console.log("submitt")
      e.preventDefault()
      if(!Email || !Password){
        alert("CREDENTIALS NOT VALID")
        SetEmail("")
      SetPassword("")
        return
      }
      SetIsSubmitting(true)
      login(Email,Password).then((res)=>{
        alert("User Logged-in successfully")
        SetEmail("")
      SetPassword("")
      })
      .catch((err)=>{console.log("err")
      alert(err.message)
      SetEmail("")
      SetPassword("")
      })
      .finally(()=>{SetIsSubmitting(false)
        SetEmail("")
        SetPassword("")})
    }} class="col-md-12 btn alert-primary rounded-pill">LOGIN</button>
  </div>
  <div class="form-group mb-3">
    <button hidden={signinvisible} onClick={async e=> {
      console.log("submitt")
      e.preventDefault()
      if(!Email || !Password){
        alert("CREDENTIALS NOT VALID")
        return
      }
      SetIsSubmitting(true)
      register(Email,Password).then((res)=>{
        alert("User Signed-In Successfully")
        SetEmail("")
      SetPassword("")
      }
        )
      .catch((err)=>{
      alert(err.message)
      SetEmail("")
      SetPassword("")
      })
      .finally(()=>{SetIsSubmitting(false)
        SetEmail("")
        SetPassword("")})
    }} type="submit" class="col-md-12 btn alert-primary rounded-pill">SIGNIN</button>
  </div>
  <div class="form-group mb-3">
    <button onClick={signin} hidden={loginvisible} type="button" className="col-md-12 btn rounded-pill alert-info">Don't have an account?<b>Sign up</b></button>
  </div>
  <div class="form-group mb-3">
    <button hidden={signinvisible} onClick={logIn} type="button" className="col-md-12 btn rounded-pill alert-info">Already have an account!<b>Log In</b></button>
  </div>
  </Card.Body>
  </Card>
  </form>
  </center>
  </div>
  
}

export default Form;
