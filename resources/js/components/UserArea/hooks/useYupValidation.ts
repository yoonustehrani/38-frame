import { useContext } from "react";
import { ObjectSchema, ValidationError } from "yup";
import yupFormContext from "../context/yupFormContext";

export default function useYupValidation(key: string, value: any) {
    const schema = useContext(yupFormContext) as ObjectSchema<{}>
    try {
        schema.validateSync({[key]: value}, {abortEarly: false})
    } catch (errorPacket) {
        if (errorPacket instanceof ValidationError) {
            return errorPacket.inner.filter(e => e.path === key)[0] ?? null
        }
    }
}