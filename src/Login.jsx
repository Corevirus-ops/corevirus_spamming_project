
import React, { useState, useEffect } from 'react';

                      const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}



const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}



const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const redirectUri = 'http://[::1]:5173';
const clientId = '0f70eecbf6ea43c39be1e1e94c15a100';

export default function Login() {

    async function authorize() {
        try {



const codeVerifier  = generateRandomString(64);
const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);


const authUrl = new URL("https://accounts.spotify.com/authorize")

window.localStorage.setItem('code_verifier', codeVerifier);

const params =  {
  response_type: 'code',
  client_id: clientId,
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();
        }
        catch (error) {
            console.error('Authorization failed:', error);
        }

}




  return (
    <button id="isLoggedIn" type="button" onClick={ authorize }>
      Login with Spotify
    </button>
  );
}

