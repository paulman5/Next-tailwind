import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/Homepagestyling/modalform.css"
import "../styles/Homepagestyling/mainboard.css"
import "../styles/Sidebarstyling/sidenav.css"
import "../styles/globals.css"
import Sidenav from "../components/Sidebar/Sidenav"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex w-full h-full ">
      <Sidenav />
      <main className="bg-gray-200 h-full w-full absolute!important">
      </main>
    </div>
  );
}

