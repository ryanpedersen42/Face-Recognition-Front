import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      comment: '',
      confirmPassword:'',
      formErrors: {
        email: '',
        name:'', 
        password: '', 
        confirmPassword: '',
      },
      formValidity: {
        email: false,
        name: false, 
        password: false, 
        confirmPassword: false,
      },
      canSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      // use dynamic name value to set our state object property
      [name]: value
    }, function(){ this.validateField(name, value)})
  }

  validateField(name, value) {
    if(Object.keys(this.state.formValidity).includes(name)){
      const fieldValidationErrors = this.state.formErrors
      const validity = this.state.formValidity
      const isEmail = name === "email"
      const isPassword = name === "password"
      const isPasswordConfirmation = name === "confirmPassword"
      const label = name === "confirmPassword"? 'password confirmation' : name
      const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  
      validity[name] = value.length >0
      fieldValidationErrors[name] = validity[name] ? '': `${label} is required`
  
      if(validity[name]) {
        if(isPassword){
          validity[name] = value.length >= 5;
          fieldValidationErrors[name] = validity[name] ? '': `${label} longer`
        }
        if(isEmail){
          validity[name] = emailTest.test(value);
          fieldValidationErrors[name] = validity[name] ? '' : `not valid ${label}`
        }
        if(isPasswordConfirmation){
          validity[name] = value === this.state.password
          fieldValidationErrors[name] = validity[name] ? '' : `needs to match`
        }
      }
    
      this.setState({
        formErrors: fieldValidationErrors,
        formValidity: validity,
      }, () => this.canSubmit())
    }
  }

  canSubmit() {
    this.setState({ canSubmit: this.state.formValidity.email && this.state.formValidity.name && this.state.formValidity.password && this.state.formValidity.confirmPassword })
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-invalid');
  }

  onSubmitSignin = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
    })
  }
  render() {
    return (
      <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
      <main onSubmit={this.handleSubmit} 
      className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="name">Name</label>
              <input className={` ${this.errorClass(this.state.formErrors.name)} b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-90`}
              type="name" 
              name="name"  
              id="name" 
              value={this.state.name}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.name}</div>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="email-address">Email</label>
              <input className={` ${this.errorClass(this.state.formErrors.email)} b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100`}
              type="email" 
              name="email"  
              id="email-address" 
              value={this.state.email}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.email}</div>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Password</label>
              <input className={` ${this.errorClass(this.state.formErrors.password)} b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100`}
              type="password" 
              name="password"  
              id="password" 
              value={this.state.password}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.password}</div>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">Confirm Password</label>
              <input className={` ${this.errorClass(this.state.formErrors.confirmPassword)} b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100`}
              type="password" 
              name="confirmPassword"  
              id="confirmPassword" 
              value={this.state.confirmPassword}
              onChange={this.handleChange} 
              />
              <div className="invalid-feedback">{this.state.formErrors.confirmPassword}</div>
            </div>
          </fieldset>
          <div className="">
            <input 
              disabled={!this.state.canSubmit}              
              onClick={this.onSubmitSignin}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" 
              />
          </div>
        </div>
    </main>
    </article>
      );
  }
}

export default Register;