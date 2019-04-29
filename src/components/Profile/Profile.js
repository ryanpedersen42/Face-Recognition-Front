import React from 'react';
import './Profile.css';
import { returnStatement } from '@babel/types';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet,
        }
    }

    onFormChange = (event) => {
        switch(event.target.name) {
            case 'user-name': 
                this.setState({ name: event.target.value })
                break;
            case 'user-age': 
                this.setState({ age: event.target.value })
                break;
            case 'user-pet': 
                this.setState({ pet: event.target.value })
                break;
            default: 
                return;
        }
    }

    render() {
        const { user } = this.props;
        return (
            <div className="profile-modal">
                <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
                    <main className="pa4 black-80">
                        <img  
                        src="http://tachyons.io/img/logo.jpg"
                        className="br-100 ba h3 w3 dib" alt="avatar"
                        />
                        <h1>John Doe</h1>
                        <h4>Images Submitted: 5</h4>
                        <p>Member since: January</p>
                        <hr />
                        <label className="mt2 fw6" htmlFor="user-name">Name: </label>
                        <input 
                        onChange={this.onFormChange}
                        className="pa2 ba w-100" 
                        type="text" 
                        name="user-name"  
                        id="name" 
                        />
                        <label className="mt2 fw6" htmlFor="user-age">Age: </label>
                        <input 
                        onChange={this.onFormChange}
                        className="pa2 ba w-100" 
                        type="text" 
                        name="user-age"  
                        id="age" 
                        />   
                        <label className="mt2 fw6" htmlFor="user-pet">Pet: </label>
                        <input 
                        onChange={this.onFormChange}
                        className="pa2 ba w-100" 
                        type="text" 
                        name="user-pet"  
                        id="pet" 
                        />
                        <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <button className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">Save</button>
                            <button className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
                            onClick={this.props.toggleModal}>Cancel</button>
                        </div>
                </main>
                <div className="modal-close" onClick={this.props.toggleModal}>&times;</div>
            </article>
        </div>
        )
    }
}

export default Profile;