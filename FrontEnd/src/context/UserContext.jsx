import React from 'react'




const UserContext = ({children}) => {
    const userDataContext = React.createContext({});
    const [userData, setUserData] = React.useState({name: 'Raziq', email: 'raziq0835@gmail.com'});

  return (
    <div>
        <userDataContext.Provider value={userData}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
