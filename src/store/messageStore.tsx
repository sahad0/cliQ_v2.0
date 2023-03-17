
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AndroidColors, IosColors } from "../utils/Colors";

interface MessageSystem {
    message:[],
    newMessage:object,
    chatId:string,
    textMsg:string,
}

const val:MessageSystem = {
   
    message:[],
    newMessage:{

    },
    chatId:'',
    textMsg:'',
}



const messageSlice = createSlice({
    name: "colorStore",
    initialState: { value: val },
    reducers: {
        
        messageController:(state, action:PayloadAction<object>)=>{

            state.value.message = []
           
        },
        newMessageController:(state, action:PayloadAction<object>)=>{
           
        },
        chatIdController:(state, action:PayloadAction<string>)=>{
            state.value.chatId = action.payload;
        },
        txtMsgController:(state, action:PayloadAction<string>)=>{
            state.value.textMsg = action.payload;
        },
    }
})

export const {  messageController , newMessageController , chatIdController , txtMsgController} = messageSlice.actions;

export default messageSlice.reducer;