import { HeadlineH2 } from '../components/atom/Headlineh2'
import { RegisterForm } from '../components/template/register-form/REgisterForm'
import '../components/atom/btncolors.css'

export const Registrarse = () => {
  const containerForm =
    'container w-100 bg-dark text-light rounded p-4 mt-4 mb-4'

  return (
    <section className="fullHeight-max-width-980">
      <HeadlineH2 headlineText="Registrarse" paddingY="5" />
      <div className={containerForm}>
        <RegisterForm />
      </div>
    </section>
  )
}
