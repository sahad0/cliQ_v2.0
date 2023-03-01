
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AndroidColors, IosColors } from "../utils/Colors";

interface Colors {
    colors:{
        [key:string]:string,
    }
}

const val:Colors = {
       colors:{
        
       }
}



const colorSlice = createSlice({
    name: "colorStore",
    initialState: { value: val },
    reducers: {
        colorController:(state, action:PayloadAction<{OS:'IOS' | 'ANDROID'}>)=>{
            if(action.payload.OS==='IOS'){
                state.value = IosColors;

            }
            else{
                state.value = AndroidColors;
            }
        }
    }
})

export const { colorController } = colorSlice.actions;

export default colorSlice.reducer;