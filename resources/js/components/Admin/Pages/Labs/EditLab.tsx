import { FC } from "react";
import { fetchLabForEdit } from "./api";
import { useLoaderData } from "react-router-dom";

interface EditLabProps {
    
}

interface LoaderProps {
    params: {
        labId: string
    }
}

async function loader({ params }: LoaderProps) {
    try {
        const [request, cancel] = fetchLabForEdit(params.labId)
        const response = await request
        if (! response.hasErrors()) {
            return response.getContent()
        }
        throw response.getErrorObject()
    } catch (error) {
        return {error}
    }
}

const EditLab: FC<EditLabProps> = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div></div>
    );
}
 
export {EditLab as Component, loader};