import React, { Fragment,Component } from 'react';
import Spinner from '../Spinner';
import {Link} from 'react-router-dom';
import { FiCheckSquare , FiXSquare } from "react-icons/fi";

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            name ,
            avatar_url ,
            url , 
            location ,
            bio , 
            blog , 
            login , 
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

        if(loading) return (
          <div className='row justify-content-center'>
                <Spinner/>
            </div>
        )
        return (
            <Fragment>
               <Link className="btn btn-light mr-2" to='/'>Back</Link>
               <a  className="btn btn-light">
               Hireable {' '}: 
               {hireable ? <FiCheckSquare className='text-success'/> : <FiXSquare className='text-danger'/>}
               </a>
               <div className="card text-center mt-4">
                    <div className="card-body">
                    <img src={avatar_url} alt="" width="150px" className="rounded-circle mb-2"/>
                        <h3 className="card-title font-weight-bold">{name}</h3>
                        {location && (
                            <p>Location : {location}</p>
                        )}
                        {bio && (
                            <p>{bio}</p>
                        )}
                        <a href={html_url} target='_blank' className="btn btn-primary">Github Profile</a>
                    </div>
                    </div>
            </Fragment>
        )
    }
}

export default User
