import React from 'react'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { getMonthString, getWeekString } from '@/utils/date'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MoneyLog } from '@/components/routes/list/money-log'

export const Route = createFileRoute('/_container/list')({
  component: RouteComponent,
})

function RouteComponent () {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [selectedMonth, setSelectedMonth] = React.useState(new Date())
  return (
    <>
      <p className='text-sm pt-12'>총 잔액</p>
      <div className='flex justify-between flex-row'>
        <p className='text-4xl font-semibold'>12,345원</p>
        <div className='flex items-center gap-4'>
          <Button variant='secondary' size='icon' onClick={() => setSelectedMonth(new Date(new Date(selectedMonth).setMonth(selectedMonth.getMonth() - 1)))}>
            <ChevronLeft />
          </Button>
          <Button variant='secondary' size='icon' onClick={() => setSelectedMonth(new Date(new Date(selectedMonth).setMonth(selectedMonth.getMonth() + 1)))}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Calendar
        required
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}
        month={selectedMonth}
        onMonthChange={setSelectedMonth}
        className='w-full p-0'
        hideCaptionLabel
        hideNavigation
      />
      <div className='flex flex-col my-8 ml-4'>
        <div className='flex flex-row'>
          <span className='text-lg font-semibold'>{getWeekString(selectedDate)},&nbsp;</span>
          <span className='text-lg'>{getMonthString(selectedDate)}&nbsp;</span>
          <span className='text-lg font-light'>{selectedDate.getDate()}</span>
        </div>
        <p className='text-lg font-medium'>총 35,000원 소비했어요.</p>
      </div>
      <Tabs defaultValue='expenses'>
        <TabsList>
          <TabsTrigger value='income'>수입</TabsTrigger>
          <TabsTrigger value='expenses'>지출</TabsTrigger>
          <TabsTrigger value='all'>전체</TabsTrigger>
        </TabsList>
        <TabsContent value='income' />
        <TabsContent value='expenses'>
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
          <MoneyLog name='게임기' category='게임' isExpenses money={10000} date={new Date()} />
        </TabsContent>
        <TabsContent value='all' />
      </Tabs>
    </>
  )
}
