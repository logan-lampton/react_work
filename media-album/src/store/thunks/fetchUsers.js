import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// first arguement is a string that describes the task (could be anything)
// second arguement is an asyn function call to the database
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //   DEV ONLY!!!
  await pause(1000);

  return response.data;
});

// DEV ONLY; remove for final version
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// exporting the fetchUsers function
export { fetchUsers };
