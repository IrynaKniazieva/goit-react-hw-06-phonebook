import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilters : (_, {payload}) => payload,
    }
})

const {setFilters} = filterSlice.actions;
export default filterSlice.reducer;