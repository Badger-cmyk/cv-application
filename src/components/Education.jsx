import { useState } from "react"
import "../styles/Section.css"

function Education() {
    const [school, setSchool] = useState("")
    const [study, setStudy] = useState("")
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [isEditing, setIsEditing] = useState(true)

    if(!isEditing) {
        return (
            <section className="cv-section">
                <h2>Educational Experience</h2>
                <p>School name: {school}</p>
                <p>Title of study: {study}</p>
                <p>Date of study: {dateFrom} to {dateTo}</p>

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

            <h2>Educational Experience</h2>

            <label htmlFor="school">School:</label>
            <input type="text" name="school" id="school" required  placeholder="Enter school/university"
            value={school}
            onChange={(event) => setSchool(event.target.value)}/>

            <label htmlFor="study">Title of study:</label>
            <input type="text" name="study" id="study" required placeholder="Enter degree/field of study"
            value={study}
            onChange={(event) => setStudy(event.target.value)}/>

            <label htmlFor="dateFrom">From:</label>
            <input type="date" name="dateFrom" id="dateFrom" required
            value={dateFrom}
            onChange={(event) => setDateFrom(event.target.value)}/>

            <label htmlFor="dateTo">Until:</label>
            <input type="date" name="dateTo" id="dateTo" required
            min={dateFrom}
            value={dateTo}
            onChange={(event) => setDateTo(event.target.value)}/>


            <button type="submit">Submit Form</button>
        </form>
    )
    
}

export default Education