import { createSlice  } from "@reduxjs/toolkit";

const cart  = createSlice({
    name:"cartslice",
    initialState:{
        item:[]
    },
    reducers:{
      addItems:(state,action)=>{
         state.item.push({...action.payload, quantity:1})
      },
      IncrimentItems:(state,action)=>{
         const ele = state.item.find(item=>item.id===action.payload.id);
         ele.quantity++;
      },
      DecrementItems:(state,action)=>{
        const ele = state.item.find(item=>item.id===action.payload.id);
        if(ele.quantity>1){
            ele.quantity-=1;
        }else{
            state.item = state.item.filter(item=>item.id!=action.payload.id);
        }
      }
    }
})

export const {addItems,IncrimentItems,DecrementItems} = cart.actions;
export default cart.reducer;