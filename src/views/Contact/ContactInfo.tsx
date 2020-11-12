import React from 'react';
import './scss/index.scss';
import { contactData } from './contactData';

const ContactInfo = () => {
  const { offices, whatsapp, mail } = contactData;

  return (
    <div className="contact__info">
      <div className="contactInfo__tel">
        {offices.map((tel) => (
          <div className="contactInfo__detail" key={tel.id}>
            <p>{`${tel.address}. `}</p> &nbsp;
            <p>{`Tel. ${tel.tel}`}</p>
            <div className="contactInfo__bullet"> &nbsp; &#9679; &nbsp; </div>
          </div>
        ))}

        <p>{`Whatsapp ${whatsapp}`}</p>
      </div>

      <p>{mail}</p>
    </div>
  );
};

export default ContactInfo;
