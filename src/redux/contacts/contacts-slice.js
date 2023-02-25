import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice ({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: (state, {payload}) => {
            state.push(payload);
        },
        deleteContact: (state, {payload}) => state.filter(({id}) => id !== payload)
    }
})


// const contactsSlice = createSlice ({
//     name: "contacts",
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             redusers: (state, {payload}) => {
//             state.push(payload);
//         },
//         // prepare: data => {
//         //     return {
//         //         payload: {
//         //             id: nanoid(),
//         //             ...data,
//         //         }
//         //     }
//         // }
//     },
//         deleteContact: (state, {payload}) => state.filter(({id}) => id !== payload),
// }
// })
export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;