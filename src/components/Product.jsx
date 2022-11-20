// import Custom CSS
import '../assets/componenets__css/productStyle.css'


const Product = ({data}) => {

    const truncate = (str) =>  {
        return str.length > 20 ? str.substring(0,40) + '..."' : str;
        }
  return (
    <>
        {/* Wrapper -- start */}
        <div class="wrapper">

            {/*OverviewInfo  */}
            <div class="overviewInfo">

                {/* Actions */}
                <div class="actions">
                    {/* Actions -- first item */}
                    <div class="backbutton ">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                        fill="currentColor"
                        />
                        </svg>
                    </div>

                    {/* Actions -- second item */}
                    <div class="cartbutton neurobutton"> 
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                        />
                        <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                        />
                        <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                        />
                        </svg>
                    </div>
                </div>
                {/* End Actions */}
            
                {/* ProductInfo */}
                <div class="productinfo">
                    {/* Productinfo -- first group */}
                    <div class="grouptext">
                        <h3>{data.name}</h3>
                        <p>{data.category}</p>
                    </div>

                    {/* Productinfo -- second group */}
                    <div class="grouptext">
                        <h3>List Price</h3>
                        <p>{data.list_price}$</p>
                    </div>
                    {/* productinfo -- third group */}
                    <div class="grouptext">
                        <h3>Sell Price</h3>
                        <p>{data.sale_price}$</p>
                    </div>
                    
                    {/* Productinfo -- fourth group */}
                    <div class="productImage">
                        <img src={data.image_url} alt="product: ps5 controller image" />
                    </div>
                </div>
                {/* End Productinfo */}
            </div> 
            {/* OverviewInfo end */}


            {/* ProductSpecifications -- start */}
            <div class="productSpecifications">
                <h1>{data.brand}</h1>
                <p>{truncate(data.description)}</p>
            
                <div class="productFeatures">
                    <div class="feature">
                    <div class="featureIcon">
                    </div>
                    <div class="featureText">
                        <p> <strong>Futuristic</strong></p>
                        <p>Design</p>
                    </div>
                    </div>
                    <div class="feature">
                    <div class="featureIcon">
                    </div>
                    <div class="featureText">
                        <p> <strong>Built-in</strong></p>
                        <p>Microphone</p>
                    </div>
                    </div>
                    <div class="feature">
                    <div class="featureIcon">
                    </div>
                    <div class="featureText">
                        <p> <strong>Haptic</strong></p>
                        <p>Feedback</p>
                    </div>
                    </div>
                    <div class="feature">
                    <div class="featureIcon">
                    </div>
                    <div class="featureText">
                        <p> <strong>Fast charge</strong></p>
                        <p>USB-C port</p>
                    </div>
                    </div>
                </div>
            
                <div class="checkoutButton">
                    <div class="priceTag">
                    <span>$</span>50
                    </div>
                    <button class="preorder">
                    <p>Preorder</p>
                    <div class="buttonaction">
                    <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
                />
                </svg>
                    </div>
                    </button> 
                </div>
            </div>
            {/* Product Specifications -- End */}

        </div>
        {/* Wrapper end */}
    </>
  )
}

export default Product