import React from 'react';

import { Container } from './styles';

import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => {
        return <Toast key={message.id} message={message} />;
      })}
    </Container>
  );
};

export default ToastContainer;
