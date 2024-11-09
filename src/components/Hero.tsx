import Navbar from "./Navbar"
import React from "react"

const Hero = () => {
    return(
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/image.png)] bg-left lg:bg-[15%] bg-cover"
        style={{backgroundSize: "35%",backgroundPosition: "left 100px top 100px"}}
        >
      <Navbar />
     <br></br>
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text[100px] font-bold leading-tight flex-justify-center item-center">
            <div>
                <p data-aos="zoom-in-up">I am</p>
                <p data-aos="zoom-in-up">Muqadus</p>
                <p data-aos="zoom-in-up">Bukhari</p>
            </div>
        </div>
      </div>
        </div>
    )
}
export default Hero