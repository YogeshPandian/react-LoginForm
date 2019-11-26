import React, { Component } from 'react';

class Login extends Component{

  constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }

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

      //password
        if(!fields["pass"]){
           formIsValid = false;
           errors["pass"] = "Cannot be empty";
        }

      //   //Email
      //   if(!fields["email"]){
      //      formIsValid = false;
      //      errors["email"] = "Cannot be empty";
      //   }

      //   if(typeof fields["email"] !== "undefined"){
      //      let lastAtPos = fields["email"].lastIndexOf('@');
      //      let lastDotPos = fields["email"].lastIndexOf('.');

      //      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
      //         formIsValid = false;
      //         errors["email"] = "Email is not valid";
      //       }
      //  }  

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
    <form onSubmit= {this.contactSubmit.bind(this)}>
      UserName : <input type = 'text' onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
      <span style={{color: "red"}}>{this.state.errors["name"]}</span><br/>

      Password : <input type = 'password' onChange={this.handleChange.bind(this, "pass")} value={this.state.fields["pass"]}/>
      <span style={{color: "red"}}>{this.state.errors["pass"]}</span><br/>
      <center><button>Submit</button></center>
      </form>
    </div>
    );
  }
}

export default Login