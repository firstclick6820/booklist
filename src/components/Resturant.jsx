import React from 'react'

const Resturant = ({data}) => {
  return (
    <>

        <div className="card--restaurant"> 
            <span className="offer">{data.name}</span> 

            <div className="item-image"> 
                <img src={data.image} /> 
            </div> 

            <div className="item-content"> 

                <h3>{data.type}</h3> 

                <p>{data.country}</p> 
                <p>{data.city}</p> 
                <p>{data.address}</p> 
                

                <div className="item-price"> 
                    <a href={data.website} className="is-link">webiste</a> 
                    <span>{data.phone}</span> 
                </div> 
                
             </div>
        </div>

    </>
  )
}

export default Resturant;