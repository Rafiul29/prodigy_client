import React from 'react'
import { useDeleteUserAccountMutation, useGetUsersProfileQuery } from '../../features/users/usersApi'
import { Link, useNavigate } from 'react-router-dom';
import { userLoggedOut } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const {data:user,isError}=useGetUsersProfileQuery();
  const navigate=useNavigate();
  const [deleteUserAccount,{isLoading}]=useDeleteUserAccountMutation()

  const dispatch=useDispatch();
 const handleDelete=()=>{

  deleteUserAccount();
    // store clear
  dispatch(
    userLoggedOut({
      token: undefined,
      user: undefined,
    })

  );
  // delete local storage
  localStorage.removeItem("auth");
  navigate("/");
  }

  return (
    <div className='flex flex-col gap-6'>
      <h1>{user?.fullName}</h1>
    <h2>{user?.email}</h2>
    <h3>{user?.phoneNumber}</h3>
    <h4>{user?.address}</h4>
    <h5>{user?.role}</h5>
    <button onClick={handleDelete} className='bg-red-400 x-4 py-2 cursor-pointer'>delete Account</button>
    <Link to="/update-profile"  className='bg-red-400 x-4 py-2 cursor-pointer'>update Account</Link>
    </div>
  )
}

export default Profile