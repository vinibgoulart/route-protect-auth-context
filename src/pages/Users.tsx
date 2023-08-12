import { json } from "react-router-dom";
import { api } from "../lib/api";
import { createContext, useContext, useEffect, useState } from "react";
import { UserType } from "../@types/userType";

export const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  

  const GetUsers = async () => {
    try {
      
      const res = await api.get<{}>("/users2");
      //  const userslist: string[] = res.data.data;
       //let userslist: Array<UserType> = (res["data"]);

console.log(res)
      // console.log(JSON.stringify(res.data))
    
      //console.log(userslist);
   //  setUsers(prevNames => [...userslist]);
// console.log("users = "+ users)
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
  