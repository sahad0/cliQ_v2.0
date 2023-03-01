
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ParticipantsListType = {
    id:string,
    name:string,
}
interface StoreValue extends Name,Description,Visibility,Type,Participants_list,Img  {
   
}
type Name = {
    name:string,
};
type Description = {
    description:string,
};
type Visibility = {
    visibility:boolean,
};
type Type = {
    type: "PUBLIC" | "PRIVATE",
};
export type Img = {
    assets:{
        filename?:string,
        fileSize?:number,
        height?:number,
        type?:string,
        uri?:string,
        width?:number,
    }
}
type Participants_list = {
    participants_list: ParticipantsListType[],
};




const val:StoreValue = {
    name: "",
    description: "",
    visibility: true,
    type: "PUBLIC",
    participants_list: [],
    assets:{}
}





const participantSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        titleController: (state, action:PayloadAction<Name>) => {
             
            const {name} = action.payload;
            state.value = {...state.value,name};
        },
        descriptionController: (state, action:PayloadAction<Description>) => {
             
            const {description} = action.payload;
            state.value = {...state.value,description};
        },
        visibilityController: (state, action:PayloadAction<Visibility>) => {
             
            const {visibility} = action.payload;
            state.value = {...state.value,visibility};
        },
        typeController: (state, action:PayloadAction<Type>) => {
             
            const {type} = action.payload;
            state.value = {...state.value,type};
        },
        participantsListController: (state, action:PayloadAction<Participants_list>) => {
             
            const {participants_list} = action.payload;
            state.value = {...state.value,participants_list};
        },
        filterParticipants : (state, action:PayloadAction<{id:string}>) =>{
            const {id} = action.payload;
            state.value.participants_list = state.value.participants_list.filter((k)=> k.id !== id);
        },
        assetController : (state,action:PayloadAction<Img>)=>{
            const {assets} = action.payload;
            state.value.assets = assets;

        },
        clearParticipantsController : (state) =>{
            state.value = {
                name: "",
                description: "",
                visibility: true,
                type: "PUBLIC",
                participants_list: [],
                assets:{}
            }
        }

    }
})

export const {titleController,descriptionController,visibilityController,typeController,assetController,participantsListController,filterParticipants,clearParticipantsController} = participantSlice.actions;

export default participantSlice.reducer;