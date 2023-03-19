
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreValue extends UserType,Profile,Status,OrgId {
    token: string,
}
type UserType = {
    orgNewUser: boolean|null,
}
type StatusType =  "AVAILABLE"|"BUSY"|"AWAY"|"INVISIBLE"
type Status = {
    status: StatusType
}

type OrgId = {
    orgId:string|null,

}
interface UserTypeController extends OrgId,UserType{

}


type Profile ={
    profile:{
        _id: string, 
        avatar_url: string, 
        country: string, 
        email: string, 
        first_name: string, 
        language: string, 
        last_name: string, 
        mini_avatar_url: string, 
        status: StatusType, 
        timezone: string, 
        user_id: string
    }|null;
   
};

const val:StoreValue = {
       token:"",
       orgNewUser:null,
       profile:{
            _id: "", 
            avatar_url: "", 
            country: "", 
            email: "", 
            first_name: "", 
            language: "", 
            last_name: "", 
            mini_avatar_url: "", 
            status: "AVAILABLE", 
            timezone: "", 
            user_id: ""
       },
       orgId:null,
       status:"AVAILABLE",
}



const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        loginController: (state, action:PayloadAction<StoreValue>) => {
             
            const {token,orgNewUser,profile} = action.payload;
            state.value = {...state.value,token,orgNewUser,profile};
        },
        logoutController : (state) => {
            state.value = {
                orgId:null,
                orgNewUser:null,
                profile:null,
                token:'',
                status:'AVAILABLE'
            };

        },
        userTypeController : (state,action:PayloadAction<UserTypeController>) => {
            const {orgNewUser,orgId} = action.payload;
            state.value = {...state.value,orgNewUser,orgId};
        },
        statusController : (state,action:PayloadAction<Status>) => {
                const {status} = action.payload;
                if(state.value.profile){
                    state.value.profile.status = status;
                }

        }
    }
})

export const { loginController ,logoutController ,userTypeController ,statusController } = storeSlice.actions;

export default storeSlice.reducer;