import React from 'react';
import { Button } from '../../components/index';
import { commonMessages } from '@temp/intl';
import { useIntl } from 'react-intl';
import './scss/index.scss';

interface SendButtonProps {
  loading: boolean;
  data: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ loading, data }) => {
  const intl = useIntl();

  const disableSubmit = (loading, data) => loading || data;

  const buttonMessage = (loading, data) => {
    if (loading) {
      return intl.formatMessage(commonMessages.loading);
    }
    if (data) {
      return intl.formatMessage({
        defaultMessage: '¡Enviado! Ya te estaremos contactando',
      });
    }
    return intl.formatMessage({
      defaultMessage: 'Enviar',
    });
  };

  return (
    <div className="contact__sendButton">
      <Button
        testingContext="submit"
        type="submit"
        {...(disableSubmit(loading, data) && { disabled: true })}
      >
        {buttonMessage(loading, data)}
      </Button>
    </div>
  );
};

export default SendButton;
