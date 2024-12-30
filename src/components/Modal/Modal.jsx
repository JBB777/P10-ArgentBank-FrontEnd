import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Field from '../Field/Field';

import './Modal.scss';
import { usernameUpdate } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();

  //const token = useSelector((state) => state.profil.token);

  const updateUsername = async (e) => {
    e.preventDefault();
    console.log(newUsername);
    dispatch(usernameUpdate(newUsername));
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="edit-button" onClick={() => setIsOpen(!isOpen)}>
        Edit Name
      </button>
      {isOpen && (
        <>
          <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
          <dialog className="modal">
            <FontAwesomeIcon
              className="modal__icon"
              onClick={() => setIsOpen(!isOpen)}
              icon={faXmark}
            />
            <form onSubmit={updateUsername}>
              <Field
                className={'input-wrapper'}
                id={'modal_field'}
                label={'Choose your new username'}
                type={'text'}
                target={(e) => setNewUsername(e.target.value)}
              />
              <button>Update username</button>
            </form>
          </dialog>
        </>
      )}
    </>
  );
}

export default Modal;
