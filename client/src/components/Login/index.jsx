import React, {useState} from 'react';

const Login = ({ setLogged, setUser }) => {
  const [attemptedUser, setAttemptedUser] = useState(null);
  const [attemptedPassword, setAttemptedPassword] = useState(null);
  const lastUser = localStorage.getItem('lastUser');
  
  const authenticateUser = () => {
    if (attemptedUser && attemptedPassword) { // TODO: AUTHENTICATE
      setUser(attemptedUser);
      setLogged(true);
      localStorage.setItem('lastUser', attemptedUser);
    } else {
      console.error('INCORRECT USER');
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  return (
    <div id='login-page' >
      <div id='login-img-panel'>
        <img id='login-img' src='./images/login_img.jpg' />
      </div>
      <div id='login-form-container'>
        <div id='login-form-elements'>
          <h1 className='form-header'>Log in to Cezanne</h1>
          <form id='login-form' onSubmit={(e) => handleFormSubmit(e)}>
            <input list='users' type='text' placeholder='Username' onChange={({target}) => setAttemptedUser(target.value)}/>
            <datalist id="users">
              <option value={!lastUser ? '' : lastUser}/>
            </datalist>
            <input type='password' placeholder='Password' autoComplete='password' onChange={({target}) => setAttemptedPassword(target.value)}/>
          </form>
          <button form='login-form'>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;