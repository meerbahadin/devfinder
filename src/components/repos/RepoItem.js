import React from 'react'

const RepoItem = ({repo}) => {
    return (
        <div className="card mt-2">
           <div className="card-body">
           <a href={repo.html_url}><strong>{repo.name}</strong></a>
           </div>
        </div>
    )
} 

export default RepoItem;