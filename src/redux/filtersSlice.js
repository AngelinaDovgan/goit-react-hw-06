import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        name: ""
    },
    reducers: {
        changeContact(state, action) {
                state.name = action.payload;
            },
    },
});

export const { changeContact } = filterSlice.actions;
export default filterSlice.reducer;