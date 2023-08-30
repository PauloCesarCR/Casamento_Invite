import './style.css'

function Mapa({localLink}){
    return (
        <div className='mapa'>
            <iframe src={localLink} width="90%" height="200" loading="lazy"/>
        </div>
    )
}

export default Mapa;