import { HeadlineH2 } from '../components/atom/Headlineh2'
import LoginForm from '../components/template/login-form/LoginForm'

export const LoginRegistrarse = () => {
  const containerForm =
    'container w-100 bg-dark text-light rounded p-4 mt-4 mb-4'

  return (
    <div className="fullHeight-max-width-980">
      <HeadlineH2 headlineText="Ingreso / registro" />
      <div className={containerForm}>
        <LoginForm />
      </div>
    </div>
  )
}