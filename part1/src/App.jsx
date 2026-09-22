const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of units {props.part1.units + props.part2.units + props.part3.units}</p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.info}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Industry Elective'

  const part1 = {
    name: 'Information Management 2',
    units: 3
  }

  const part2 = {
    name: 'Data Analytics 1',
    units: 3
  }

  const part3 = {
    name: 'Project Management for IT',
    units: 3
  }

  const footerInfo = 'Denese Joyce S. Rodriguez - CSIT340 - G6'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer info={footerInfo} />
    </div>
  )
}

export default App