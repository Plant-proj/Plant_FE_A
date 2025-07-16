import { Separator } from '@/components/ui/separator'

export function MoneyLog ({
  name,
  money,
  isExpenses = false,
  category,
  date,
}: {
  name: string
  money: number
  isExpenses?: boolean
  category: string
  date: Date
}) {
  return (
    <>
      <div className='flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row gap-2'>
          <span className='font-semibold'>
            {isExpenses ? '-' : '+'}
          </span>
          <div className='flex flex-col'>
            <span className='font-semibold'>
              {money.toLocaleString()}원
            </span>
            <span className='text-[0.675rem]'>
              {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold'>
            {name}
          </span>
          <span className='text-[0.675rem]'>
            {category}
          </span>
        </div>
      </div>
      <Separator />
    </>
  )
}
