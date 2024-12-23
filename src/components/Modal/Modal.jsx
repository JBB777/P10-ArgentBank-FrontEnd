import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Field from '../Field/Field';

import './Modal.scss';
import { usernameUpdate } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.profil.token);

  const updateUsername = async () => {
    dispatch(usernameUpdate(newUsername, token));
    navigate('/user');
  };

  return (
    <>
      <button className="edit-button" onClick={() => setIsOpen(!isOpen)}>
        Edit Name
      </button>
      {isOpen && (
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
      )}
    </>
  );
}

export default Modal;
