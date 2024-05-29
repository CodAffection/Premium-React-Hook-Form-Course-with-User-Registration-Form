import { useForm, FieldErrors, Controller } from "react-hook-form"
import "./App.css"
import { Button, TextField } from "@mui/material"
import MuiTextField from "./controls/MuiTextField"

type FormData = {
  email: string
  fullName: string
  password: string
}

function App() {
  const { register, handleSubmit, control } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
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

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <MuiTextField
        name="fullName"
        label="Full Name"
        control={control}
        rules={{ required: "This field is required." }}
      />
      <br />
      <MuiTextField
        name="email"
        label="Email"
        control={control}
        rules={{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Incorrect email formate.",
          },
        }}
      />
      <br />
      <MuiTextField
        type="password"
        name="password"
        label="Password"
        control={control}
        rules={{ required: "This field is required." }}
      />
      <br />
      <Button type="submit" variant="contained" color="warning">
        Submit
      </Button>
    </form>
  )
}

export default App
