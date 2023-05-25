import Client from './Client';
import './Testimony.scss';
import txt from  "../../assets/content/text.json"
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'
import client3 from '../../assets/images/client3.jpg'

function Testimony() {
  const {
    first: {text: firstText, name: firstName, work: firstWork},
    second: {text: secondText, name: secondName, work: secondWork},
    third: {text: thirdText, name: thirdName, work: thirdWork}
  } = txt.testimony
    return (
      <section id="testimony-section">
      <h3 id="title-testimonny">Client testimonials</h3>
      <div id="all-clients">
        <Client img={client1}  text={firstText} name={firstName} work={firstWork} />
        <Client img={client2} text={secondText} name={secondName} work={secondWork} />
        <Client img={client3} text={thirdText} name={thirdName} work={thirdWork} /> 
      </div>
      </section>
    );
  }
  
  export default Testimony;
  