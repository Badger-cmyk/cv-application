import { useState } from "react"
import "../styles/Section.css"

function GeneralInfo(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [isEditing, setIsEditing] = useState(true)

    if(!isEditing){
        return (
            <section className="cv-section">
                <h2>Personal Information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phone}</p>

                <button onClick={() => setIsEditing(true)}>Edit</button>
            </section>
        )
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            setIsEditing(false)
        }}
            className="cv-section"
        >

            <h2>Personal Information</h2>

            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" required placeholder="First and last name"
            value={name}
            onChange={(event) => setName(event.target.value)}/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required placeholder="example@domain.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" required placeholder="e.g. 024 123 4567"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}/>

            <button type="submit">Submit Form</button>
        </form>
    )
}

export default GeneralInfo