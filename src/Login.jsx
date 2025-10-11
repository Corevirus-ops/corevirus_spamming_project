
import React, { useState, useEffect } from 'react';
import {authorize} from './Auth.js';
import {Container } from 'react-bootstrap'

  

export default function Login() {

  return (
<Container className="d-flex justify-content-center align-items-center ">
    <button id="isLoggedIn" type="button" onClick={ authorize } className='btn btn-success btn-lg'>
      Login with Spotify
    </button>
      <img src='Primary_Logo_Green_RGB.svg' alt='spotifyLogo' style={{minHeight: '5vh', maxHeight: '10vh'}}/>
</Container>
  );
}

