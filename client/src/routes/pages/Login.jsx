import React from 'react';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

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
