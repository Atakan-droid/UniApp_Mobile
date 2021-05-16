import { UnivercityModel } from "../../models/univercityModel";
import { UserModel } from "../../models/userDetailModel";
import { PostModel } from "../../models/postModel";
import { CommentDetailModel } from "../../models/commentDetailModel";

const INITIAL_STATE={
    cars:UnivercityModel[""],
    singleUnivercity:UnivercityModel,
    comments:CommentDetailModel[""],
    user:UserModel,
    posts:PostModel[""],
    message:"",
    isSuccess:"",
    register:false,
    loginId:'',
    loginSuccess:true,
};

export const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SINGLE_UNIVERCITY_SUCCESS':return {...state,singleUnivercity:action.payload,message:action.message}
        case 'COMMENTS_GET_SUCCESS':return {...state,comments:action.payload,message:action.message}
        case 'USER_REGISTER_SUCCESS':return {...state,register:action.payload,message:action.message}
        case 'USER_LOGIN_SUCCESS':return {...state,loginId:action.payload,loginSuccess:action.success,message:action.message}
        case 'USER_DETAIL_SUCCESS':return {...state,user:action.payload}
        case 'CLEAR_DATA':return {...state,loginSuccess:false};
    }
    return state;
};