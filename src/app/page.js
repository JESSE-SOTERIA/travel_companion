import Image from 'next/image'
import NavBar from './navbar'
import LoginPage from './login-page';
import Category from './category';

export default function Home() {
  const isLoggedIn = true;
  return (
    <main class = "bg-sky-50 h-screen">
      {isLoggedIn ? <NavBar></NavBar> : <LoginPage></LoginPage> }
      <Category></Category>
    </main>
  )
}
