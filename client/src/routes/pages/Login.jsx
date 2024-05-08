import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  return (
    <div>
      <p>Login</p>
      
        <Input label={"Username"}/>
        <Button label={"Submit"}/>
    </div>
  )
}

export default Login;
