import orange1 from "../../assets/images/orange1.jpg"
import icecream from "../../assets/images/icecream.jpg"
import glass from "../../assets/images/glass.jpg"
import cat from "../../assets/images/cat.jpg"

import "./LinePhoto.scss"

function LinePhoto() {
    return (
      <section id="line-photo">
        <img className="photo" src={orange1} alt="" />
        <img className="photo" src={icecream} alt="" />
        <img className="photo" src={glass} alt="" />
        <img className="photo" src={cat} alt="" />
      </section>
    );
  }
  
  export default LinePhoto;
  