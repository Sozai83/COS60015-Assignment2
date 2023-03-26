import React, {useState, useEffect} from "react";

const ContactForm = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState(''); 

  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);

  useEffect(()=>{
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length > 0){
      setEmailValidation(regexEmail.test(email));
    }
  }, [email, emailValidation]);
  
  const [phone, setPhone] = useState('');
  const [phoneValidation, setPhoneValidation] = useState(true);

  useEffect(()=>{
    const regexPhone = /^\d{10}$/;
    if (phone.length > 0){
      setPhoneValidation(regexPhone.test(phone));
    }else{
      setPhoneValidation(true);
    }
  }, [phone, phoneValidation]);

  const [category, setCategory] = useState('otherGeneralQueries');
  const [message, setMessage] = useState('');

  const [missingMandatory, setmissingMandatory] = useState('');

  const checkMandatory = (event) => {  
    let tempMissingMandatory = '';
    if(fname.length <= 0){
      tempMissingMandatory += ' First name,'
    }
    if(lname.length <= 0){
      tempMissingMandatory += ' Last name, '
    }
    if(email.length <= 0){
      tempMissingMandatory += ' Email address,'
    }
    if(category.length <= 0){
      tempMissingMandatory += ' Category,'
    }
    if(message.length <= 0){
      tempMissingMandatory += ' Description'
    }
    setmissingMandatory(()=>tempMissingMandatory);
  }

  const setSubmitStatus = (event) => {
    event.preventDefault();
    if(emailValidation && phoneValidation && missingMandatory <= 0){
      props.handler();
    } 
  }

  return (
    <form id="ContactForm" onSubmit={setSubmitStatus}>
      { (!emailValidation || !phoneValidation || missingMandatory.length > 0) && (
      <div id="Alert" className="Alert">
        <ul id="AlertList">
          {!emailValidation && (
            <li>Please enter valid email adress.</li>
          )}
          {!phoneValidation && (
            <li>Please enter valid phone number.</li>
          )}
          {missingMandatory.length > 0 && (
            <li>Please fill {missingMandatory}</li>
          )}
        </ul>
      </div>
      )}
      <p>Field with * is mandatory.</p>
      <label for="fname">First Name*: </label>
      <input
        id="fname"
        name="fname"
        aria-label="fname"
        type="text"
        placeholder="First name"
        onChange={ (event)=>setFname(event.target.value)}
      />
      <label for="lname">Last Name*: </label>
      <input
        id="lname"
        name="lname"
        aria-label="lname"
        type="text"
        placeholder="Last name"
        onChange={ (event)=>setLname(event.target.value)}
      />
      <label for="email">Email*: </label>
      <input
        id="email"
        name="email"
        aria-label="contact-email"
        type="contact-email"
        placeholder="abc@braveblossom.com"
        onChange={ (event)=> setEmail(event.target.value)}
      />
      <label for="phone">Phone: </label>
      <input id="phone"
      name="phone"
      aria-label="phone"
      type="phone"
      placeholder="0123456789"
      onChange={ (event)=> setPhone(event.target.value)}
      />
      <label for="category" class="left">
        Category*:
      </label>
      <select
        name="category"
        onChange={(event)=> setCategory(event.target.value)}
      >
        <option
          type="checkbox"
          value="supportTeam"
          aria-label="checkbox_team">
          Support Team
        </option>
        <option
          type="checkbox"
          value="aboutGame"
          aria-label="checkbox_game">
          About Game
        </option>
        <option
          type="checkbox"
          value="feedback"
          aria-label="checkbox_team">
          Feedback
        </option>
        <option
          type="checkbox"
          value="otherGeneralQueries"
          aria-label="checkbox_team"
          selected
        >
          Other General Queries
        </option>
      </select>
      <label for="query" class="left">
        Description*:
      </label>
      <textarea
        id="query"
        name="query"
        aria-label="query"
        type="text"
        onChange={ (event)=> setMessage(event.target.value)}
      ></textarea>
      <label for="file" class="left">
        Select a file:
      </label>
      <input type="file" id="file" name="file" />
      <input
        type="submit"
        id="contact-submit"
        value="Send Message"
        aria-label="submit"
        onClick={checkMandatory}
      />
    </form>
  );
};

export default ContactForm;
