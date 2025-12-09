import './Card.css'


const Card = ({link, imageUrl, altText}) => {
  return (
    <>
      <a href={link}>
        <img src={imageUrl} alt={altText} target="_blank" className='imgProyectos'/>
      </a>
    </>
  )
}

export default Card