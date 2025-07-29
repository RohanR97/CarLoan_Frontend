import React from 'react'

function Profile() {
  const userJson = localStorage.getItem("employee");
  const{username} = JSON.parse(userJson);
  const{userType}= JSON.parse(userJson);
  return (
    <div>
      <h3>Profile:{userType}</h3>
      <h3>Welcome: {username}</h3>
    </div>
  )
}

export default Profile
