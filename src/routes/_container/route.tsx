import { Container } from '@/components/ui/container'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_container')({
  component: RouteComponent,
})

function RouteComponent () {
  return <Container><Outlet /></Container>
}
