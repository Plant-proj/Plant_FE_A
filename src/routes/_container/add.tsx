import { Category } from '@/components/routes/add/category'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { Category as CategoryMetadata } from '@/types/category'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { LucideCalendar } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'

const addFormSchema = z.object({
  where: z.string().min(1, {
    error: '사용처를 입력해주세요.'
  }),
  category: z.enum(CategoryMetadata.map(cat => cat.key), {
    error: '카테고리를 선택해주세요.'
  }),
  money: z.number('유효한 숫자가 아니에요.').min(1, {
    error: '금액을 입력해주세요.'
  }),
  date: z.date().refine(date => date <= new Date(), {
    message: '미래의 날짜는 선택할 수 없어요.'
  }),
  memo: z.string().optional(),
})

export const Route = createFileRoute('/_container/add')({
  component: RouteComponent,
})

function RouteComponent () {
  const form = useForm({
    resolver: zodResolver(addFormSchema),
    defaultValues: {
      where: '',
      date: new Date(),
      memo: '',
    }
  })

  const onSubmit = (data: z.infer<typeof addFormSchema>) => {
    console.log('Form submitted:', data)
    // Handle form submission logic here
  }

  return (
    <>
      <p className='text-4xl font-semibold mt-12'>수입/지출 입력</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-12'>
          <FormField
            control={form.control}
            name='where'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='어디에 사용했나요?'
                    className='mt-4'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>카테고리</FormLabel>
                <FormControl>
                  <ScrollArea className='w-full mt-2'>
                    <div className='flex w-max space-x-4 p-2'>
                      {CategoryMetadata.map((cat) => (
                        <Category
                          key={cat.key}
                          name={cat.name}
                          onClick={(e) => {
                            e.preventDefault()
                            field.onChange(cat.key)
                          }}
                          selected={field.value === cat.key}
                        >
                          <cat.Component />
                        </Category>
                      ))}
                    </div>
                    <ScrollBar orientation='horizontal' />
                  </ScrollArea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='money'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoComplete='off'
                    pattern='(?:[0-9]\d*)'
                    placeholder='금액을 입력해주세요'
                    className='mt-4'
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/[^0-9]/g, '')
                        .replace(/^0$/, '')
                      field.onChange(value ? parseInt(value) : null)
                      e.target.value = value
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant='ghost' className='w-fit'>
                        <LucideCalendar />
                        <span className='ml-2 text-sm'>
                          {field.value ? `${field.value.getFullYear()}. ${field.value.getMonth() + 1}. ${field.value.getDate()}` : '날짜를 선택해주세요'}
                        </span>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                        // eslint-disable-next-line react/jsx-handler-names
                      onSelect={field.onChange}
                      disabled={(date => date > new Date())}
                      captionLayout='dropdown'
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='memo'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='메모를 입력해주세요'
                    className='resize-none min-h-24'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full'>
            입력
          </Button>
        </form>
      </Form>
    </>
  )
}
