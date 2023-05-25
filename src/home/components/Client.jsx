import './Client.scss';

function Client({img, text, name, work}) {
    return (
      <div id="client-section">
        <img className='client-img' src={img} alt="client1" />
        <p className='client-txt'>{text}</p>
        <p className='client-name'>{name}</p>
        <p className='client-work'>{work}</p>
      </div>
    );
  }
  
  export default Client;
  