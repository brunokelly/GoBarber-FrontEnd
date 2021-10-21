import React from 'react';

import { ToastProvider } from './Toast';
import { AuthProvider } from './Auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
