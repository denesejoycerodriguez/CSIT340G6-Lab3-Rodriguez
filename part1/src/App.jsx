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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
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

  const parts = [
    {
      name: 'Information Management 2',
      units: 3
    },
    {
      name: 'Data Analytics 1',
      units: 3
    },
    {
      name: 'Project Management for IT',
      units: 3
    }
  ]

  const footerInfo = 'Denese Joyce S. Rodriguez - CSIT340 - G6'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer info={footerInfo} />
    </div>
  )
}

export default App