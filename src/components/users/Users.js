import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../Spinner';
import Empty from '../users/Empty';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users , loading , empty } = githubContext;
    if(users.length === 0 && empty === true) {
        return (
            <Empty/>
          )
    }
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
