import React, {  } from "react";
import "../../views/IndexSections/local.css"
import $ from "jquery";



// reactstrap components
import {
 Container,
 FormGroup,
 Input
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";



class Message extends React.Component { 
	
	
	componentDidMount() {
	  document.body.classList.toggle("msg-page2");

	
	
	
	}
	
	showbox=()=>{

		$( "#flip" ).click(function() {
			//$(".lists").hide("fast");
			$( ".message-box" ).show("slow");
		  });
		// $(document).ready(function(){
		// 	$(".flip").click(function(){
		// 		$(".message-box").show("slide", { direction: "right" }, 10000);
		// 		$(".lists").hide("fast",)
		// 	});
		// });
		
	}
	hidebox=()=>{

		$( "#back" ).click(function() {
			$( ".message-box" ).hide( "fast")
		  });
		
	}
	componentWillUnmount() {
	  document.body.classList.toggle("msg-page2");
	}
	

	render() {
		
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      
        <div className="section">
          <Container>
       	
	  <div className="sidepanel">

	   <div className="row">
	   <div className="col-md-4">
		  <div className="chat-list-box" id="lists">
		  <div className="head-box">
		    <ul className="list-inline text-left d-inline-block float-left">
			  <li> <img src="https://i.ibb.co/fCzfFJw/person.jpg" alt="" width="40px"/> </li> 
			</ul>
			 <ul class="flat-icon list-inline text-right d-inline-block float-right">
			  <li> <a href="#b"> <i className="fas fa-search"></i> </a> </li> 
			  <li> <a href="#b"> <i className="fas fa-ellipsis-v"></i> </a> </li> 
			</ul>
			</div>
		
			<div class="chat-person-list" >
			  <ul class="list-inline"> 
			    <li> <a href="#b" onClick={this.showbox} id="flip" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Naveen Mandwariya</span> <span class="chat-time">12:00 Am</span> </a> </li> 
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sunena Daksh </span> <span class="chat-time">11:45 Pm</span> </a> </li> 
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpit Singh </span>  <span class="chat-time">12:15 Pm</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpita </span>  <span class="chat-time">09:10 Am</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sorasth parmar </span>  <span class="chat-time">02:00 Pm</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/><span> Sushmita </span>  <span class="chat-time">08:00 Am</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Naveen Mandwariya</span> <span class="chat-time">12:00 Am</span> </a> </li> 
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sunena Daksh </span> <span class="chat-time">11:45 Pm</span> </a> </li> 
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpit Singh </span>  <span class="chat-time">12:15 Pm</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpita </span>  <span class="chat-time">09:10 Am</span> </a> </li>
				<li> <a href="#b" className="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sorasth parmar </span>  <span class="chat-time">02:00 Pm</span> </a> </li>
				
			  </ul>
			</div>
			
		  </div>
		 </div> 
	   
		 <div className="col-md-8">
			<div ref="toggle" id="message-box" className="message-box">
			  <div className="head-box-1">
			  
				<ul className="msg-box list-inline text-left d-inline-block float-left">
				 <li> <i className="fas fa-arrow-left" onClick={this.hidebox} id="back"></i> </li> 
				   <li> <img src={require("assets/img/ryan.jpg")} alt="" width="40px"/> <span> Naveen </span> <small class="timee"> 12:45 Pm </small> </li> 
				</ul>
				
				<ul className="flat-icon list-inline text-right d-inline-block float-right">
				   <li> <a href="#b"> <i className="fas fa-video"></i> </a> </li>
				   <li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li> 
				   <li> 
				   <a href="#b" id="dset"> <i className="fas fa-ellipsis-v"></i> </a>
					<div className="setting-drop">
					 <ul className="list-inline"> 
					   <li> <a href="#b"> My Profile</a> </li>  
					   <li> <a href="#b"> Setting </a> </li>
					   <li> <a href="#b"> Privacy Policy </a> </li>
					   <li> <a href="#b"> Hidden chat  </a> </li>
					   <li> <a href="#b"> Logout </a> </li>
					  </ul>
					</div>
				   </li> 
				</ul>
				
			 </div>
			 
			 <div className="msg_history">
			 <div className="incoming_msg">
			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
			   <div className="received_msg">
				 <div className="received_withd_msg">
				   <p>Hi, How are you ?</p>
				   <span className="time_date"> 11:01 AM    |    June 9</span></div>
			   </div>
			 </div>
			 <div className="outgoing_msg">
			   <div className="sent_msg">
				 <p>Hello, i am fine thankyou, what about you ?</p>
				 <span className="time_date"> 11:01 AM    |    June 9</span> </div>
			 </div>
			 <div className="incoming_msg">
			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
			   <div className="received_msg">
				 <div className="received_withd_msg">
				   <p>I am also good thankyou!</p>
				   <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
			   </div>
			 </div>
			 <div className="outgoing_msg">
			   <div className="sent_msg">
				 <p> ok </p>
				 <span className="time_date"> 11:01 AM    |    Today</span> </div>
			 </div>
			 <div className="incoming_msg">
			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
			   <div className="received_msg">
				 <div className="received_withd_msg">
				   <p> What's going on ?</p>
				   <span className="time_date"> 11:01 AM    |    Today</span></div>
			   </div>
			 </div>
		   </div>
			 
			 <div className="send-message">
			   <form action="" method="">
				{/* <textarea cols="10" rows="2" class="form-control" placeholder="Type your message here ..."> </textarea> */}
				<FormGroup>
				   <Input placeholder="Type your message here ..." type="text"  />
				 </FormGroup>
				 <ul className="list-inline"> 
				  <li>
				   <a href="#b" id="attach">  <i class="fas fa-paperclip"></i> </a> 
					 <div className="attachement">
					   <ul className="list-inline"> 
						<li> <a href="#b"> <i className="fas fa-file"></i> </a> </li> 
						<li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li> 
						<li> <a href="#b"> <i className="fas fa-image"></i> </a> </li> 
						<li> <a href="#b"> <i className="far fa-play-circle"></i> </a> </li> 
						<li> <a href="#b"> <i className="fas fa-map-marker-alt"></i> </a> </li> 
						<li> <a href="#b"> <i className="fas fa-id-card"></i> </a> </li> 
					   </ul>
					 </div> 
				   </li>	  
				   <li> <i className="fas fa-paper-plane"></i> </li>
				 </ul>
			   </form>
			 </div>
			 
			 
			</div>
		  </div>

		
		 
	   </div>
	  </div>
	  



    
          </Container>
        </div>
        
      </div>
    </>
  );
}

}



// class MsgDetail extends Component {
	
// 	render() { 
// 		return (  

// 			<div className="col-md-8">
// 			<div ref="toggle" id="message-box" className="message-box">
// 			  <div className="head-box-1">
			  
// 				<ul className="msg-box list-inline text-left d-inline-block float-left">
// 				 <li> <i className="fas fa-arrow-left" onClick={this.hidebox} id="back"></i> </li> 
// 				   <li> <img src={require("assets/img/ryan.jpg")} alt="" width="40px"/> <span> Naveen mandwariya </span> <small class="timee"> 12:45 Pm </small> </li> 
// 				</ul>
				
// 				<ul className="flat-icon list-inline text-right d-inline-block float-right">
// 				   <li> <a href="#b"> <i className="fas fa-video"></i> </a> </li>
// 				   <li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li> 
// 				   <li> 
// 				   <a href="#b" id="dset"> <i className="fas fa-ellipsis-v"></i> </a>
// 					<div className="setting-drop">
// 					 <ul className="list-inline"> 
// 					   <li> <a href="#b"> My Profile</a> </li>  
// 					   <li> <a href="#b"> Setting </a> </li>
// 					   <li> <a href="#b"> Privacy Policy </a> </li>
// 					   <li> <a href="#b"> Hidden chat  </a> </li>
// 					   <li> <a href="#b"> Logout </a> </li>
// 					  </ul>
// 					</div>
// 				   </li> 
// 				</ul>
				
// 			 </div>
			 
// 			 <div className="msg_history">
// 			 <div className="incoming_msg">
// 			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
// 			   <div className="received_msg">
// 				 <div className="received_withd_msg">
// 				   <p>Hi, How are you ?</p>
// 				   <span className="time_date"> 11:01 AM    |    June 9</span></div>
// 			   </div>
// 			 </div>
// 			 <div className="outgoing_msg">
// 			   <div className="sent_msg">
// 				 <p>Hello, i am fine thankyou, what about you ?</p>
// 				 <span className="time_date"> 11:01 AM    |    June 9</span> </div>
// 			 </div>
// 			 <div className="incoming_msg">
// 			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
// 			   <div className="received_msg">
// 				 <div className="received_withd_msg">
// 				   <p>I am also good thankyou!</p>
// 				   <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
// 			   </div>
// 			 </div>
// 			 <div className="outgoing_msg">
// 			   <div className="sent_msg">
// 				 <p> ok </p>
// 				 <span className="time_date"> 11:01 AM    |    Today</span> </div>
// 			 </div>
// 			 <div className="incoming_msg">
// 			   <div className="incoming_msg_img"> <img src={require("assets/img/ryan.jpg")} alt="sunil"/> </div>
// 			   <div className="received_msg">
// 				 <div className="received_withd_msg">
// 				   <p> What's going on ?</p>
// 				   <span className="time_date"> 11:01 AM    |    Today</span></div>
// 			   </div>
// 			 </div>
// 		   </div>
			 
// 			 <div className="send-message">
// 			   <form action="" method="">
// 				{/* <textarea cols="10" rows="2" class="form-control" placeholder="Type your message here ..."> </textarea> */}
// 				<FormGroup>
// 				   <Input placeholder="Type your message here ..." type="text"  />
// 				 </FormGroup>
// 				 <ul className="list-inline"> 
// 				  <li>
// 				   <a href="#b" id="attach">  <i class="fas fa-paperclip"></i> </a> 
// 					 <div className="attachement">
// 					   <ul className="list-inline"> 
// 						<li> <a href="#b"> <i className="fas fa-file"></i> </a> </li> 
// 						<li> <a href="#b"> <i className="fas fa-camera"></i> </a> </li> 
// 						<li> <a href="#b"> <i className="fas fa-image"></i> </a> </li> 
// 						<li> <a href="#b"> <i className="far fa-play-circle"></i> </a> </li> 
// 						<li> <a href="#b"> <i className="fas fa-map-marker-alt"></i> </a> </li> 
// 						<li> <a href="#b"> <i className="fas fa-id-card"></i> </a> </li> 
// 					   </ul>
// 					 </div> 
// 				   </li>	  
// 				   <li> <i className="fas fa-paper-plane"></i> </li>
// 				 </ul>
// 			   </form>
// 			 </div>
			 
			 
// 			</div>
// 		  </div>

// 		);
// 	}
// }
//   class Msg extends Component {
// 	  state = {  }
// 	  render() { 
// 		  return ( 
// 		  <div class="col-md-4">
// 		  <div class="chat-list-box">
// 		  <div class="head-box">
// 		    <ul class="list-inline text-left d-inline-block float-left">
// 			  <li> <img src="https://i.ibb.co/fCzfFJw/person.jpg" alt="" width="40px"/> </li> 
// 			</ul>
// 			 <ul class="flat-icon list-inline text-right d-inline-block float-right">
// 			  <li> <a href="#b"> <i class="fas fa-search"></i> </a> </li> 
// 			  <li> <a href="#b"> <i class="fas fa-ellipsis-v"></i> </a> </li> 
// 			</ul>
// 			</div>
		
// 			<div class="chat-person-list">
// 			  <ul class="list-inline"> 
// 			    <li> <a href="#b" onClick={this.show_detail} class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Naveen Mandwariya</span> <span class="chat-time">12:00 Am</span> </a> </li> 
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sunena Daksh </span> <span class="chat-time">11:45 Pm</span> </a> </li> 
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpit Singh </span>  <span class="chat-time">12:15 Pm</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpita </span>  <span class="chat-time">09:10 Am</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sorasth parmar </span>  <span class="chat-time">02:00 Pm</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/><span> Sushmita </span>  <span class="chat-time">08:00 Am</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Naveen Mandwariya</span> <span class="chat-time">12:00 Am</span> </a> </li> 
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sunena Daksh </span> <span class="chat-time">11:45 Pm</span> </a> </li> 
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpit Singh </span>  <span class="chat-time">12:15 Pm</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Arpita </span>  <span class="chat-time">09:10 Am</span> </a> </li>
// 				<li> <a href="#b" class="flip"> <img src={require("assets/img/ryan.jpg")} alt=""/> <span> Sorasth parmar </span>  <span class="chat-time">02:00 Pm</span> </a> </li>
				
// 			  </ul>
// 			</div>
			
// 		  </div>
// 		 </div>  );




export default Message;
