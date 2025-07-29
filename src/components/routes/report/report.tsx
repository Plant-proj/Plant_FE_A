import React from 'react'
import { Area, AreaChart, CartesianGrid, Pie, PieChart, LabelList } from 'recharts'

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Category } from '@/types/category'
import { CategoryLog } from './category-log'
import { Separator } from '@/components/ui/separator'

const pieChartData = [
  { id: 'TRANSFER', value: 10000, fill: 'var(--secondary)' },
  { id: 'TRANSPORT', value: 10000, fill: 'var(--secondary)' },
  { id: 'HOBBY', value: 300000, fill: 'var(--secondary)' },
  { id: 'ETC', value: 200000, fill: 'var(--secondary)' },
]

const pieChartConfig = Category.reduce<Record<string, { label: string }>>((acc, cat) => {
  acc[cat.key] = {
    label: cat.name
  }
  return acc
}, {}) satisfies ChartConfig

const areaChartData = [
  {
    current: 10000,
    previous: 8000,
  },
  {
    current: 12000,
    previous: 9000,
  },
  {
    current: 15000,
    previous: 11000,
  },
  {
    current: 13000,
    previous: 9500,
  },
  {
    current: 16000,
    previous: 12000,
  },
  {
    current: 18000,
    previous: 14000,
  },
  {
    current: 20000,
    previous: 16000,
  },
]

const areaChartConfig = {
  current: {
    label: '현재 사용량',
    color: 'var(--primary)'
  },
  previous: {
    label: '이전 사용량',
    color: 'var(--foreground)'
  }
} satisfies ChartConfig

export function Report () {
  const sortedPieChartData = pieChartData.sort((a, b) => b.value - a.value)
  sortedPieChartData[0].fill = 'var(--primary)'
  const allAdded = sortedPieChartData.reduce((acc, cur) => acc + cur.value, 0)
  return (
    <>
      <ChartContainer config={areaChartConfig}>
        <AreaChart
          accessibilityLayer
          data={areaChartData}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
          <Area
            dataKey='current'
            type='natural'
            fill='transparent'
            stroke='var(--color-current)'
            stackId='a'
          />
          <Area
            dataKey='previous'
            type='natural'
            fill='transparent'
            stroke='var(--color-previous)'
            stackId='a'
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
      <ChartContainer config={pieChartConfig}>
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Pie
            data={sortedPieChartData}
            dataKey='value'
            nameKey='id'
            innerRadius={60}
          >
            <LabelList dataKey='id' className='fill-foreground m-16' stroke='none' fontSize={12} formatter={(value: keyof typeof pieChartConfig) => pieChartConfig[value]?.label} />
          </Pie>
        </PieChart>
      </ChartContainer>
      {sortedPieChartData.map((data) => (
        <React.Fragment key={data.id}>
          <CategoryLog key={data.id} name={Category.find((cat) => cat.key === data.id)!.name} percent={(data.value / allAdded) * 100} money={data.value} />
          <Separator />
        </React.Fragment>
      ))}
    </>
  )
}
