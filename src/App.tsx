import { useForm, FieldErrors, Controller } from "react-hook-form"
import "./App.css"
import { Button, TextField } from "@mui/material"
import MuiTextField from "./controls/MuiTextField"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  fullName: z.string().min(1, "This field is required."),
  email: z.string().email("Incorrect email format."),
  password: z
    .string()
    .min(6, "Minimum 6 characters required.")
    .max(12, "Can't exceed 12 characters."),
})

type FormData = z.infer<typeof schema>

function App() {
  const { register, handleSubmit, control } = useForm<
    FormData,
    { blockedEmailDomains: string[] }
  >({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: async (data, context, options) => {
      // you can debug your validation schema here
      console.log("formData", data)
      console.log(
        "validation result",
        await zodResolver(schema)(data, context, options)
      )
      return zodResolver(schema)(data, context, options)
    },
    context: { blockedEmailDomains: ["example.com", "xyz.com"] },
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
      <MuiTextField name="fullName" label="Full Name" control={control} />
      <br />
      <MuiTextField name="email" label="Email" control={control} />
      <br />
      <MuiTextField
        type="password"
        name="password"
        label="Password"
        control={control}
      />
      <br />
      <Button type="submit" variant="contained" color="warning">
        Submit
      </Button>
    </form>
  )
}

export default App
