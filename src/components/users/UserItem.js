import React from 'react'
import {Link} from 'react-router-dom';
const  UserItem = ({user : {id , login , avatar_url , html_url}}) => {
        return (
            <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card border-secondary mb-3 text-center mt-4">
                    <div className="card-header">{id}</div>
                    <div className="card-body">
                    <img src={avatar_url}  style={{height:'60px'}} className='rounded-circle' alt='user'/>
                        <h4 className="card-title mt-3">{login}</h4>
                    </div>
                    <div className="card-footer">
                        <Link className="btn btn-success" to={`/user/${login}`}>More</Link>
                    </div>
            </div>
            </div>
        )
    
}

export default UserItem;
