import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users , loading } = githubContext;
    if (loading) {
        return (
          <div className='row justify-content-center'>
                <Spinner/>
            </div>
        )
    } else {
        return (
            <div className="row">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users;
