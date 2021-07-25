/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import DEFAULT_CONFIG from '../../PasswordGenerator/PasswordConfig';
import GeneratePassword from '../../PasswordGenerator';

const initialState = {
  password: GeneratePassword(DEFAULT_CONFIG, 5),
  config: DEFAULT_CONFIG,
  length: 5,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    generatePassword: (state) => {
      state.password = GeneratePassword(state.config, state.length);
    },
    tweakConfig: (state, { payload }) => {
      state.config[payload] = !state.config[payload];
    },
  },
});

export const PasswordActions = passwordSlice.actions;
export const PasswordSelectors = {
  password: (state) => state.password,
  config: (state) => state.config,
};

export default passwordSlice;
