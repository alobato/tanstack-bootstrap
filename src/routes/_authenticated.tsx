import { useEffect, useState } from 'react'
import { createFileRoute, useRouter, Outlet } from '@tanstack/react-router'
import { useAuth } from '@/context/auth-context'

export const Route = createFileRoute('/_authenticated')({
  component: Authenticated
})

function Authenticated() {
  const router = useRouter()
  const auth = useAuth()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    console.log("auth?.isAuthenticated", auth?.isAuthenticated);
    if (!auth?.isAuthenticated) {
      router.navigate({
        to: '/sign-in',
        search: { redirect: window.location.pathname },
      })
    } else {
      setIsChecking(false)
    }
  }, [auth, router])

  if (isChecking) {
    return <div>Carregando...</div>
  }

  return <Outlet />
}
