import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

const Button = ({ href, children, size, inverse, danger, to, exact, type, onClick, disabled }) => {
  if (href) {
    return (
      <a
        className={`button button--${size || 'default'} ${inverse && 'button-inverse'} ${danger && 'button--danger'}`}
        href={href}
      >
        { children }
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
    >
      {children}
    </button>
  );
}

export default Button;
