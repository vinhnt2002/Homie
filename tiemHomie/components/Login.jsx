import { useSession, signIn, signOut } from "next-auth/react"
import { removeUser } from "@/redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Login() {
  const { data: session } = useSession()

  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.cart);


  const handleSignOut=() => {
    signOut();
    dispatch(removeUser());
  };
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        <button onClick={handleSignOut}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}