import Header from './sections/Header'
import Content from './sections/Content'

const Course = ({course}) => {
    //logic for total number of exercises
    const total = course.parts.reduce((prev, curr) => {
        return prev + curr.exercises
      }, 0
      )
    console.log(course)
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part =>                                                           //second level mapping that handles display within each course
                <Content key={part.id} name={part.name} exercises={part.exercises} />)}
            <h3>Total number of exercises: {total}</h3>
        </div>
    )
}

export default Course

