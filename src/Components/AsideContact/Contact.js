import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
		<aside id="contact" class="">
            <div class="wrapper">
                <header>
                    <h1>Contact us</h1>
                </header>
                <section id="contact_address">
                    <div class="contact_details">
                        <h3>Please use the form below to contact us!</h3>
                        <h4>We would love to hear from you :)</h4>
                        <address><b>Address: </b>xxx xxxx xxxxx Tokyo, Japan</address>
                        <email><b>Email: </b><a href="mailto:fake.email@braveblossom.com">fake.email@braveblossom.com</a></email>
                        <b>Phone: </b><a href="tel:123-456-789" class="phone">123-456-789</a>
                    </div>
                    <div class="contact_point"></div>
                    <i class="credit">Photo by <a href="https://unsplash.com/@christinnoelle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christin Noelle</a> on <a href="https://unsplash.com/photos/f4cqfNQOBkA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
                </section>
                <ContactForm />
            </div> 
        </aside>
    );
};

export default Contact;