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
    <div className='container-modal'>
      <section className='modal-initial'>
        <h1>Deseja entrar</h1>
        <div className='buttons'>
        <button onClick={()=> playMsuic(true)}>Com música</button>
        <button onClick={()=> playMsuic(false)}>Sem música</button>
        </div>
      </section>
      </div>
    </>
  )
}

export default ModalAudio
