import { FormikValues } from "formik";

export interface Level {
    lazy: () => Promise<{
        default: React.ComponentType<any>;
    }>
    title: string
    initialValues: FormikValues // {[key:string]: string|number|null}
}