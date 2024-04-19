import { LOGIN, SIGNOUT, UPDATEPROFILE , UPDATECATEGORIES} from "./constants";

const intialState={
    isLoggedIn:false,
    firstName:'',
    lastName:'',
    email:'',
    profileImage:'',
    mobileNumber:'',
    userId:'',
    categories:[],
};

export const EcommerceReducer=(state=intialState,action)=>{
 switch (action.type) {
   
    case LOGIN:
        return{
            ...state,
            firstName:action.payload.firstName,
            lastName:action.payload.lastName,
            email:action.payload.email,
            userId:action.payload.userId,
            mobileNumber:action.payload.mobileNumber,
            profileImage:action.payload.profileImage,
            isLoggedIn:true,
        };

        case SIGNOUT:
            return{
                ...state,
                firstName:"",
                lastName:"",
                email:"",
                mobileNumber:'',
                profileImage:'',
                userId:'',
                isLoggedIn:false,
            };
        case UPDATEPROFILE:
        return{
            ...state,
            firstName:action.payload.firstName,
            lastName:action.payload.lastName,
            email:action.payload.email,
            mobileNumber:action.payload.mobileNumber,
            profileImage:action.payload.profileImage,
            isLoggedIn:true,
        };
        case UPDATECATEGORIES:
            return{
                ...state,
                categories:[...action.payload.categories],
            }

    default:
        return state;
 }

};