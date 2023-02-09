import React from 'react'



const Recipe = ({recipe}) => {

 



    return (
        <div className='my-3 '>
            <div className="card " onClick={()=>{window.open(recipe["recipe"]["url"])}} >
                <img src={recipe["recipe"]['image']} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{recipe["recipe"]['label']}</h5>
                    <p className="card-text"> Type  :  {recipe["recipe"]['mealType']}</p>
                    <p className="card-text"> Source  :  {recipe["recipe"]['source']}</p>
                    <p className="card-text"> Food Type : {recipe["recipe"]['cuisineType']}</p>
                    <p className="card-text"> Diet Labels : {recipe["recipe"]['cuisineType']}</p>
                    <p className="card-text"> Dish Type : {recipe["recipe"]['dishType']}</p>

                    <a href="/" className="btn btn-primary">Save Recipe</a>
                </div>
            </div>
        </div >
    )
}

export default Recipe