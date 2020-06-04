import React from 'react';
import './index.less';

interface ButtonProps {
  type: string;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className='zyl-button'>{children}</button>
);

export default Button;
