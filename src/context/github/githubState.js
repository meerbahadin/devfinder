import React, { useReducer, useContext } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  EMPTY_USERS,
} from "../Types";

let githubClientId;
let githubClientSeceret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_ID;
  githubClientSeceret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_ID;
  githubClientSeceret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    empty: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search for users from the api
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
        &client_seceret=${githubClientSeceret}`);

    if (res.data.items.length > 0) {
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items,
      });

    } else {
      dispatch({
        type: EMPTY_USERS,
      });
    }
  };

  //loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  //clear users
  const cls = () => dispatch({ type: CLEAR_USERS });

  //get single user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}
        &client_seceret=${githubClientSeceret}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}
        &client_seceret=${githubClientSeceret}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        empty: state.empty,
        searchUsers,
        cls,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
