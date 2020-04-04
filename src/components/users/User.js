import React, { Fragment,Component } from 'react';
import Repos from '../repos/Repos';
import Spinner from '../Spinner';
import {Link} from 'react-router-dom';
import { FiCheckSquare , FiXSquare } from "react-icons/fi";

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);

    }

    render() {
        const {
            name ,
            avatar_url ,
            url , 
            location ,
            bio , 
            company,
            blog , 
            login , 
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading , repos } = this.props;

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
               <div className="card text-center mt-4 bg-light border-0">
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
                        <ul className="list-group mt-3">
                            <li className="list-group-item border-0">
                                {login && <Fragment>
                                    <strong>Username : </strong> {login}
                                </Fragment>}
                            </li>
                            <li className="list-group-item border-0">
                                {company && <Fragment>
                                    <strong>Company : </strong> {company}
                                </Fragment>}
                            </li>
                            <li className="list-group-item border-0">
                                {blog && <Fragment>
                                    <strong>Website : </strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div class="card text-center mt-3 bg-light border-0">
                        <div class="card-body">
                            <div className="badge badge-primary p-2">
                                Followers : {followers}
                            </div>
                            <div className="badge badge-success p-2 ml-1">
                                Following : {following}
                            </div>
                            <div className="badge badge-warning p-2 ml-1">
                                Repos : {public_repos}
                            </div>
                            <div className="badge badge-dark p-2 ml-1">
                                Gists : {public_gists}
                            </div>
                            
                        </div>
                    </div>

                    <Repos repos={repos}/>
            </Fragment>
        )
    }
}

export default User
