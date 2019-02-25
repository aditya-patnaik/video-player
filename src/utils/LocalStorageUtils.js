export default class LocalStorageUtils {
    static setSeekPositionOfMedia(url, positionInfo) {
        let savedObject = localStorage.getItem("video-player");
        savedObject = savedObject ? JSON.parse(savedObject) : {};
        savedObject[url.replace("https://www.youtube.com/watch?v=", "")] = positionInfo;
        localStorage.setItem("video-player", JSON.stringify(savedObject));
    }
    static getSeekPositionOfMedia(url) {
        let savedObject = localStorage.getItem("video-player");
        savedObject = savedObject ? JSON.parse(savedObject) : {};
        if (savedObject[url.replace("https://www.youtube.com/watch?v=", "")]) {
            return savedObject[url.replace("https://www.youtube.com/watch?v=", "")];
        }
        return null;
    }
}