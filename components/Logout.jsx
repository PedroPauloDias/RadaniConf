import React from 'react'
import { doLogout } from '../app/actions'
import { MyButton } from './myButton/index';


const Logout = () => {
  return (

    <form action={doLogout}>
      <MyButton
      color="radani2"
      size="xs"
      type="submit">
        Sair
      </MyButton>
    </form>
  )
}

export default Logout