import { json } from "react-router-dom";
import { api } from "../lib/api";
import { createContext, useContext, useEffect, useState } from "react";


export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  

  const GetUsers = async () => {
    try {
      
      const res = await api.post<{}>("/users3");
      //  const userslist: string[] = res.data.data;
       let userslist: Array<string> = [JSON.stringify(res.data)];


// console.log(JSON.stringify(res.data))
    
     // console.log(userslist);
     setUsers(prevNames => [...userslist]);
console.log("users = "+ users)
      //localStorage.setItem("@Auth:access_token", res.data.token);
      
    } catch (err) {
      console.error(err);
    }
  };

  function handleGetLIst(){
  GetUsers();
  }

    return (
      <div>
        <button onClick={handleGetLIst} >get list</button>
        <h1>Users List page</h1>
      </div>
    );
  };
  