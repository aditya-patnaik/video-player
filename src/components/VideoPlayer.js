import React from "react";
import ReactPlayer from "react-player";
import LocalStorageUtils from "../utils/LocalStorageUtils";

class VideoPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getStateFromProps(props);
    }
    getStateFromProps = (props) => {
        return {
            url: "https://www.youtube.com" + props.location.pathname + props.location.search
        }
    }
    componentWillReceiveProps = (props) => {
        this.setState(this.getStateFromProps(props));
    }
    getSeekPosition = () => {
        return LocalStorageUtils.getSeekPositionOfMedia(this.state.url);
    }
    onStartCallback = () => {
        let seekPosition = this.getSeekPosition();
        if (seekPosition) {
            this.player.seekTo(parseFloat(seekPosition.playedSeconds))
        }
    }
    onProressCallback = (progressObj) => {
        LocalStorageUtils.setSeekPositionOfMedia(this.state.url, progressObj)
    }
    ref = (player) => {
        this.player = player;
    }
    render() {
        let url = this.state.url;
        return (
            <div>
                <ReactPlayer
                    ref={this.ref}
                    onStart={this.onStartCallback}
                    url={url}
                    className="react-player"
                    playing
                    controls={true}
                    onProgress={this.onProressCallback}
                    width="100%"
                    height="100%" />
            </div>
        )
    }
}

export default VideoPlayer;