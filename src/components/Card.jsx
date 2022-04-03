import '../style/Card.css'

const Card = ({name, image, email}) =>{

    return(
        <div className="card">
           <img className='card_image' src={image} alt="Robot_image"/>
           <div className="card_info">
               <h2 className="card_image_name">{name}</h2>
               <p className="card_link">{email}</p>
           </div>
        </div>
    )
}

export default Card