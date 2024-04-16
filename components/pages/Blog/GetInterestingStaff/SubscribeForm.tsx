import React, {useEffect, useState} from 'react';
import Button from "../../../shared/Button";
import {validateEmail} from "../../../../utils/helpers";

interface SubscribeFormProps {
  name: string;
  placeholder: string;
  button: string;
}

const SubscribeForm = ({name, placeholder, button}:SubscribeFormProps) => {
  const [email,setEmail] = useState<string>('');
  const [valid,setValid] = useState<boolean>(false);
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  useEffect(()=>{
    setValid(validateEmail(email));
  },[email]);
  
  return (
    <div className="h-54-px d-flex subscribe-form">
      <input
        required
        type="text"
        value={email}
        name={name}
        onChange={handleEmailChange}
        placeholder={placeholder}
        className="form-item h-100"
      />
      <div className="subscribe-form-button-container">
        <Button disabled={!valid} onClick={() => {
          alert('Your email is ' + email);
        }} className="subscribe-form-button btn btn-lg btn-primary d-flex align-items-center justify-content-center w-100 h-100">
          {button}
        </Button>
      </div>
    </div>
  );
};

export default SubscribeForm;