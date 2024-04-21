import card5img from '../assets/card5img.jpeg'

function Album() {
    return (
        <div className="album">
        <img src={card5img}/>
        <div className="album-details">
            <div className="album-title">Top song - global</div>
            <div className="album-author">Spotify Mix</div>
        </div>
        <i className="fa-solid fa-circle-check check" style={{ color: '#04fb08' }}></i>
    </div>
    );
  }
  
  export default Album;