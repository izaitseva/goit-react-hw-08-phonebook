import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./authAPI";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkApi) => {
        try {
            const response = await instance.get('/contacts');
            return response.data;
        } catch ({ response }) {
            return thunkApi.rejectWithValue(response.data);
        }
    });

export default fetchContacts;

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const response = await instance.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const response = await instance.post(`/contacts`, contact);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })