

import card1img from '../assets/card1img.jpeg'
import card2img from '../assets/card2img.jpeg'
import card3img from '../assets/card3img.jpeg'
import card4img from '../assets/card4img.jpeg'
import card5img from '../assets/card5img.jpeg'
import card6img from '../assets/card6img.jpeg'
import backwardIcon from '../assets/backward_icon.png'
import forwardIcon from '../assets/forward_icon.png'
function MainContent() {
  return (
    <div className="main-content">
        <div className="sticky-nav">
            <div className="sticky-nav-icons">
                <img src={backwardIcon} alt="" />
                <img src={forwardIcon} alt="" className="hide" />
            </div>
            <div className="sticky-nav-options">
                <button className="badge nav-items hide">Explore Premium</button>
                <button className="badge nav-items dark-badge">
                    <i className="fa-regular fa-circle-down" style={{ margin: '7px' }}></i>Install App
                </button>
                <i className="fa-regular fa-user"></i>
            </div>
        </div>
        <h2>Recently Played</h2>
        <div className="cards-container">
            <div className="card">
                <img src={card1img} alt="Card" className="card-img" />
                <p className="card-title">Top 50 - Global</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
        </div>
        <h2>Trending now near you</h2>
        <div className="cards-container">
            <div className="card">
                <img src={card2img} alt="Card" className="card-img" />
                <p className="card-title">Maiye jina sona</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
            <div className="card">
                <img src={card3img} alt="Card" className="card-img" />
                <p className="card-title">Mera Pass Tum Ho</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
            <div className="card">
                <img src={card4img} alt="Card" className="card-img" />
                <p className="card-title">NAA READY</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
            <div className="card">
                <img src={card5img} alt="Card" className="card-img" />
                <p className="card-title">Top Songs - Global</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
            <div className="card">
                <img src={card6img} alt="Card" className="card-img" />
                <p className="card-title">Mera Pass Tum Ho</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
        </div>
        <h2>Featured Charts</h2>
        <div className="cards-container">
            <div className="card">
                <img src={card5img} alt="Card" className="card-img" />
                <p className="card-title">Top song - Global</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
            <div className="card">
                <img src={card1img} alt="Card" className="card-img" />
                <p className="card-title">Top 50 - Global</p>
                <p className="card-info">Your daily updates of the most Played tracks....</p>
            </div>
        </div>
        <div className="footer">
            <div className="line"></div>
        </div>
    </div>
  );
}

export default MainContent;
 
