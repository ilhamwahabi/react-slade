import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
  height: 500px;
  @media (max-width: 481px) {
    height: 300px;
  }
  @media (max-width: 361px) {
    height: 250px;
  }
`;

const Image = ({ src }) => (
  <div className="image-dummy">
    <Img src={src} alt="Dummy Example" />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
