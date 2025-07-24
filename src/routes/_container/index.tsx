import { KakaoIcon } from '@/components/icons/kakao'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_container/')({
  component: RouteComponent,
})

function RouteComponent () {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>로그인</h1>
      <img src='/logo.svg' alt='Plant Logo' className='p-4' />
      <p>간편하게 로그인하고</p>
      <p>다양한 서비스를 이용해보세요.</p>
      <Button className='bg-[#FEE500] text-black font-light text-lg hover:bg-[#E5CE00] w-full h-12 flex mt-4'><KakaoIcon className='size-4 mr-2' /><p className='flex-1'>카카오 로그인</p></Button>
    </div>
  )
}
