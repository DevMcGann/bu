import React, { useState } from 'react';
import './scss/index.scss';
import { Form, TextField } from '../../components/index';

import SendButton from './SendButton';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(true);
    }, 3000);
  };

  return (
    <div>
      <Form className="contact__form" onSubmit={handleOnSubmit}>
        <TextField
          name="name"
          autoComplete="nombre"
          label="Nombre"
          value={name}
          type="text"
          required
          onChange={handleNameChange}
        />
        <TextField
          name="email"
          autoComplete="email"
          label="Email"
          value={email}
          type="email"
          required
          onChange={handleEmailChange}
        />
        <TextField
          name="phone"
          autoComplete="phone"
          label="Número de teléfono"
          value={phone}
          type="text"
          onChange={handlePhoneChange}
        />

        <textarea
          name="mensaje"
          className="cotactForm__message"
          placeholder="Mensaje"
          value={message}
          required
          onChange={handleMessageChange}
        />

        <SendButton loading={loading} data={data} />
      </Form>
    </div>
  );
};

export default ContactForm;
