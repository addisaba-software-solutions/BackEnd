import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from "jquery";
import Echo from "laravel-echo"
import debounce from "lodash/debounce";
import './chat.css'
import Pusher from 'pusher-js'
import axios from 'axios'
import ChatForm from './chatForm.js'
import API from './../api.js'
import Conversation from './conversations.js'
import Img from './avatar-mini.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LoadingSpinner from './../loader/loader.js';
import FailToLoad from './../feilToLoad/failToLoad.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAllUser,getMessage,sendMessage,addMessage,isTyping} from './../store/userAction';
import {clickToChat} from './../store/userAction'
import './type_indicator.css'
class ChatApp extends React.Component {

 scrollTop(){
$("#msg_card_body").animate({ scrollTop: 20000000 }, "slow");
}
handleTyping = debounce(function() {
    this.props.isTyping(true);
 }, 500);

componentDidMount(){
this.props.getAllUser();
Pusher.logToConsole = true;
var pusher = new Pusher('3346cec27d06f7394391', {
    cluster: 'ap2',
    forceTLS: true,
     encrypted: true
});


const channelTyping = pusher.subscribe('my-typing');
   channelTyping.bind('my-typing', data => {

     if(data.message==='true'){
       this.props.isTyping(true);

    }
    else{
       this.props.isTyping(false);
    }
   });

var channel = pusher.subscribe('my-channel');
channel.bind('my-event',data  => {
  if(data.from==localStorage.getItem('id')){
    this.props.addMessage(data);
     this.scrollTop();
  }
else{
this.props.addMessage(data);
this.scrollTop();
}

});
}

clickToChat = (data) => {
this.props.clickToChat(data);
this.props.getMessage(data.id);
  };
change(){
    axios.request({
      method:'get',
      url:API+'/chat',
      params:{
        typing:true,
      },
    })
    .catch(ex =>{
     console.log(ex);
      })

}
keyUp(){
  setTimeout(function () {
    axios.request({
      method:'get',
      url:API+'/chat',
      params:{
        typing:false,
      },
    })
    .catch(ex =>{
     console.log(ex);
      })

    }, 3000);
}

sendMessage=(e)=>{
  if (e.key === 'Enter' &&  $('#message').val()!==null) {
    axios.request({
      method:'get',
      url:API+'/chat',
      params:{
        typing:false,
      },
    })
    .catch(ex =>{
     console.log(ex);
      })

  var id=null;
  var message=$('#message').val();
  this.props.currentUserDetail.map(receiver_id=>{
  id=receiver_id.id
  });

   $('#message').val('');
   this.props.sendMessage(id,message);

  }


}

render() {
return(
  <div className="container-fluid h-100">
    <div className="row justify-content-center h-100">
      <div className="col-md-5 col-xl-4 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
        <h2 className="text-light">

                      </h2>
          <div className="input-group">
            <input type="text" placeholder="Search..." name="" className="form-control search"/>
            <div className="input-group-prepend">
              <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
            </div>
          </div>
        </div>
        <div className="card-body contacts_body">
          <ui className="contacts">
          {
          this.props.users.map(data=>{
            return(
        <li onClick={()=>this.clickToChat(data)}>
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img src={Img} className="rounded-circle user_img"/>
                <span className="online_icon"></span>
              </div>
              <div className="user_info">
                   <span>{data.firstName} {data.lastName}</span>
                    <p>{data.firstName} online</p>
              </div>
            </div>
      </li>
    )
          })
        }

        {




}



          </ui>
        </div>

        <div className="card-footer"/>
      </div></div>

      <div className="col-md-8 col-xl-6 chat" id='chat'>
    <div className="card">
    {
    this.props.currentUserDetail.map(data_user=>{
     return(
       <div className="card">
            <div className="card-header msg_head">
             <div className="d-flex bd-highlight">
               <div className="img_cont">
                 <img src={Img} className="rounded-circle user_img"/>
                 <span className="online_icon"></span>
               </div>
               <div className="user_info">
                 <span>{data_user.firstName} {data_user.lastName}</span>
                 <p>1767 Messages</p>
               </div>
               <div className="video_cam">
                 <span><i className="fas fa-video"></i></span>
                 <span><i className="fas fa-phone"></i></span>
               </div>
             </div>
             <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
             <div className="action_menu">
               <ul>
                 <li><i className="fas fa-user-circle"></i> View profile</li>
                 <li><i className="fas fa-users"></i> Add to close friends</li>
                 <li><i className="fas fa-plus"></i> Add to group</li>
                 <li><i className="fas fa-ban"></i> Block</li>
               </ul>
             </div>
           </div>
         <ul className="card-body msg_card_body" id="msg_card_body" >
         {this.props.message.map(message=>{
         return(
           message.from==localStorage.getItem('id')?(
           <li className="d-flex justify-content-end mb-4">
             <div className="msg_cotainer_send" style={{minWidth:'130px'}}>
                {message.message}
               <span className="msg_time_send ">{message.created_at}</span>
             </div>
             <div className="img_cont_msg">
               <img src={Img} className="rounded-circle user_img_msg"/>
             </div>
         </li>
       ):
       (
      <li className="d-flex justify-content-start mb-4">
      <div className="img_cont_msg" >
        <img src={Img} className="rounded-circle user_img_msg"/>
      </div>
        <div className="msg_cotainer" style={{minWidth:'130px'}}>
         {message.message}
        <span className="msg_time">{message.created_at}</span>
      </div>
    </li>
       )

         ) // end of return message
       }) // end of map

       }
    {
      this.props.is_typing?(
  <div className="typing-indicator-box">
    <ul>  <li>
           <img src={Img} className="rounded-circle user_img_msg"/>
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>

            </ul>
          </div>
        ):null
      }
      </ul>



      <div className="card-footer">
        <div className="input-group">

          <div className="input-group-append">
            <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
          </div>

          <input name="" id="message" className="form-control type_msg"  placeholder="Type your message..."
          onKeyPress={this.sendMessage.bind(this)}  onKeyUp={this.keyUp } onChange={this.change}/>

          <div className="input-group-append">
            <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
          </div>

        </div>

      </div>

        </div>
             )
              }) // end of maping user detail
              }

    </div>

      </div> // end of chat div
      </div>
      </div>


)}


}
function mapStateToProps(state) {
  return {
    is_typing: state.capd.is_typing,
    users: state.capd.users,
    message:state.capd.messages,
    currentUserDetail:state.capd.currentUserDetail,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUser: bindActionCreators(getAllUser, dispatch),
    addMessage: bindActionCreators(addMessage,dispatch),
  }
}
const mapDispatchToProps = {
  getAllUser,
  clickToChat,
  getMessage,
  sendMessage,
  addMessage,
  isTyping,
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
