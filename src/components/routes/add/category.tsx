import React from 'react'

export function Category ({
  className,
  name,
  onClick,
  selected = false,
  children,
  ...props
}: React.ComponentProps<'button'> & {
  name: string;
  selected?: boolean;
}) {
  return (
    <div className='flex flex-col gap-1 items-center'>
      <button
        className={`flex items-center justify-center size-16 rounded-md transition-colors border-2 ${selected ? 'border-primary' : 'border-border hover:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      <p className='text-sm'>{name}</p>
    </div>
  )
}
