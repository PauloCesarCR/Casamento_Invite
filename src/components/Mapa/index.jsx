import './style.css'

function Mapa({localLink}){
    return (
        <div className='mapa'>
            <iframe src={localLink} width="99%" height="200" loading="lazy"/>
        </div>
    )
}

export default Mapa;