import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FiX } from 'react-icons/fi';

import * as UserActions from '../../store/actions/user.action';
import * as PopupActions from '../../store/actions/popup.action';

import './style.css';

import { saveState } from '../../services/SaveLocal';

function LoginPopup({ addUser, toggleVisibility, visibility }) {
  const [name, setName] = useState('');

  function inputChange(e) {
    e.preventDefault();

    saveState(name);
  }

  const className = `login-popup ${visibility}`;

  return (
    <div className={className}>
      <form onSubmit={inputChange}>
        <div>
          <label htmlFor="username">Github username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="username"
          />
          <FiX onClick={() => toggleVisibility('hidden')} />
        </div>
        <button
          onClick={() => {
            addUser(name);
            toggleVisibility('hidden');
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...UserActions, ...PopupActions }, dispatch);

const mapStateToProps = (state) => ({
  visibility: state.popup.visible,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
