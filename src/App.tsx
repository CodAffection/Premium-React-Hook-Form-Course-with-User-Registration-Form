import { useForm, FieldErrors } from "react-hook-form"
import "./App.css"
import { Button, TextField } from "@mui/material"

type FormData = {
  email: string
  fullName: string
  password: string
}

function App() {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("form data", data)
  }

  const onError = (err: FieldErrors) => {
    console.log("error", err)
  }

  const { ref, ...fullNameRR } = register("fullName")

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* <input type="text" placeholder="Full Name" {...register("fullName")} /> */}
      <TextField
        variant="outlined"
        label="Full Name"
        {...fullNameRR}
        inputRef={ref}
        defaultValue="abc"
      />
      <br />
      <input type="text" placeholder="Email" {...register("email")} />
      <br />
      <input type="password" placeholder="Password" {...register("password")} />
      <br />
      <Button type="submit" variant="contained" color="warning">
        Submit
      </Button>
    </form>
  )
}

export default App
