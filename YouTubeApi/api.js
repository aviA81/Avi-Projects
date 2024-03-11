/* globals YT, pcs */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "onYouTubeIframeAPIReady" }] */

//  This code loads the IFrame Player API code asynchronously.
const youtubeScript = document.createElement('script');

youtubeScript.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(youtubeScript, firstScriptTag);

//  This function creates an <iframe> (and YouTube player)
//  after the API code downloads.
function onYouTubeIframeAPIReady() {
    initalizePlayer();
}

let player;

async function initalizePlayer() {
    try {

        // Implementing the YouTube API 
        // See https://developers.google.com/youtube/iframe_api_reference for complete documentation
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'WGzPg4vK7PM' // Set the current video to be one of my favorites
        });

    } catch (error) {
        // If any errors are found display them in the Pcs MessageBox
        pcs.messageBox(`Please reload the page \n ${error}`);
    }
}

const myApiKey = 'AIzaSyDxQD1pJh2vx1LXd_3bqlMY9meBuJ-Oot4';
const input = document.querySelector('#ytid');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

async function fetchVideoData(videoId) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${myApiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        // If any errors are found display them in the Pcs MessageBox
        pcs.messageBox(`Please reload the page \n ${error}`);
    }
}

function setText(data) {
    title.innerText = data.items[0].snippet.title;
    description.innerText = data.items[0].snippet.description;
}

// Loading a new video when input is changed
input.addEventListener('change', async () => {
    player.loadVideoById(input.value);
    // Get the details of the video
    const data = await fetchVideoData(input.value);
    // Set the text of the page to the videos information
    setText(data);
});

// Loading some of my favorite videos
const videos = [
    'WGzPg4vK7PM',
    'A11N7AQd77U',
    'QUFyBcDZPuA',
    'SA3XJjYIfmA'
];

videos.forEach(async id => {
    // Get the details of the video
    const data = await fetchVideoData(id);
    console.log(data);
    console.log('data.items[0].snippet', data.items[0].snippet);
    // Create a div with the videos title and image
    const videoElem = document.createElement('div');
    videoElem.innerHTML = `
            <h2>${data.items[0].snippet.title}</h2>
            <img src="${data.items[0].snippet.thumbnails.high.url}" alt="video cover image">`;
    videoElem.addEventListener('click', () => {
        scroll(0, 0);
        player.loadVideoById(id);
        // Set the text of the page to the videos information
        setText(data);
    });
    // Add the videoElem div to the videoList div in the HTML
    document.querySelector('.videoList').appendChild(videoElem);
});
