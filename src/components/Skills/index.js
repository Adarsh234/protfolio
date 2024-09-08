import AnimatedLetter from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 className='text'>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="a1">
          <div className="topic">
            <h1>FrontEnd</h1>
            <div className="buttons">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>ReactJS</button>
              <button>TailWind</button>
              <button>TypeScript</button>
            </div>
          </div>
          <div className="topic">
            <h1>BackEnd</h1>
            <div className="buttons">
              <button>Node.Js</button>
              <button>Express.Js</button>
              <button>Rest API</button>
              {/* <button>ReactJS</button>
              <button>TailWind</button>
              <button>TypeScript</button> */}
            </div>
          </div>
          <div className="topic">
            <h1>DataBase</h1>
            <div className="buttons">
              <button>MongoDB</button>
              <button>SQl</button>
              {/* <button>JavaScript</button>
              <button>ReactJS</button>
              <button>TailWind</button>
              <button>TypeScript</button> */}
            </div>
          </div>
          <div className="topic">
            <h1>Programming</h1>
            <div className="buttons">
              <button>C</button>
              <button>C++</button>
              <button>Java</button>
              <button>Python</button>
              <button>PHP</button>
            </div>
          </div>
          <div className="topic">
            <h1>Libraries</h1>
            <div className="buttons">
              <button>Redux</button>
              <button>React Query</button>
              <button>Figma</button>
              <button>Framer Motion</button>
              <button>Postman</button>
              {/* <button>TypeScript</button> */}
            </div>
          </div>
          <div className="topic">
            <h1>Clouds</h1>
            <div className="buttons">
              <button>Linux</button>
              <button>Git</button>
              {/* <button>JavaScript</button>
              <button>ReactJS</button>
              <button>TailWind</button>
              <button>TypeScript</button> */}
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
