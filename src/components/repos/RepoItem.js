import React from 'react'

const RepoItem = ({repo}) => {
    return (
        <div className="card mt-2">
           <div className="card-body">
           <a href={repo.html_url}>{repo.name}</a>
           </div>
        </div>
    )
} 

export default RepoItem;