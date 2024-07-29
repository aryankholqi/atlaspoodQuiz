import { createFileRoute } from '@tanstack/react-router'
import { unAuthorizedBeforeLoad } from '../configs/beforeLoad'
import Login from '../pages/login'
export const Route = createFileRoute('/login')({
    ...unAuthorizedBeforeLoad,
    component: () => <Login />
})