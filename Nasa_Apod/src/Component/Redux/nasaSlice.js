import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the API endpoint
const API_URL = "http://localhost:5000/apod"; // Update with your backend URL

const getTodayDate = () => new Date().toISOString().split("T")[0];
// Async action to fetch APOD data
export const fetchApodData = createAsyncThunk("nasa/fetchApodData", async (date = getTodayDate()) => {
    const response = await fetch(`${API_URL}?date=${date}`);
    if (!response.ok) {
        throw new Error("Failed to fetch APOD data");
    }
    return await response.json();
});

const nasaSlice = createSlice({
    name: "nasa",
    initialState: {
        apod: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApodData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApodData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.apod = action.payload;
            })
            .addCase(fetchApodData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default nasaSlice.reducer;

