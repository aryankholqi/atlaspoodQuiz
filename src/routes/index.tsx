import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages'
import { authorizedBeforeLoad } from '../configs/beforeLoad'

export const Route = createFileRoute('/')({
  ...authorizedBeforeLoad,
  component: () => <div className='container py-10'><Home /></div>
})