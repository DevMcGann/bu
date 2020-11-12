import React from 'react';
import './scss/index.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Page = () => {
  return (
    <div className="contactPage">
      <h1 className="contactPage__title">Contacto</h1>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Page;
