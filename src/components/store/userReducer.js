import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USERS,FETCH_MESSAGES
} from './userAction';

const initialState = {
  users:[],
  loading: false,
 error: null,
 messages:[],
 currentUserDetail:[],
  is_typing:"false",
  pusher_from:"",
  pusher_to:"",
  message_counter:0,
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:{
      return {
        ...state,
        users: action.payload
      };
    }
    case "ADD_MESSAGE":{
      return {
        ...state,
        messages: state.messages.concat([action.payload]),

      };
}
    case 'clickToChat':{
      return {
        ...state,
        currentUserDetail: action.payload
      };
    }
    case 'messageCounter':{
      return {
        ...state,
        message_counter:action.payload
      };
    }
    
    break;
    case FETCH_MESSAGES:{
      return {
        ...state,
        messages: action.payload
      };
    }
    case "addTypingInfo":{
      //console.log("from case",action.payload.sender_id);
      return {
        ...state,
        is_typing: action.payload.message,
        pusher_from:action.payload.sender_id,
        pusher_to:action.payload.reciever_id,
      };
    }



    break;

    case FETCH_USER_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
