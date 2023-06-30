import {configureStore } from '@reduxjs/toolkit'
import scoreReducer from './scoreSlice';

export  const store =configureStore({
    reducer:    scoreReducer

    })