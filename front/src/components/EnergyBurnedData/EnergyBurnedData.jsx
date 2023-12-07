import '../../style/EnergyBurnedData.css'

function EnergyBurnedData({value, color, energyType, energyIcon, }) { 
    var className='iconContainer '
    if (color !== undefined) {
        className += color
    }

    return (
        <article className="energyContainer">
            <picture className= {className}>
                <img src={energyIcon} alt="icone de l'energie dépensée" />
            </picture>
            <div className="valueContainer">
                <h3>{value}</h3>
                <p>{energyType}</p>
            </div>

        </article>

    )
}

export default EnergyBurnedData