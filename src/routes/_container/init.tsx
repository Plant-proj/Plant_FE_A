import { createFileRoute } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_container/init')({
  component: RouteComponent,
})

function RouteComponent () {
  return (
    <div className='grid-rows-2'>
      <div className='flex flex-col items-center justify-end h-[50vh]'>
        <p className='text-8xl font-semibold mt-12 text-center'>💵</p>
        <h1 className='mt-6 text-3xl font-semibold text-center'>
          현재 계좌의
          <br />
          잔액을 입력해주세요
        </h1>
        <div className='w-full max-w-md mt-8'>
          <Input placeholder='사용하는 계좌의 잔액을 입력해주세요' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-end h-[50vh]'>
        <div className='w-full max-w-md my-6'>
          <Button className='w-full'>입력</Button>
        </div>
      </div>
    </div>
  )
}
