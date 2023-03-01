import { createAsyncThunk } from '@reduxjs/toolkit';
import backend from '../../util/backend';
import { APPLY_STORAGE_KEY } from '../apply';

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await backend.get(`/auth/signout`, {
    withCredentials: true,
  });

  // apply 정보 초기화
  localStorage.removeItem(APPLY_STORAGE_KEY);

  return response.data;
});

export const refreshJwtToken = createAsyncThunk(
  'user/refreshJwtToken',
  async () => {
    const response = await backend.get(`/auth/refresh`, {
      withCredentials: true,
    });

    return response.data;
  },
);

export const loadUserAgreements = createAsyncThunk(
  'user/agreements',
  async () => {
    const response = await backend.get(`/users/agreements`);

    return response.data;
  },
);
