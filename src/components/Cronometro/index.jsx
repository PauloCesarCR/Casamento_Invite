import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import background from '../../assets/flores.png'
const Cronometro = () => {
    
    const [tempoRestante, setTempoRestante] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      });
    
      useEffect(() => {
        const dataEvento = new Date('2023-12-07T18:00:00');
    
        const interval = setInterval(() => {
          const agora = new Date().getTime();
          const diferenca = dataEvento - agora;
    
          if (diferenca <= 0) {
            clearInterval(interval);
            return;
          }
    
          const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
          const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
          const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
          setTempoRestante({
            dias,
            horas,
            minutos,
            segundos,
          });
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
      const { dias, horas, minutos, segundos } = tempoRestante;
   
    return (
        <div className="cronometro">
             <h1>Faltam</h1>
            <div className='infos-cronometro'>
                <div>
                    <span>{dias}</span>
                    <span>dias</span>
                </div>
                <div>
                    <span>{horas}</span>
                    <span>hs</span>
                </div>
                <div>
                    <span>{minutos}</span>
                    <span>min</span>
                </div>
                <div>
                    <span>{segundos}</span>
                    <span>seg</span>
                </div>
            </div>
        </div>
    )
}
  
export default Cronometro;