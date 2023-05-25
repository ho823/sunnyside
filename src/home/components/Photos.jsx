import './Photos.scss';

function Photos({firstTitle, firstTxt, firstImg, firstAlt, secondTitle, secondTxt, secondImg, secondAlt}) {
    return (
      <section id="photo-container">
        <div id="left-content">
          <img className="photos" src={firstImg} alt={firstAlt} />
          <div className="txt-content">
            <h3 className="photos-title">{firstTitle}</h3>
            <p className="photos-txt">{firstTxt}</p>
          </div>
        </div>

        <div id="right-content">
          <img className="photos" src={secondImg} alt={secondAlt} />
          <div className="txt-content">
            <h3 className="photos-title">{secondTitle}</h3>
            <p className="photos-txt">{secondTxt}</p>
          </div>
        </div>
      </section>

    );
  }
  
  export default Photos;
  