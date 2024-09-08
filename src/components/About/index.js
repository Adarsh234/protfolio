import AnimatedLetter from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import img from '../../assets/images/profile.jpg'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="profile">
          <img className="img" src={img} alt="" />
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p className="para1">
            Hey everyone!!! Welcome to my portfolio. I am a passionate FrontEnd
            developer on a journey towards becoming a proficient full-stack
            developer. Currently pursuing my BCA degree from SGTBIMIT.
          </p>
          <p className="para2">
            I am deeply engrossed in crafting modern UI applications using
            cutting-edge frameworks like React. My portfolio showcases a
            collection of projects that demonstrate my skills and dedication to
            creating innovative solutions. Feel free to explore my projects.
          </p>
          <p className="para3">
            If I need to define myself in one sentence that would be a sport
            fanatic, tech-obsessed and core gamer!!!
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
