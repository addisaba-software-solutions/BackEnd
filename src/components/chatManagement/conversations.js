import React from 'react'
import axios from 'axios'
import $ from "jquery";
import API from './../api.js'
import Img from './avatar-mini.jpg'
class Conversation extends React.Component{
constructor(props){
  super(props);
  this.state={
   sender_id:this.props.id,
   firstName:this.props.firstName,
   lastName:this.props.lastName,
   email:this.props.email,
   message:[],
  }

}
componentWillMount(){
  axios.request({
  method:'get',
  url:API+'/getMessage',
  params:{
    sender_id:localStorage.getItem('id'),
    receiver_id:this.state.sender_id,
  },
  })
  .then((res)=>{

this.setState({message:res.data})
this.scrollTop();

     })
  .catch(ex =>{
    console.log(ex);
  })
}
scrollTop(){
  $('#msg_card_body').animate({
      scrollTop: $('#msg_card_body').get(0).scrollHeight
  }, 50);
}

   render(){
     return (
       <div className="card">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img src={Img} className="rounded-circle user_img"/>
                      <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                      <span>{this.state.firstName} {this.state.lastName}</span>
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

                <ul className="card-body msg_card_body" id="msg_card_body">

                    {  this.state.message.map((data)=>{

                         true?(
                              <div className="d-flex justify-content-end mb-4">
                              <div className="msg_cotainer_send" style={{minWidth:'130px'}}>
                         {data.message}
                                  <span className="msg_time_send ">{data.created_at}</span>
                                </div>
                                <div className="img_cont_msg">
                                <img src={Img} className="rounded-circle user_img_msg" alt="wait"/>
                                </div>
                                </div>

                            ):(
                              <div className="d-flex justify-content-start mb-4">
                               <div className="img_cont_msg" >
                                 <img src={Img} className="rounded-circle user_img_msg"/>
                               </div>
                               <div className="msg_cotainer" style={{minWidth:'130px'}}>
                                  {data.message}
                               </div>
                               <span className="msg_time">{data.created_at}</span>
                             </div>
                            )


                          })
                        }


               </ul>






                </div>
     )
   }
 }
  export default Conversation;
