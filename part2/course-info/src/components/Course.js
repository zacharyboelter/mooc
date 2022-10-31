import Header from './sections/Header'

const Course = ({course}) => {
    console.log(course)
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part => <p>{part.name}</p>)}
        </div>
    )
}

export default Course