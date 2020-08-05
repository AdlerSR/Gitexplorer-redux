import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FiX } from 'react-icons/fi';

import * as UserActions from '../../store/actions/user.action';
import * as PopupActions from '../../store/actions/popup.action';

import './style.css';

import { saveState } from '../../services/SaveLocal';

function LoginPopup({
  addUser,
  togglePopup,
  visibility,
  removeUser,
  loginStatus,
}) {
  const [name, setName] = useState('');

  function inputChange(e) {
    e.preventDefault();

    saveState(name);
  }

  const className = `login-popup ${visibility}`;

  return (
    <div className={className}>
      <form onSubmit={inputChange}>
        {loginStatus === false ? (
          <>
            <div>
              <label htmlFor="username">Github username </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="username"
              />
              <FiX onClick={() => togglePopup('hidden', loginStatus)} />
            </div>
            <button
              onClick={() => {
                addUser(name);
                togglePopup('hidden', true);
              }}
            >
              Enviar
            </button>
          </>
        ) : (
          <>
            <p>Quer mesmo sair da sua conta?</p>
            <div>
              <button
                onClick={() => {
                  removeUser();
                  togglePopup('hidden', false);
                }}
              >
                {' '}
                sair
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...UserActions, ...PopupActions }, dispatch);

const mapStateToProps = (state) => ({
  visibility: state.popup.visible,
  loginStatus: state.popup.isLogged,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
