import React from 'react';
import ContactForm from '../../molecules/formcontact/ContactForm'; 
import './contactScreen.css'; 

const ContactScreen = () => {
  return (
    <main className="contact-container">

      <section className="contact-form">
        <h1>RDV chez nous <br/>Du lundi au samedi de 9h à 21h <br/>
        Le dimanche de 10h à 19h!</h1>
        <p>Pour toutes informations ou réservations nous sommes joignables 
          au +33 6 56 82 29 46 
          ou par mail sur contact@dierniereminute.com et sur nos réseaux sociaux.  
        </p>
      </section>
      <ContactForm/>

    </main>
  );
};

export default ContactScreen;
