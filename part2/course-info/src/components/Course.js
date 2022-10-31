import Header from './sections/Header'
import Content from './sections/Content'

const Course = ({course}) => {
    console.log(course)
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part => 
                <Content key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

export default Course

