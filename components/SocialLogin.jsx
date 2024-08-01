

import React from 'react'
import { doSocialLogin } from '../app/actions';

const SocialLogin = () => {
    return (
      <form action={doSocialLogin}>
        <button
        className='bg-pink-400 text-white p-1 rounded-md text-lg'
          type='submit' name='action' value='google' >
          Login com Google
        </button>
      </form> 
   );
  
}

export default SocialLogin