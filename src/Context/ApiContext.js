import axios from "axios"
import React, { Provider, createContext, useState, useEffect } from "react"

export const DataContext = createContext();




function ApiCallComponent() {

    const [userName, setUserName] = useState("growinflow");
    const [userInfo, setUserInfo] = useState([]);
    const [requestN, setRequestN] = useState(10);

    const [followers, setFollowers] = useState([])
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    const UserLink = `https://github.com/users/${userName}`
    const UserData = `https://api.github.com/users/${userName}`
    const UserFollowers = `https://api.github.com/users/${userName}/followers`
    const UserSubscriptions = `https://api.github.com/users/${userName}/repos`



    const fetchApi = async (url, data, setData) => {
        setIsLoading(true)
        try {
            const res = await axios.get(url);
            data = res.data;
            console.log(data)
            setData(data)
            setIsLoading(false)

        } catch (error) {
            console.error(error)
            setIsError(error)
            setIsLoading(false)

        }

    }


    useEffect(()=>{

        fetchApi(UserData, userInfo, setUserInfo)
        fetchApi(UserFollowers, followers, setFollowers)
        fetchApi(UserSubscriptions,repos, setRepos)
        
    }, [userName])

    return{
        userName, setUserName,
        userInfo,
        isLoading,
        isError,
        requestN, setRequestN,
        repos,
        followers,

    }
    
}




export const DataProvider = ({ children }) => {
    const data = ApiCallComponent();
    return (
        <DataContext.Provider value={{ ...data }}>
            {children}
        </DataContext.Provider>
    )
}