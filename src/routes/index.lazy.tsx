import { createLazyFileRoute } from '@tanstack/react-router'
import Home from '../pages'

export const Route = createLazyFileRoute('/')({
  component: () => <div className='container py-10'><Home /></div>
})