import './User.scss';
import AccountWrapper from '../../components/AccountWrapper/AccountWrapper';

function User() {
  return (
    <main className="bg-dark">
      <div className="account__header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
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
