import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, className, src, srcset, sizes, ...other }) => (
  <img
    {...other}
    alt={alt}
    className={className}
    src={src}
    srcSet={srcset || null}
    sizes={sizes || null}
  />
);

Image.defaultProps = {
  className: '',
  sizes: '',
  srcset: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
};

export default Image;
