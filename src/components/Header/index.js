import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import * as PopupActions from '../../store/actions/popup.action';
import * as UserActions from '../../store/actions/user.action';

function Header({ user, togglePopup, isLogged }) {
  return (
    <div className="header">
      <h1>GitSearch Redux</h1>
      {user.length === 0 ? (
        <div>
          <button onClick={() => togglePopup('active', isLogged)}>
            Entrar
          </button>
        </div>
      ) : (
        <div>
          <a onClick={() => togglePopup('active', isLogged)}>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="user profile" />
          </a>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.profile,
  popup: state.popup.visibility,
  isLogged: state.popup.isLogged,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PopupActions, ...UserActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
