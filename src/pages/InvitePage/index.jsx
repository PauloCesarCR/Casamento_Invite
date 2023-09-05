import { useEffect, useRef, useState } from 'react'
import './style.css'
import music from '../../assets/music.mp3'
import ModalAudio from '../../components/ModalAudio'
import flores from '../../assets/flores.png'
import pvENoivaImg from '../../assets/pvenoiva.png'
import musicaIcon from '../../assets/musicaIcon.png'
import cerimoniaImg from '../../assets/igreja.png'
import recepcaoImg from '../../assets/recepcao.png'
import confirmacaoImg from '../../assets/confirmacao.png'
import Mapa from '../../components/Mapa'
import flores2 from '../../assets/flores2.png'
import MensagensModal from '../../components/MensagensModal'
function InvitePage() {
  const musicRef = useRef(null)
  const [showModal, setShowModal] = useState(true)
  const [mapOpen, setMapOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  function StopOrPlayMusic(){
    if(!musicRef.current.src){
      musicRef.current.src = music
    }
    if(musicRef.current.paused){
      musicRef.current.play()
      return;
    }
    musicRef.current.pause()
  }
  return (
    <>
    <div className="container">
      {showModal && <ModalAudio setShowModal={setShowModal} musicRef={musicRef} />}
      <section>
            <img onClick={() => StopOrPlayMusic()} className='music-icon' src={musicaIcon} />
            <img className={`flores ${showModal && "opacityModal"}`} src={flores} />
            <div className='infos-casamento'>
              <h3 className='versiculo'>Grandes coisas fez o Senhor por nós, e, por isso, estamos alegres.<br/>(Salmos 126:3)</h3>
              <img className='img-noivos' src={pvENoivaImg} />
              <h3 className='invite-h3'>CONVIDAM PARA CELEBRAR O SEU CASAMENTO</h3>
              <span></span>
              <span></span>
            </div>

            <div className='infos-container'>
              <div className='icons'>
                <div className='cerimonia'>
                  <img onClick={()=> setMapOpen(!mapOpen)} src={cerimoniaImg} />
                </div>
                <div>
                  <img src={recepcaoImg} />
                  <span></span>
                </div>
                <div>
                  <img onClick={()=> setConfirmOpen(!confirmOpen)} src={confirmacaoImg} />  
                </div>
              </div>
              {mapOpen && <Mapa localLink={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.935704698311!2d-43.337612225434754!3d-22.841868135552723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9963519a8bb29f%3A0xe9da8c2a33b76399!2sEstr.%20do%20Col%C3%A9gio%2C%2065%20-%20Col%C3%A9gio%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021235-280!5e0!3m2!1spt-BR!2sbr!4v1693414644847!5m2!1spt-BR!2sbr"} />}
            </div>
        </section>
        <audio ref={musicRef} loop={true} />
      </div>
    </>
  )
}

export default InvitePage
