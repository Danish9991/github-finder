import React, {useEffect, useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/GihubContext'

const UserResult = () => {
    const {users, loading} = useContext(GithubContext)

    useEffect(() => {
        // getUsers()
    }, [])
   console.log(users);
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) =>(
                        <UserItem key={user.id} user={user} />
                ))}
            </div>
          )
    } else {
        return <Spinner />
    }

}

export default UserResult