import React from 'react'
import {Link} from 'react-router-dom';
const  UserItem = ({user : {id , login , avatar_url , html_url}}) => {
        return (
            <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card mb-3 text-center mt-4 border-0 shadow-sm">
                    <div className="card-header border-0">{id}</div>
                    <div className="card-body">
                    <img src={avatar_url}  style={{height:'60px'}} className='rounded-circle' alt='user'/>
                        <h4 className="card-title mt-3">{login}</h4>
                    </div>
                    <div className="card-footer border-0">
                        <Link className="btn btn-success" to={`/user/${login}`}>View The Profile</Link>
                    </div>
            </div>
            </div>
        )
    
}

export default UserItem;
