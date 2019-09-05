import React from 'react';
import { cn } from '../../utils';
import './styles.css';

const Button = ({ active, full, primary, disabled, children, onClick }) => {
  const classes = {
    'button--full': full,
    'button--primary': primary,
    'button--active': active,
    'button--disabled': disabled
  };

  return (
    <button type="button" className={`button ${cn(classes)}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
