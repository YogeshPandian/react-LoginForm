import React, { Component } from 'react';

class Login extends Component{

  constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }
    /test

  handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

    }
  render(){
    return(
    <div>
    <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
      Email : <input type = 'email' onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
      <span style={{color: "red"}}>{this.state.errors["name"]}</span><br/>

      Password : <input type = 'password'/><br/>
      <center><button>Submit</button></center>
      </form>
    </div>
    );
  }
}

export default Login