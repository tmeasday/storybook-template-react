import React from 'react';
import PropTypes from 'prop-types';

const baseStyles = {
  border: '1px solid #ddd',
};

const modeStyles = {
  primary: {
    color: 'white',
    backgroundColor: 'blue',
  },
  secondary: {
    color: '#999',
    backgroundColor: 'transparent',
  },
};

const sizeStyles = {
  small: {
    fontSize: '12px',
    borderRadius: '8px',
    padding: '8px',
  },
  medium: {
    fontSize: '14px',
    borderRadius: '12px',
    padding: '12px',
  },
  large: {
    fontSize: '16px',
    borderRadius: '16px',
    padding: '16px',
  },
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => (
  <button
    style={{
      ...baseStyles,
      ...modeStyles[primary ? 'primary' : 'secondary'],
      ...sizeStyles[size],
      ...(backgroundColor && { backgroundColor }),
    }}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  /**
   * Is this the principal CTA on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(Object.keys(sizeStyles)),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
};
