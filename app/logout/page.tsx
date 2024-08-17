import { signOut } from 'next-auth/react'

export default async function LogoutPage() {
  await signOut({ callbackUrl: '/' })
  return null
}