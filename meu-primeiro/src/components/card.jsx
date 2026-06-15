import s from './card.module.css'

export const Card = ({image,name,desc,value}) => {
    return(
        <>
        <img className={s.cardImage} src={image}alt={name}/>
                      <div className= {s.wrapText}>
                        <h2>{name}</h2>
                        <p>{desc}</p>
                        <h3>${(value).toFixed(2)}</h3>
                      </div>
        </>
    )
}