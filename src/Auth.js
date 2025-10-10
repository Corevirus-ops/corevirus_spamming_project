

 async function getToken (code) {
  try{
           const redirectUri = 'http://[::1]:5173';
const clientId = '0f70eecbf6ea43c39be1e1e94c15a100';


  // stored in the previous step
  const codeVerifier = localStorage.getItem('code_verifier');


  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }

  const body = await fetch(url, payload);
  const response = await body.json();
console.log(response)
  localStorage.setItem('access_token', response.access_token);
  } catch (error) {
    console.error('Authorization failed:', error);
  }
  

}

export default getToken;


