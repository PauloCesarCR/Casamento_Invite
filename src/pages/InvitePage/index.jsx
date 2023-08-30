import { useEffect, useRef, useState } from 'react'
import './style.css'
import music from '../../assets/music.mp3'
import ModalAudio from '../../components/ModalAudio'
import flores from '../../assets/flores.png'
import pvENoivaImg from '../../assets/pvenoiva.png'
import musicaIcon from '../../assets/musicaIcon.png'
function InvitePage() {
  const musicRef = useRef(null)
  const [showModal, setShowModal] = useState(true)

  function StopOrPlayMusic(){
    if(musicRef.current.paused){
      musicRef.current.play()
      return;
    }
    musicRef.current.pause()
  }
  return (
    <>
    <div>
      {showModal ? <ModalAudio setShowModal={setShowModal} musicRef={musicRef} /> 
      :
      <section>
            <img onClick={() => StopOrPlayMusic()} className='music-icon' src={musicaIcon} />
            <img className="flores" src={flores} />
            <h3 className='versiculo'>Grandes coisas fez o Senhor por nós, e, por isso, estamos alegres.<br/>(Salmos 126:3)</h3>
            <img className='img-noivos' src={pvENoivaImg} />
            <h3></h3>
            <span></span>
            <span></span>

            <div>
              <img className='cerimonia'></img>
              <img className='recepção'></img>
              <img className='confirmação'></img>
            </div>
        </section>
        }
        <audio ref={musicRef} loop={true} />
      </div>
    </>
  )
}

export default InvitePage
