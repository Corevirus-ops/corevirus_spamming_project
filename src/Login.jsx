
import React, { useState, useEffect } from 'react';
import {authorize} from './Auth.js';


  

export default function Login() {

  return (
    <button id="isLoggedIn" type="button" onClick={ authorize }>
      Login with Spotify
    </button>
  );
}

