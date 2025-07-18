"use client";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  if (session){
    return(
      <>
     <h2>name{session.user.name}</h2>
      <h2>email{session.user.email}</h2>
      <h2>image{session.user.image}</h2>
      <button onClick={()=>signOut()}>sign out</button>
      </>
    )
  }
  return(
      <>
      <h2>sign IN page</h2>
      <button onClick={()=>signIn()}>logIn</button>
      </>
    )
}
