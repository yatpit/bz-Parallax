const banner = document.querySelector('.banner');
const images = document.querySelectorAll('.image');

let x = 0;
let x_new = 0;
let x_offset = 0;
let window_width = document.documentElement.clientWidth;


let init = () => {
        images[0].children[0].style = 'transform: translate(0px); filter: blur(4px);';
        images[1].children[0].style = 'transform: translate(0px); filter: blur(0px);';
        images[2].children[0].style = 'transform: translate(0px); filter: blur(1px);';
        images[3].children[0].style = 'transform: translate(0px); filter: blur(4px);';
        images[4].children[0].style = 'transform: translate(0px); filter: blur(5px);';
        images[5].children[0].style = 'transform: translate(0px); filter: blur(6px);';
}

banner.addEventListener('mouseover', (e)=>{
    x = e.clientX;
    // console.log(x);
})

banner.addEventListener('mousemove', (e)=>{
    x_new = e.clientX;
    x_offset = x - x_new;
    // console.log(x_offset);
})

banner.addEventListener('mouseout', (e)=>{
    init();
})