import  { useEffect, useState } from 'react'
import { dataI } from '../interfaces/interfaces'
import './JokeBox.css'
import diceImg from '../assets/Dice.svg'

const JokeBox = () => {
    const [data, setData] = useState<dataI>()
    const [animation, setAnimation] = useState<boolean>(false)

   const fetchData = () => {
        setAnimation(true)
        setTimeout(() => {
            fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious&type=single&idRange=0-300')
        .then(res =>  {
            if(!res) throw new Error ('something went wrong')
            return res.json()
        })
        .then((res) => {
            console.log(res)
            setData(res)
            setAnimation(false)
        })
        .catch(() => console.log('cant be resolved'))
        }, 1500);
   }
   useEffect(() => {
           fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious&type=single&idRange=0-300')
        .then(res =>  {
            if(!res) throw new Error ('something went wrong')
            return res.json()
        })
        .then((res) => {
            console.log(res)
            setData(res)
            setAnimation(false)
        })
        .catch(() => console.log('cant be resolved'))
   }, [])
   
  return (

    <div className='page-div'>
        <div className='joke-container'>
            <p>joke # {data?.id}</p>
            <h1>{data?.joke}</h1>
            <span onClick={fetchData}><img src={diceImg} alt="" className={animation ? 'dice-animation' : ''}/></span>
        </div>
    </div>
  )
}

export default JokeBox