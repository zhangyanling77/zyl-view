import React from 'react';

interface ButtonProps {
  type: string;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button>{children}</button>
);

export default Button;
