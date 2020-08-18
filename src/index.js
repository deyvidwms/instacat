import React from 'react';

import Logo from './components/Logo';
import Photo from './components/Photo';


const Main = () => {
  return (
    <>
      <Logo/>
      <Photo file={require("./assets/images/cat.png")} count={5}/>
      <Photo file={require("./assets/images/cat2.png")} count={6} />
    </>
  );
}

export default Main;