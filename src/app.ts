import express from 'express';

export const app = express();

app
	.use(express.static('static'))
	.use(express.static('node_modules/video.js/dist'))
	.use(express.static('node_modules/videojs-contrib-hls/dist'));
