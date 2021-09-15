import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, changeDevice }) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    changeDevice(checkDevice());
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  const checkDevice = () => {
    let device = 'mobile';
    if (size >= 768) device = 'mobile';
    if (size >= 992) device = 'tablet';
    if (size >= 1200) device = 'desktop';
    console.log(device);
    return device;
  };

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  changeDevice: PropTypes.func,
};

export default MainLayout;
