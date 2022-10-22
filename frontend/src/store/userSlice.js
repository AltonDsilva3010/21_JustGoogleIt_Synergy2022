import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

//loadUser
export const loadUser = createAsyncThunk("user/loadUser", async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/auth");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

//Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth",
        body,
        config
      );

      localStorage.setItem("token", res.data.token);
      dispatch(loadUser());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//Logout user
export const logoutUser = createAsyncThunk("user/logoutUser", () => {
  localStorage.removeItem("token");
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loadUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    },
    [loadUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    [loginUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    },
    [loginUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    [logoutUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    [logoutUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
});

export default userSlice;
