import  axios from "axios";
export const findIP = () => {
    //return new Promise(r => { var w = window, a = new (w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' } ] }), b = () => { }; a.createDataChannel(""); a.createOffer(c => a.setLocalDescription(c, b, b), b); a.onicecandidate = c => { try { c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r) } catch (e) { } } });
    return axios.get("https://api.ipify.org?format=json").then((response) => {
        return response.data.ip;
    }).catch(error => console.log(error));
}