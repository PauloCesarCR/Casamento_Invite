import './style.css'

function Mapa({localLink}){
    return (
        <div className='mapa'>
            <div className='seta'></div>
            <iframe src={localLink} width="100%" height="100%" loading="lazy"/>
        </div>
    )
}

export default Mapa;