import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_container/test')({
  component: RouteComponent,
})

function RouteComponent () {
  return <>test</>
}
