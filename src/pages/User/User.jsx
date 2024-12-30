import './User.scss';
import AccountWrapper from '../../components/AccountWrapper/AccountWrapper';
import Modal from '../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function User() {
  const token = useSelector((state) => state.profil.token);
  const navigate = useNavigate();

  // Redirection page de connexion si pas connecté
  useEffect(() => {
    if (!token) {
      navigate('/sign-in');
    }
  });

  const firstName = useSelector((state) => state.profil.firstName);
  const lastName = useSelector((state) => state.profil.lastName);
  const pseudo = useSelector((state) => state.profil.pseudo);

  return (
    <main className="bg-dark">
      <div className="account__header">
        <h1>
          Welcome back
          <br />
          {firstName + ' ' + '`' + pseudo + '`' + ' ' + lastName} !
        </h1>
        <Modal />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountWrapper
        title={'Argent Bank Checking (x8349)'}
        amount={'$2,082.79'}
        description={'Available Balance'}
      />
      <AccountWrapper
        title={'Argent Bank Savings (x6712)'}
        amount={'$10,928.42'}
        description={'Available Balance'}
      />
      <AccountWrapper
        title={'Argent Bank Credit Card (x8349)'}
        amount={'$184.30'}
        description={'Current Balance'}
      />
    </main>
  );
}

export default User;
