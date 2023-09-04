import './style.css'

function Mapa({localLink}){
    return (
        <div className='mapa'>
            <iframe src={localLink} width="100%" height="100%" loading="lazy"/>
        </div>
    )
}

export default Mapa;