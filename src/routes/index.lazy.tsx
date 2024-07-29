import { createLazyFileRoute } from '@tanstack/react-router'
import Home from '../pages'

export const Route = createLazyFileRoute('/')({
  component: () => <div className='container'><Home /></div>
})