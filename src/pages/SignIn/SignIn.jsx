import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import FormLogin from '../../components/FormLogin/FormLogin';

function SignIn() {
  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <FormLogin />
      </section>
    </main>
  );
}

export default SignIn;
