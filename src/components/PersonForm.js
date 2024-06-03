import { useState } from "react"

const initialFormValues = {
    firstName: '',
    lastName: ''
}

export const PersonForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
    return (
        <>
            <input onChange={handleInputChange} name="firstName" value={formValues.firstName} />
            <input onChange={handleInputChange} name="lastName" value={formValues.lastName} />
        </>
        
    )
}