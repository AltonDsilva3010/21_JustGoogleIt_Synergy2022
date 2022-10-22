import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  event: null,
  loading: true,
  errors: {},
};

//getAllEvents
export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/event");
    return res.data;
  } catch (error) {
    return error;
  }
});

//addEvent
export const addEvent = createAsyncThunk(
  "event/addEvent",
  async ({ name, description, dateofevent, location, type, price }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      description,
      dateofevent,
      location,
      type,
      price,
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/event",
        body,
        config
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAllEvents.pending]: (state) => {
      state.loading = true;
    },
    [getAllEvents.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        events: payload,
      };
    },
    [getAllEvents.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    },
    //addEvent Actions
    [addEvent.pending]: (state) => {
      state.loading = true;
    },
    [addEvent.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        event: payload,
      };
    },
    [addEvent.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    },
  },
});

export default eventSlice;
