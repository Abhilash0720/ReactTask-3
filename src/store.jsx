import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./Notesapp"
export default configureStore({
    reducer:{
        notes:NotesReducer
    }
})