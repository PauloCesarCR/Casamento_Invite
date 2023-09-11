import { useRef, useState } from 'react'
import './style.css'
import music from '../../assets/music.mp3'
import ModalAudio from '../../components/ModalAudio'
import flores from '../../assets/flores.png'
import pvENoivaImg from '../../assets/pvenoiva.png'
import musicaIcon from '../../assets/iconMusica.png'
import cerimoniaImg from '../../assets/igreja.png'
import confirmacaoImg from '../../assets/confirmacao.png'
import Mapa from '../../components/Mapa'
import { useNavigate } from 'react-router-dom'
import Cronometro from '../../components/Cronometro'
import background from '../../assets/flores.png'

function InvitePage() {
  const musicRef = useRef(null)
  const [showModal, setShowModal] = useState(true)
  const [mapOpen, setMapOpen] = useState(false)

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

  function enviarMsgWhatsapp(){
    const text = "https://api.whatsapp.com/send?phone=5521966402513&text=Ol%C3%A1,%20sou%20(Seu%20nome)%20e%20quero%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%20da%20Lydia%20e%20Paulo%20Victor."
    const newTab = window.open(text, '_blank');
    newTab.focus();
  }


  return (
    <>
    <div className="container">
      <img  className='img-canto top-left' src={flores}></img>
      <img  className='img-canto bottom-right' src={flores}></img>
      <div className='modalEntrar'>
         {showModal && <ModalAudio setShowModal={setShowModal} musicRef={musicRef} />}
      </div>
      <section>
            <img onClick={() => StopOrPlayMusic()} className='music-icon' src={musicaIcon} />
            <img className={`flores ${showModal && "opacityModal"}`} src={background} />
            <div className='infos-casamento'>
              <h3 className='versiculo'>Grandes coisas fez o Senhor por nós, e, por isso, estamos alegres.<br/>(Salmos 126:3)</h3>
              <img className='img-noivos' src={pvENoivaImg} />
              <h3 className='invite-h3'>CONVIDAM PARA CELEBRAR O SEU <br/>CASAMENTO</h3>
              <span className='dia'>QUINTA-FEIRA ÀS 18 HORAS</span>
              <div class="linha-horizontal"></div>
              <span className='data'>07 DEZEMBRO DE 2023</span>
            </div>

            <div className='infos-container'>
              <div className='icons'>
                <div className='cerimonia'>
                  <img onClick={()=> setMapOpen(true)} src={cerimoniaImg} />
                  <span>Celebração</span>
                </div>
                <div className='confirmacao'>
                  <img onClick={()=>  enviarMsgWhatsapp()} src={confirmacaoImg} /> 
                  <span>Confirmação</span> 
                </div>
              </div>
              <Cronometro />
              {mapOpen && <Mapa setMapOpen={setMapOpen} />}
            </div>
        </section>
        <audio ref={musicRef} loop={true} />
      </div>
    </>
  )
}

export default InvitePage
