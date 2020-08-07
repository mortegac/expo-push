import React, { useEffect, useState, createContext, useRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { DateTime } from 'luxon';
import { AppState } from 'react-native';
import { Toast } from 'native-base';
import { isEmpty, isEqual, xorWith } from 'lodash';
export const Context = createContext();

export const Provider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  
  const [menu, setMenu] = useState(false);

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);


  return (
    <Context.Provider
      value={{
        logged,
        setLogged,
        loading,
        token,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default { Context, Provider };
