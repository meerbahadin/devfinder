import React, { Component } from 'react'
import pic from './Searching.png'

class Search extends Component {
    state = {
        text : ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please Enter Something' , 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text : ''}) 
        }
       
    }
    render() {
        return (
            <div className="text-center">
            <img src={pic} alt="" srcset="" width="500px"/>
                <form action="" onSubmit={this.handleSubmit} className="mb-2 mt-4">
                <input className="form-control form-control-md mb-2 p-4 border-0 bg-light" 
                type="text" 
                name='text'
                placeholder="Type The Name" 
                value={this.state.text}
                onChange={this.handleChange}  
                 />
                <button type="submit" className="btn btn-warning btn-block">Search</button>
                </form>
                {this.props.show &&   <button className='btn btn-light btn-block'
                 onClick={this.props.cls}>
                Clear
                </button>}
            </div>
        )
    }
}

export default Search;
