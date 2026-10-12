import { useState } from "react";

function Experience(){
    const [isEditing, setIsEditing] = useState(true)
    const [info, setInfo] = useState({company: "", position: "", responsibilities: "", dateFrom: "", dateTo: ""})

    const handleChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }

    if(!isEditing) {
        return(
            <section>
                <h2>Practical Experience</h2>
                <p>Company: {info.company}</p>
                <p>Position: {info.position}</p>
                <p>Responsibilities: {info.responsibilities}</p>
                <p>From: {info.dateFrom}</p>
                <p>Until: {info.dateTo}</p>

                <button onClick={() => setIsEditing(true)}>Edit</button>
            </section>
        )
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            setIsEditing(false)
        }}>
            <h2>Practical Experience</h2>

            <label htmlFor="company">Company Name: </label>
            <input type="text" name="company" id="company" required
            placeholder="Name of company..."
            value={info.company}
            onChange={handleChange} />

            <label htmlFor="position">Position: </label>
            <input type="text" name="position" id="position" required
            placeholder="Title of position..."
            value={info.position}
            onChange={handleChange}/>

            <label htmlFor="responsibilities">Responsibilities: </label>
            <textarea id="responsibilities" name="responsibilities" required 
            rows="5" cols="40" placeholder="Type your responsibilities here, separate each responsibility with a comma..."
            value={info.responsibilities}
            onChange={handleChange}></textarea>

            <label htmlFor="dateFrom">From: </label>
            <input type="date" name="dateFrom" id="dateFrom" required
            value={info.dateFrom}
            onChange={handleChange}/>

            <label htmlFor="dateTo">Until: </label>
            <input type="date" name="dateTo" id="dateTo" required
            min={info.dateFrom}
            value={info.dateTo}
            onChange={handleChange}/>

            <button type="submit">Submit Form</button>
        </form>
    )
}

export default Experience