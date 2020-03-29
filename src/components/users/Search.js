import React, { Component } from 'react'

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
            <div>
                <form action="" onSubmit={this.handleSubmit} className="mb-2">
                <input className="form-control form-control-md mb-2" 
                type="text" 
                name='text'
                placeholder="Type The Name" 
                value={this.state.text}
                onChange={this.handleChange}  
                 />
                <button type="submit" className="btn btn-primary btn-block">Search</button>
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
