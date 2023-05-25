import Header from "./components/Header";
import TextPhoto from "./components/TextPhoto"
import Photos from "./components/Photos";
import Testimony from "./components/Testimony";
import LinePhoto from "./components/LinePhoto";
import Footer from "../Footer";

import hands from "../assets/images/hands.jpg"
import plant from "../assets/images/plant.jpg"
import donut from "../assets/images/donut.jpg"
import candy from "../assets/images/candy.jpg"
import text from "../assets/content/text.json"
import { ThemeProvider } from "../context/ThemeProvider";


function Home() {
  const {
    titleMarketing, 
    textMarketing, 
    titleAudience, 
    textAudience, 
    textPhotography, 
    textGraphic, 
    titleGraphic, 
    titlePhotography
  } = text.homeContent
    return (
      <>
      <Header/>
      <ThemeProvider>
        <TextPhoto
          title={titleMarketing} 
          text={textMarketing} 
          imgPosition="row" 
          imgSrc={hands} 
          imgDescription="hands" 
          linkPath="/services"
          color="yellow" />
        <TextPhoto 
          title={titleAudience} 
          text={textAudience} 
          imgPosition="reverse" 
          imgSrc={plant} 
          imgDescription="plant" 
          linkPath="/services"
          color="peach" />
        <Photos 
          firstTitle={titleGraphic} 
          firstTxt={textGraphic} 
          firstImg={candy} firstAlt="waffle" 
          secondTitle={titlePhotography} 
          secondTxt={textPhotography} 
          secondImg={donut} 
          secondAlt="grapefruit" />
          <Testimony />
          <LinePhoto/>
          <Footer/>
        </ThemeProvider>

      </>

    );
  }
  
  export default Home;
  