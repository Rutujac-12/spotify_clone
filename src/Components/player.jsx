

import player_icon1 from '../assets/player_icon1.png'
import player_icon2 from '../assets/player_icon2.png'
import player_icon3 from '../assets/player_icon3.png'
import player_icon4 from '../assets/player_icon4.png'
import player_icon5 from '../assets/player_icon5.png'


function Player() {
    return (
        <div className="player">
        <div className="player-controls">
            <img src={player_icon1} className="player-controls-icons" />
            <img src={player_icon2} className="player-controls-icons" />
            <img src={player_icon3} className="player-controls-icons" style={{ opacity: 1, height: '1.75rem' }} />
            <img src={player_icon4} className="player-controls-icons" />
            <img src={player_icon5} className="player-controls-icons" />
        </div>
        <div className="playback-bar">
            <span className="current-time">00:00</span>
            <input type="range" min="0" max="100" />
            <span className="total-time">03:21</span>
        </div>
    </div>
    );
  }
  
  export default Player;