import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetter from '../AnimatedLetter'
import Loader from 'react-loaders'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <>
        <div className="container project-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetter
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't']}
                idx={15}
              />
            </h1>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    </>
  )
}

export default Project
