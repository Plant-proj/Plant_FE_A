import React from 'react'
import { Report } from '@/components/routes/report/report'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createFileRoute } from '@tanstack/react-router'
import { Predict } from '@/components/routes/report/predict'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/_container/report')({
  component: RouteComponent,
})

function RouteComponent () {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
  return (
    <>
      <p className='text-4xl font-semibold mt-12'>연/월별 리포트</p>
      <Tabs defaultValue='report'>
        <TabsList>
          <TabsTrigger value='report'>리포트</TabsTrigger>
          <TabsTrigger value='prediction'>예측</TabsTrigger>
        </TabsList>
        <div className='flex items-center gap-4 my-2'>
          {(() => {
            const now = new Date()
            const currentYear = now.getFullYear()
            const currentMonth = now.getMonth() + 1
            const startYear = currentYear - 5 // should be dynamic based on data availability
            const years = Array.from(
              { length: currentYear - startYear + 1 },
              (_, i) => startYear + i
            )
            const months = Array.from({ length: 12 }, (_, i) => i + 1)
            const selectedYear = selectedDate.getFullYear()
            const selectedMonth = selectedDate.getMonth() + 1

            return (
              <>
                <div className='grid'>
                  <ChevronDown className='pointer-events-none relative right-1 col-start-1 row-start-1 justify-self-end' />
                  <select
                    value={selectedYear}
                    onChange={(e) => {
                      const year = Number(e.target.value)
                      const month = Math.min(selectedMonth, year === currentYear ? currentMonth : 12)
                      setSelectedDate(new Date(year, month - 1, 1))
                    }}
                    className='appearance-none col-start-1 row-start-1 w-20'
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}년
                      </option>
                    ))}
                  </select>
                </div>

                <div className='grid'>
                  <ChevronDown className='pointer-events-none relative right-1 col-start-1 row-start-1 justify-self-end' />
                  <select
                    value={selectedMonth}
                    onChange={(e) => {
                      const month = Number(e.target.value)
                      setSelectedDate(new Date(selectedYear, month - 1, 1))
                    }}
                    className='appearance-none col-start-1 row-start-1 w-16'
                  >
                    {months.map((m) => (
                      <option
                        key={m}
                        value={m}
                        disabled={selectedYear === now.getFullYear() && m > currentMonth}
                      >
                        {m}월
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )
          })()}
        </div>
        <TabsContent value='report'>
          <Report />
        </TabsContent>
        <TabsContent value='prediction'>
          <Predict />
        </TabsContent>
      </Tabs>
    </>
  )
}
