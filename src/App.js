import React , {Component, Fragment} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    users : [],
    user: {},
    repos : [],
    loading:false,
    alert: null
  }
  
  // if you want to load all user by default
  // async componentDidMount() {
  //   this.setState({loading : true});

  //   axios.get('https://api.github.com/users').then(res => {
  //     console.log(res.data);
  //   })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}
  //   &client_seceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users : res.data , loading : false});

  // }

  //Search Github Users
  searchUsers = async (text) => {
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}
    &client_seceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data.items , loading : false});
  }



  getUserRepos = async (username) => {
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}
    &client_seceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos : res.data , loading : false});
  }



  getUser = async (username) => {
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}
    &client_seceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user : res.data , loading : false});
  }


  //clear users
  cls = () => this.setState({users :[] , loading:false});

  //alert
  setAlert = (msg , type) => {
    this.setState({alert : {msg , type}});

    setTimeout(() => {
      this.setState({alert : null})
    }, 5000);
  }

  render() {
    const { users , user , loading , repos} = this.state;
    return (
      <Router>
      <div className="App">
          <Navbar title='Github Finder'/>
          <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
              <Search searchUsers={this.searchUsers} cls={this.cls} show={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}/>
              <Users loading={loading} users={users} />
              </Fragment>
            )}/>
              <Route exact path='/about' component={ About }/>
              <Route exact path='/user/:login' render={ props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading}  getUserRepos={this.getUserRepos} repos={repos}/>
              )}/>
          </Switch>
          </div>
        </div>
        </Router>
    )
  }
}

export default App;
