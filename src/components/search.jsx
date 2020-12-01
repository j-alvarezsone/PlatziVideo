import React from 'react';
import className from 'classname';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, searchVideo } = props;

  const inputStyle = className('input', {
    isHome,
  });

  const handleInput = (e) => {
    searchVideo(e.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
