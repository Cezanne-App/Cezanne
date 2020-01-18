import React, {useState} from 'react';

const Login = ({ setLogged, setUser }) => {
  const [lastUser, setLastUser] = useState(localStorage.getItem('lastUser'));
  const [attemptedUser, setAttemptedUser] = useState(null);
  
  const authenticateUser = () => {
    if (attemptedUser) { // TODO: AUTHENTICATE
      setUser(attemptedUser);
      setLogged(true);
    } else {
      console.error('INCORRECT USER');
    }
    localStorage.setItem('lastUser', attemptedUser);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  return (
    <div id='login-page' >
      <div id='login-form'>
        <h1 className='form-header'>Log in to Cezanne</h1>
        <form id='log_in' onSubmit={(e) => handleFormSubmit(e)}>
          <input list='users' type='text' placeholder='Username' onChange={({target}) => setAttemptedUser(target.value)}/>
          <datalist id="users">
            <option value={!lastUser ? '' : lastUser}/>
          </datalist>
          <input type='text' placeholder='Password'/>
        </form>
        <button form='log_in'>Log In</button>
      </div>
    </div>
  );
};

export default Login;