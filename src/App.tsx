import { useForm, FieldErrors, Controller } from "react-hook-form"
import "./App.css"
import { Button, TextField } from "@mui/material"

type FormData = {
  email: string
  fullName: string
  password: string
}

function App() {
  const { register, handleSubmit, control } = useForm<FormData>({
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

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* <input type="text" placeholder="Full Name" {...register("fullName")} /> */}
      {/* <TextField
        variant="outlined"
        label="Full Name"
        {...fullNameRR}
        inputRef={ref}
        defaultValue="abc"
      /> */}
      <Controller
        name="fullName"
        control={control}
        rules={{ required: "This field is required." }}
        render={({ field, fieldState }) => (
          <TextField
            variant="outlined"
            label="Full Name"
            {...field}
            inputRef={field.ref}
          />
        )}
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
