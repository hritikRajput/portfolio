import ritik from "../../assets/ritik.jpg"
import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero">
            <section className="hero-section">
                <div className="hero-content">
                    <img src={ritik} alt="image of ritik" className="hero-image" />
                    <h1 className="animated-heading">Ritik Rajput</h1>
                    <p>Full Stack Developer</p>
                </div>
            </section>
        </div>
    )
}

export default Hero
