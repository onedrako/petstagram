import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'el usuario ya existe u ocurre algun  problema'

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'la contraseña no es correcta o el usuario no existe'

            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesión' />
          }
        }
      </LoginMutation>
    </>
  )
}

export { NotRegisteredUser }
