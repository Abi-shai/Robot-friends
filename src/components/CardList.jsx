import Card from "./Card"
import '../style/CardList.css'

const CardList = ({robots}) =>{

    return(
        
        <div className="cardList">
            {
                robots.map((robot, i) =>{
        
                    return(

                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        image={robots[i].image}
                        />

                    )
                })
            }
        </div>

    )

}

export default CardList