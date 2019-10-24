    import React from 'react'
    import { Link } from "react-router-dom";
    class AddQuery extends React.Component{
        render(){

            const style={
                background:'#f3f3f3',
                fontSize:'20px',

            }
            return (
            <div className="container bg-light">
              <div className="row">
              <div className="col-lg-12" >
                <h3 className="page-header"><i className="fa fa-laptop"></i> Query</h3>
                <ol className="breadcrumb" style={style}>
                  <li><i className="fa fa-home"></i><Link to='/'>Home</Link></li>
                  <li><i className="fa fa-user"></i>Add Query</li>
                </ol>          
              </div>
            </div>
    <div className='row' >
    <form className='col-lg-6'>
        <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
     <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                <div className="form-group">
                <select className="form-control" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                
                </select>
                 <div className="validation"></div>
              </div>
                  <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>
                    
                <input type="submit" className="btn btn-primary btn-block" value="Register"  />

         </form>         
    </div>

            </div>




                )
            }
        }

        export default AddQuery