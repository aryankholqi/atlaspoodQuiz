import { SubmitHandler, useForm } from "react-hook-form"
import { loginProps } from "../../../interfaces/login.interface"
import { Button } from "antd";
import { useLoginMutation } from "../../../hooks/api/useAuthApi";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginProps>({
        defaultValues: {
            username: "mor_2314",
            password: "83r5^_"
        }
    })

    const { mutate, isPending } = useLoginMutation()

    const loginUser: SubmitHandler<loginProps> = (data) => {
        mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(loginUser)} className="bg-gray-300 w-[90%] 2xs:w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-lg p-4">
            <h1 className="text-white font-novaMedium text-4xl mb-1">Login</h1>
            <p className="text-sm text-black font-novaRegular">To Your Account</p>
            <div className="space-y-2 my-4">
                <input className="rounded-md w-full py-2 ps-1" placeholder="Username" {...register("username", {
                    required: "Username could not be empty"
                })} />
                {Boolean(errors.username) && <small className="text-red-500">{errors.username?.message}</small>}
                <input className="rounded-md w-full py-2 ps-1" type="password" placeholder="Password" {...register("password", {
                    required: "Password could not be empty"
                })} />
                {Boolean(errors.username) && <small className="text-red-500">{errors.password?.message}</small>}
            </div>
            <Button className="w-full" htmlType="submit" loading={isPending}>Login</Button>
        </form>
    )
}
