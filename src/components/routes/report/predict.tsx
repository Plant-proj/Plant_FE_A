import React from 'react'
import { CartesianGrid, LabelList, Line, LineChart } from 'recharts'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { CategoryLog } from './category-log'
import { Category } from '@/types/category'
import { Separator } from '@/components/ui/separator'

const categoryData = [
  { id: 'TRANSFER', value: 10000 },
  { id: 'TRANSPORT', value: 10000 },
  { id: 'HOBBY', value: 300000 },
  { id: 'ETC', value: 200000 },
]

const chartData = [
  { year: 2019, expense: 12000 },
  { year: 2020, expense: 10000 },
  { year: 2021, expense: 20000 },
  { year: 2022, expense: 14000 },
  { year: 2023, expense: 15000 },
  { year: 2024, expense: 14000 },
  { year: 2025, expense: 15000 },
]

const chartConfig = {
  expense: {
    label: '연간 지출',
    color: 'var(--primary)',
  }
} satisfies ChartConfig

export function Predict () {
  const sortedCategoryData = categoryData.sort((a, b) => b.value - a.value)
  const allAdded = sortedCategoryData.reduce((acc, cur) => acc + cur.value, 0)
  return (
    <>
      <p className='text-xl font-semibold'>평균 연/월/주일 지출 금액</p>
      <p className='text-3xl font-bold'>₩40,000</p>
      <ChartContainer config={chartConfig}>
        <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
          <CartesianGrid vertical={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line
            type='linear'
            dataKey='expense'
            stroke='var(--color-expense)'
            strokeWidth={2}
            dot={false}
          >
            <LabelList
              dataKey='year'
              position='top'
              fill='var(--foreground)'
            />
          </Line>
        </LineChart>
      </ChartContainer>
      <p className='text-xl font-semibold'>줄이면 좋은 것</p>
      {sortedCategoryData.map((category) => (
        <React.Fragment key={category.id}>
          <CategoryLog
            name={Category.find((cat) => cat.key === category.id)!.name}
            percent={(category.value / allAdded) * 100}
            money={category.value}
          />
          <Separator />
        </React.Fragment>
      ))}
    </>
  )
}
