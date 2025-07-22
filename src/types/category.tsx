export const Category: {
  name: string
  Component: React.ComponentType
  key: string
}[] = [
  {
    name: '이체',
    Component: () => (
      <span className='text-lg'>💸</span>
    ),
    key: 'TRANSFER'
  },
  {
    name: '교육',
    Component: () => (
      <span className='text-lg'>✏️</span>
    ),
    key: 'EDUCATION'
  },
  {
    name: '미용',
    Component: () => (
      <span className='text-lg'>💄</span>
    ),
    key: 'BEAUTY'
  },
  {
    name: '취미',
    Component: () => (
      <span className='text-lg'>👍</span>
    ),
    key: 'HOBBY'
  },
  {
    name: '교통',
    Component: () => (
      <span className='text-lg'>🚌</span>
    ),
    key: 'TRANSPORT'
  },
  {
    name: '주거',
    Component: () => (
      <span className='text-lg'>🏠</span>
    ),
    key: 'HOUSING'
  },
  {
    name: '통신',
    Component: () => (
      <span className='text-lg'>☎️</span>
    ),
    key: 'COMMUNICATION'
  },
  {
    name: '음식',
    Component: () => (
      <span className='text-lg'>🍴</span>
    ),
    key: 'FOOD'
  },
  {
    name: '기타',
    Component: () => (
      <span className='text-lg'>💡</span>
    ),
    key: 'ETC'
  },
]
