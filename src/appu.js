import appu from "../src/images/4.jpg"
import './appu.css';
const Appu = () => {
    return (
        <div className="abc"> 
            <div>
            <h2 id="title"><i>PUNEETH RAJKUMAR</i></h2>
            </div>
        <div className="image">
            
            <img src={appu} width="450px" height="400px" id="image" ></img>
            <p>Dr. Puneeth Rajkumar (17 March 1975 – 29 October 2021), colloquially known as Appu, was an Indian actor, playback singer, television presenter, and producer who worked primarily in Kannada cinema. He was a lead actor in 29 films; as a child, he appeared in many films. His performances in Vasantha Geetha (1980), Bhagyavantha (1981), Chalisuva Modagalu (1982), Eradu Nakshatragalu (1983), Bhakta Prahaladha, Yarivanu and Bettada Hoovu (1985) were praised.[1] He won the National Film Award for Best Child Artist for his role of Ramu in Bettada Hoovu.[2] He also won Karnataka State Award Best Child artist for Chalisuva Modagalu and Eradu Nakshatragalu. Puneeth's first lead role was in 2002's Appu. Karnataka Government has announced State's highest civilian award Karnataka Ratna for Puneeth, posthumously, in November 2021.[3]</p>
        </div>
        </div>
     );
}
 
export default Appu;