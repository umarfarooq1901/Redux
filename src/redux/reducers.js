import { createReducer } from "@reduxjs/toolkit";


const  initialState = {value: 0};

export const counterReducer = createReducer(initialState, (builder)=>{
        builder.addCase('actionIncreament', (state)=>{
            state.value += 1;
        }) 
        .addCase('actionDecreament', (state)=>{
                if(state.value > 0){

                        state.value -=1;
                }
        })
        .addCase('actionReset', (state)=>{
                state.value = 0;
        })
        
});