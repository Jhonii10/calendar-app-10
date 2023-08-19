import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = {
    title: 'cumpleaños del jefe',
    notes: 'hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        _id:'123',
        name:'jhoni'
    }
  }

export const calerndarSlice = createSlice({
  name: 'calerndar',
  initialState:{
    events:[tempEvent,],
    activeEvent: null
   },
   reducers: {
   increment: (state) => {
   state.counter += 1
   }
  }
})

// Action creators are generated for each case reducer function
export const { increment } = calerndarSlice.actions