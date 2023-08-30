import { useEffect, useRef, useState } from 'react'
import './style.css'
import music from '../../assets/music.mp3'
import flores from '../../assets/flores.png'
function ModalAudio({setShowModal,musicRef}) {

    function playMsuic(state){
        if(state){
            musicRef.current.src = music
            musicRef.current.play()
        }
        setShowModal(false)
    }
  return (
    <>
      <section>
        <img src={flores} />
        <h1>Deseja entrar</h1>
        <div className='buttons'>
        <button onClick={()=> playMsuic(true)}>Com musica</button>
        <button onClick={()=> playMsuic(false)}>Sem musica</button>
        </div>
      </section>
    </>
  )
}

export default ModalAudio
