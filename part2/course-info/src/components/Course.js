import Header from './sections/Header'
import Content from './sections/Content'

const Course = ({course}) => {
    const total = course.parts.reduce((prev, curr) => {
        return prev + curr.exercises
      }, 0
      )
    console.log(course)
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part => 
                <Content key={part.id} name={part.name} exercises={part.exercises} />)}
            <h3>Total number of exercises: {total}</h3>
        </div>
    )
}

export default Course

