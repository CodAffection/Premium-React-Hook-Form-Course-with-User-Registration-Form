import { useForm, FieldErrors } from "react-hook-form"
import "./App.css"

type FormData = {
  email: string
  fullName: string
  password: string
}

function App() {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("form data", data)
  }

  const onError = (err: FieldErrors) => {
    console.log("error", err)
  }

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      <br />
      <input type="text" placeholder="Email" {...register("email")} />
      <br />
      <input type="password" placeholder="Password" {...register("password")} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
