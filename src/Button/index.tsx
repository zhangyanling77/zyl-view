import React from 'react';

interface ButtonProps {
  type: string;
  children: any;
}
export default ({ type, children }: ButtonProps) => <button>{children}</button>;
