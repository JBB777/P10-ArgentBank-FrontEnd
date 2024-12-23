import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* 
  Si token présent car remember me coché ?
  Faire un getProfil où ?
*/

// API call to login using email & password from the signin form
export const login = createAsyncThunk('profil/login', async (userInfos) => {
  const userAuth = {
    email: userInfos.username,
    password: userInfos.password,
  };
  const chargeUserAuth = JSON.stringify(userAuth);

  const fetchResponse = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: chargeUserAuth,
  });
  if (fetchResponse.status === 200) {
    const response = await fetchResponse.json();
    // Remeber me managment
    if (userInfos.remember) {
      window.localStorage.setItem('argentBankUserToken', response.body.token);
    } else {
      window.sessionStorage.setItem('argentBankUserToken', response.body.token);
    }

    return response;
  } else {
    throw new Error('User not found.');
  }
});

// User datas recovery from the API
export const getProfil = createAsyncThunk('profil/getProfil', async (token) => {
  const repProfile = await fetch('http://localhost:3001/api/v1/user/profile', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  const datas = await repProfile.json();
  if (!datas) {
    throw new Error("Erreur lors du chargement du profil de l'utilisateur !");
  }
  return datas;
});

// Username update
export const usernameUpdate = createAsyncThunk(
  'profil/usernameUpdate',
  async (newUsername, token) => {
    console.log('nouveau pseudo : ' + newUsername);
    console.log('token : ' + token);
    const username = {
      userName: newUsername,
    };

    const chargeUsername = JSON.stringify(username);

    const apiFetch = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: chargeUsername,
    });

    const data = await apiFetch.json();
    if (apiFetch.ok) {
      console.log('data.body : ' + data.body);
      return data.body;
    } else {
      throw new Error('Erreur lors de la modification du pseudo');
    }
  },
);

const userSlice = createSlice({
  name: 'profil',
  initialState: {
    firstName: null,
    lastName: null,
    pseudo: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.pseudo = null;
      state.token = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(getProfil.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.pseudo = action.payload.body.userName;
    });
    builder.addCase(getProfil.rejected, (state, action) => {
      state.error = action.payload.body.error;
    });
    builder.addCase(usernameUpdate.fulfilled, (state, action) => {
      state.pseudo = action.payload.body.userName;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
