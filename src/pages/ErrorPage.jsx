import React from "react";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div> 
      <h1> Qualcosa è andato storto... </h1>
      <p> Siamo spiacenti </p>
      <p>
        <b>Messaggio di errore: </b>
        { error.message }
      </p> 
    </div>
  )
}