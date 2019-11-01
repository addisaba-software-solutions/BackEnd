export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
import axios from 'axios'
import API from './../api.js'
import $ from 'jquery'

export function getAllUser() {
  return (dispatch) => {
    axios.request({
      method: 'get',
      url: API + '/getUser',
      params: {
        logged_user: localStorage.getItem('id'),
      },
    })

      .then((users) => {
        dispatch({
          type: FETCH_USERS,
          payload: users.data,
        })
      })
      .catch(ex => {
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: ex,
        })

      })
  }
}
export function getMessage(id) {

  return (dispatch) => {
    axios.request({
      method: 'get',
      url: API + "/getMessage",
      params: {
        sender_id: localStorage.getItem('id'),
        receiver_id: id,
        message: "message",
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data,
        })

      })
      .catch(ex => {
        dispatch({
          type: FETCH_MESSAGES,
          payload: ex,
        })
      })
  }
}

export function clickToChat(data) {
  return {
    type: 'clickToChat',
    payload: [data],


  };
}
export function sendMessage(id, msg) {
  var receiver_id = id, message = msg;
  var sender_id = localStorage.getItem('id');
  axios.request({
    method: 'get',
    url: API + "/message",
    params: {
      sender_id: sender_id,
      receiver_id: receiver_id,
      message: message,
    },
  })
    .then((res) => {
      console.log(res);
      //this.setState({message:res.data});
    })
    .catch(ex => {
      console.log(ex);
    })
}
export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
}
export function isTyping(message) {
  return {
    type: "isTyping",
    payload: message,
  };
}
export function addTypingInfo(message) {
  return {
    type: "addTypingInfo",
    payload: message,
  };
}
export function messageCounter(count,id) {
  return {
    type: "messageCounter",
    payload: count,id,
  };
}

export function typing_flag(typing_arg, rid) {
  axios.request({
    method: 'get',
    url: API + '/chat',
    params: {
      typing: typing_arg,
      sender_id: localStorage.getItem('id'),
      receiver_id: rid,
    },
  })
    .catch(ex => {
      console.log(ex);
    })
}
