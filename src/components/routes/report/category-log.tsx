export function CategoryLog ({
  name,
  percent,
  money
}: {
  name: string
  percent: number
  money: number
}) {
  return (
    <div className='flex flex-row items-center justify-between p-4'>
      <div className='flex flex-col'>
        <span className='font-semibold'>{name}</span>
        <span className='text-[0.675rem]'>{percent.toFixed(2)}%</span>
      </div>
      <span className='font-semibold'>{money.toLocaleString()}원</span>
    </div>
  )
}
