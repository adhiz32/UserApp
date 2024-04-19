import { LOGIN, SIGNOUT, UPDATECATEGORIES, UPDATEPROFILE } from "./constants";

export const login = data =>({
    type:LOGIN,
    payload:{
        userId:data.userId,
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        mobileNumber: data.mobileNumber,
        profileImage:data.profileImage
    },
});
    export const signout=data=>({
        type:SIGNOUT,
        payload:{}
});

export const updateProfile=data=>({
    type:UPDATEPROFILE,
    payload:{
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        mobileNumber: data.mobileNumber,
        profileImage:data.profileImage
    },
})

export const updatecategories=data=>({
    type:UPDATECATEGORIES,
    payload:{
        categories:data,
    },
})
