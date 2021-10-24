import "./intro.css";
import Me from "../../img/rohan.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro">Hello, My name is</h2>
                  <h1 className="i-name">Rohan More</h1> 
                  <div className="i-title">
                      <div className="i-title-wrapper">
                         <div className="i-title-item">Web Developer</div>
                         <div className="i-title-item">Python Programmer</div> 
                         <div className="i-title-item">Gamer</div> 
                         <div className="i-title-item">Problem Solver</div> 
                         <div className="i-title-item">Public Speaker</div> 
                         <div className="i-title-item">Machine Learning Engineer</div> 
                      </div>
                  </div>
                  <div className="i-desc">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nesciunt! Rerum, dolorem inventore! Deserunt in qui reiciendis hic sapiente, ut optio excepturi. Culpa, nemo?
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nesciunt! Rerum, dolorem inventore! Deserunt in qui reiciendis hic sapiente, ut optio excepturi. Culpa, nemo?
                  </div>
              </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="rohan" className="i-img" />
            </div>
        </div>
    )
}

export default Intro