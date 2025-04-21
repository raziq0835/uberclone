import React from 'react'
export const userDataContext = React.createContext({});



const UserContext = ({children}) => {
    
    const [userData, setUserData] = React.useState({
      fullName:{
        firstName:'',
        lastName:''
      },
      email:''
    });

  return (
    <div>
        <userDataContext.Provider value={[userData, setUserData]}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
