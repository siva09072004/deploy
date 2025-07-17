"use client";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  if (session){
    return(
      <>
      <h2>sign out the page</h2>
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
