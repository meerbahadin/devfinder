import React from 'react'
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types'

const Users = ({users , loading}) => {
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

Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}

export default Users;
