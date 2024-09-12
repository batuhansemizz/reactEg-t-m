import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllUsers } from './redux/userSlice';

function UserList() {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
  return (
    <div>
{
    users && users.map((user) => (
        <User key={user.id} user={user} />
    ))
}

    </div>
  )
}

