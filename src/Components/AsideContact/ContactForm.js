import React, {useState, useEffect} from "react";

const ContactForm = () => {
  const [submit, setSubmit] = useState(true);
  useEffect(()=>{
    setSubmit((prev)=> prev ? false : true);
  },[])
  if(submit === true){
    return(
      <p>Thank you for submitting the form! We will be in touch soon :)</p>
    )
  }
  return (
    <form action="" method="post" id="ContactForm">
      <div id="Alert" className="Alert Hidden">
        <ul id="AlertList">
          {/* <li>Please fill First Name, Last Name, Email address, category, Description</li>
                            <li>Please enter valid email adress.</li>
                            <li>Please enter valid phone number.</li> */}
        </ul>
      </div>
      <p>Field with * is mandatory.</p>
      <label for="fname">First Name*: </label>
      <input
        id="fname"
        name="fname"
        aria-label="fname"
        type="text"
        placeholder="First name"
        required
      />
      <label for="lname">Last Name*: </label>
      <input
        id="lname"
        name="lname"
        aria-label="lname"
        type="text"
        placeholder="Last name"
        required
      />
      <label for="email">Email*: </label>
      <input
        id="email"
        name="email"
        aria-label="contact-email"
        type="contact-email"
        placeholder="abc@braveblossom.com"
        required
      />
      <label for="phone">Phone: </label>
      <input id="phone" name="phone" aria-label="phone" type="phone" />
      <label for="category" class="left">
        Category*:
      </label>
      <select name="category" required>
        <option type="checkbox" value="supportTeam" aria-label="checkbox_team">
          Support Team
        </option>
        <option type="checkbox" value="aboutGame" aria-label="checkbox_game">
          About Game
        </option>
        <option type="checkbox" value="feedback" aria-label="checkbox_team">
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
        required
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
      />
    </form>
  );
};

export default ContactForm;
