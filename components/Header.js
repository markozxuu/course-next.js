// Packages
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Header () {
  const [session] = useSession()
  const handleLogin = (event) => {
    event.preventDefault();
    signIn('github')

  }
  const handleLogout = (event) => {
    event.preventDefault();
    signOut()
  }
  return (
    <div className='header'>
      <Link href='/'>
        <a className='title'>My Blog</a>
      </Link>
      {session ? (
         <>
         <img src={session.user.github.avatar} className="user-info"/>
         <a href="#" onClick={handleLogout} className="logout">Logout</a>
       </>
      ) : (
        <a href="#" onClick={handleLogin} className="logout">Login</a>
      )}
    </div>
  )
}
