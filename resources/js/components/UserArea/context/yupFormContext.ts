import { createContext } from "react";
import { ObjectSchema } from "yup";

const yupFormContext = createContext<ObjectSchema<{}> | null>(null)

export default yupFormContext