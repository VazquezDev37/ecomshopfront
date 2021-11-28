import React, { children } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecoded from "jwt-decode";

export default function Auth(props) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    let username;
    const tokenFromStorage = localStorage.getItem("token");
    try {
      username = jwtDecoded(tokenFromStorage).username;
      console.log(username);
      setUsername(username);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (username) {
      navigate.push("/Home");
    } else {
      navigate.push("/Login");
    }
  }, [username]);
  return <div>{props.children}</div>;
}