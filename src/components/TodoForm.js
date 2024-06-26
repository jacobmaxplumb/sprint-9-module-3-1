import { useState } from "react"

const initialFormValues = {
    description: '',
    other: ''
}

export const TodoForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
    return (
        <>
            <h3>Todo Form</h3>
            <input onChange={handleInputChange} name="description" value={formValues.description} />
            <input onChange={handleInputChange} name="other" value={formValues.other} />
        </>
        
    )
}