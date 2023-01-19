import Link from "next/link"
import Image from "next/image"
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
    <div> 
      <Image src="/logo.png" width={40} height={40} alt = "mrklogo"className="mx-auto"/>
    <Link href="/">
    <h1 className="text-2xl text-white font-bold mt-4">MRKCodes</h1>
    </Link>
    <p className="text-slate-300">Welcome to mrkCodes tech blog!</p>

    </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <br/>
        <h3>Developed by Mrk</h3>
      </div>
    </footer>
  )
{
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head/>
      <body>
        <div className="mx-auto max-w-2xl px-6">
        {header}
        {children}
        {footer}
        </div>
        </body>
        
    </html>
  )
}
}