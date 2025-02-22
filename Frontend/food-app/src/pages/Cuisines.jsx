import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import ItalianImg from '../assets/italian.png';
import IndianImg from '../assets/indian.jpg';
import FrenchImg from '../assets/french.jpg';
import AmericanImg from '../assets/american.jpg';
import ChineseImg from '../assets/chinese.jpg';
// import ThaiImg from '../assets/italian.png';

  


const cuisineImages = {
  Italian: ItalianImg,
  Indian: IndianImg,
  French: FrenchImg,
  American: AmericanImg,
  Chinese: ChineseImg,
  Thai: ItalianImg,
};  


export default function Cuisines() {
  const navigate = useNavigate();
const handleCuisineClick = (cuisine) => {
  console.log("Selected cuisine:", cuisine);
  navigate(`/recipes?cuisine=${cuisine}`); // Navigate to the filtered recipes page
};
  return (
    <div>
      <>
              
                  <Navbar/>
                    <div style={{width:'1519px',backgroundImage: 'linear-gradient(black ,rgb(42, 42, 42))', height:'100%',maxWidth:'100%', marginTop:'-100px',minHeight:'100vh'}}>
                        <p className="content-of-cui" style={{color: 'white'}}>
                          Explore the World ...
                          <br />
                          Cuisines Available
                        </p>
                        <div className='cuis-cont'>
                            {["Italian","Indian", "French", "American", "Chinese", "Thai"].map((cuisine)=>{
                              return(
                              <div key={cuisine} className="cuis-item" onClick={()=>handleCuisineClick(cuisine)}>
                                <img src={cuisineImages[cuisine]} alt={cuisine} className="cuisine-img" />
                                <div>
                                  <p>{cuisine}</p>
                                </div>
                              </div> 
                            )  
                            })}

                            <div style={{color:'white',fontFamily: "Moirai One, serif",fontSize: '90px'}}>
                              More content coming soon...
                            </div>

                          {/* <div className="cuis-item" style={{marginTop:'240px', textAlign:'left'}}>Italian</div>
                          <div className="cuis-item" style={{textAlign:'right'}}>Indian</div>
                          <div className="cuis-item" style={{textAlign:'left'}}>French</div>
                          <div className="cuis-item" style={{textAlign:'right'}}>American</div>
                          <div className="cuis-item" style={{textAlign:'left'}}>Chinese</div>
                          <div className="cuis-item" style={{textAlign:'right'}}>Thai</div> */}
                        </div>
                    </div>
                  
              
          </>
    </div>
  )
}
