import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export const urls = [{url: "https://www.youtube.com/watch?v=MWHon4WCBcs",
                      title: "Kled Mone - Hit the road Jack Feeling Good"},
                    {url: "https://www.youtube.com/watch?v=rnwlWn603g4",
                    title: "DrDisrespect eating HERRING SOUR CREAM on STREAM | DOC MOMENTS - YouTube"},
                    {url: "https://www.youtube.com/watch?v=CrTMc2i6Lzc",
                    title: "While My Guitar Gently Weeps (Taken from Concert For George)"},
                    {url: "https://www.youtube.com/watch?v=iv8GW1GaoIc",
                    title: "The Doors - Riders On The Storm"},
                    {url: "https://www.youtube.com/watch?v=5R8EpAv4miA",
                    title: "Syd Barrett /Pink Floyd - See Emily Play"},
                    {url: "https://www.youtube.com/watch?v=2JJszWo8Aow",
                    title: "The Kinks - Sunny Afternoon"},
                    {url: "https://www.youtube.com/watch?v=0sB3Fjw3Uvc",
                    title: "The Animals - House Of The Rising Sun"},
                    {url: "https://www.youtube.com/watch?v=QxIWDmmqZzY",
                    title: "Lynyrd Skynyrd - Freebird - 7/2/1977"}];

export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }
    updateVideo = (url) => {
        this.props.updateVideo(url);
    }
    render() {
        return (
            <div className="video-list-container">
                {
                    _.map(urls, (video, index) => {
                        return <div className="list-item" key={index}>
                            <Link to={`${video.url.replace("https://www.youtube.com/", "")}`}>{video.title}</Link>
                        </div>
                    })
                }
            </div>
        )
    }
}