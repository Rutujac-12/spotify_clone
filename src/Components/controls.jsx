function Controls() {
    return (
        <div className="controls">
        <div className="controls-icons">
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-layer-group"></i>
            <i className="fa-solid fa-mobile"></i>
        </div>
        <div className="controls-slider">
            <i className="fa-solid fa-music"></i>
            <input type="range" min="0" max="100" />
        </div>
        <div className="extra-controls">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            <i className="fa-solid fa-expand"></i>
        </div>
    </div>
    );
  }
  
  export default Controls;