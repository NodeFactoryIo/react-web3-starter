import React from 'react';
import classnames from 'classnames';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary';
  //could be defined, depending on the project
  // size: 'small' | 'medium' | 'large';
}

export const Button: React.FC<IButtonProps> = ({ color, className, ...props }) => {
  return (
    <button className={classnames('button', color, className)} {...props}>
      {props.children}
    </button>
  );
};
