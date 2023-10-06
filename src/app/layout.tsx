import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar' 
import RegisterModal from './components/modals/RegisterModal'
import { Toaster } from 'react-hot-toast'
import LoginModal from './components/modals/LoginModel'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
