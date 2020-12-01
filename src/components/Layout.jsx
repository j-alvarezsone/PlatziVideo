import React from 'react';
import Footer from './Footer';

import '../assets/styles/App.scss';

const Layout = ({ children }) => (
  <div className='app'>
    {children}
    <Footer />
  </div>
);

export default Layout;
