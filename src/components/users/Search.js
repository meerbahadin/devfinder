import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please Enter Something' , 'warning');
        } else {
           githubContext.searchUsers(text);
            setText('');
        }
       
    }
        return (
            <div className="text-center">
                <form action="" onSubmit={handleSubmit} className="mb-2 mt-4">
                    <input className="form-control form-control-md mb-2 p-4" 
                    type="text" 
                    name='text'
                    placeholder="Type The Name" 
                    value={text}
                    onChange={handleChange}  
                    />
                    <button type="submit" className="btn btn-default btn-block">Search</button>
                </form>
                {githubContext.users.length > 0 &&   <button className='btn btn-outline-secondary btn-block'
                 onClick={githubContext.cls}>
                Clear
                </button>}
            </div>
        )
}

export default Search;
