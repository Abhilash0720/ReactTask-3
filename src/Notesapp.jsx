import { createSlice } from "@reduxjs/toolkit";

export const Notesredux = createSlice({
    name:"notes",
    initialState:[
        {
        header:"FeedBacks"
        },
        {
          header:"Weekly Task"
        },
        {
          header:"Lyrics"
        }
    ]
})
export default Notesredux.reducer