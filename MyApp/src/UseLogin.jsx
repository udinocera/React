import { useState } from "react";

export function UseLogin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((data) => {
            return{
                ...data,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`email: ${formData.username} password: ${formData.password}`)
    }

    return{formData, handleInputChange, handleSubmit}
}