import React from 'react'
import food from '../assets/food.jpeg'

export default function Home() {
    return(
        <>
            <section className="home">

                <div className="left">
                    <h1>
                        Food-Recipe
                    </h1>
                    <h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore ex eum voluptatibus! Nostrum qui ab labore ut saepe ipsa dolorem corporis a perspiciatis. Ullam tempora deleniti voluptates saepe rerum?
                    </h5>

                    <button>
                        Share your Recipe
                    </button>
                </div>

                <div className="right">
                    <img src={food} width="320px" height="300px" />
                </div>

            </section>

            <div className="bg">
            <svg xmlns='http://www.w3.org/2000/svg' width='814' height='97.4' viewBox='0 0 1440 320'><rect fill='#080314' width='10000' height='1200' fillOpacity='1'/><g fill='none' stroke='#222' strokeWidth='16.4'strokeOpacity='1' ><path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/><path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/></g></svg>
            </div>
        </>
    )
}