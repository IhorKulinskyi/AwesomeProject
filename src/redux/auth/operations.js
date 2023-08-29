import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredentials.user;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredentials.user;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});

// export const updateUser = createAsyncThunk("user/update",async(_,thunkAPI)=>{
//     try {
        
//     } catch (e) {
//         thunkAPI.rejectWithValue(e);
//     }
// })
