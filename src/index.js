import './less/index.less'

// Your code goes here!
const header = document.querySelector('.main-navigation')
header.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = '#e3dac9'; });

const imgContent = document.querySelector('.img-content');
imgContent.addEventListener('dblclick', (event) => {alert ('You have double clicked an image of a map')});
imgContent.addEventListener('mouseover', (event) => {event.target.style.opacity = '0.5'})

const body = document.querySelector('body')
body.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = '#e3dac9'; });
body.addEventListener('mouseover', (event) => {event.target.style.border = 'solid red'; });

const logo = document.querySelector('h1')
logo.addEventListener('dblclick', (event) => {event.target.style.fontFamily = 'times new roman';})
logo.addEventListener('dblclick', (event) => {event.target.style.color = 'magenta';})

const textSection1 = document.querySelector('.text-content')
textSection1.addEventListener('mouseover', (event) => {event.target.style.color = '#e3dac9';});
textSection1.addEventListener('mouseover', (event) => {alert ("You aren't allowed to see that")});

const wholeThing = document.querySelector('html')
wholeThing.addEventListener('load', (event) => {alert ('Welcome to the page')});




