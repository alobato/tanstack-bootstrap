import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useAuth } from '@/context/auth-context'

export const Route = createFileRoute('/_authenticated/protected')({
  component: RouteComponent,
})

function RouteComponent() {
  const auth = useAuth()

  return (
    <div>
      <button onClick={() => {
        auth.logout()
      }}>Logout</button>
      <h1>Protected Route</h1>
      <Outlet />
    </div>
  )
}
