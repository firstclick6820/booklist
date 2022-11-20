

const Car = (car) => {

    const truncateDescription = (str) =>  {
       return str.length > 100 ? str.substring(0, 150) + "..." : str;
       }

       
     return (
         <div className="card">
           <div className="card-image">
             <figure className="image is-4by3">
               <img src={car.image} alt="Placeholder image" />
             </figure>
           </div>
           <div className="card-content">
             <div className="media">
              
               <div className="media-content">
                 <p className="title is-4">{car.model}</p>
                 <p className="subtitle is-6">Seller <a href="">{car.seller}</a></p>
                 
   
   
                 <div className="info--wrapper">

                  
                        <span className="has--text--warning">
                           {car.make_id}
                         </span>

                         <span className="has--text--warning">
                           {car.color} (Color)
                         </span>
                         
                         <span className=" has-text-success">
                           {car.year} (Year)
                         </span>

                         <span className=" has-text-success">
                           {car.price}$
                         </span>
                  
   
                    
                 
                 </div>
               </div>
             </div>
   
             <hr />
             <div className="content">
   
               
               
               <div className="book--content mb-2">
                 {truncateDescription(car.description)}
               </div>
   

   
               <hr />
   
               <div className="block">
                 <strong>{car.genres}</strong>
                 <div className="mb-2">
                    {car.postal} (postal), {car.city} (city),  {car.state} (state)
                 </div>


                 <div className="has-text-danger">
                    (vin--code) { car.vin} 
                 </div>
               </div>
               
             </div>
           </div>
         </div>
     )
   }
   
   export default Car;