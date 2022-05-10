const banner = document.querySelector('.Banner');
const images = document.querySelectorAll('.Banner>div');

let x = 0;
let x_new = 0;
let x_offset = 0;
let window_width = document.documentElement.clientWidth;


let init = () => {
    for(let image of images.entries()){
        image.style.setProperty('--Xoffset', `0px`);
        image.style.setProperty('--Yoffset', `0px`);
        // image.style.setProperty('--blur', `${index}px`)
        // if(index==1) {
        //     image.style.setProperty('--blur', `0px`)
        // }
    }
}

init();

banner.addEventListener('mouseover', (e)=>{
    x = e.clientX;
    y = e.clientY;
    // console.log(x);
})

banner.addEventListener('mousemove', (e)=>{
    x_new = e.clientX;                  // 获取鼠标进入点
    x_offset = x_new - x;               // 获取鼠标位移量
    y_new = e.clientY;
    y_offset = y_new - y;  
    for(let [index, image] of images.entries()){
        // console.log([index, image])
        let speed = (6 - index)*10;
        let Xoffset = x_offset / speed;    // 越往前的图层，移动速度越快
        let Yoffset = y_offset / speed;
        image.style.setProperty('--Xoffset', `${Xoffset}px`);
        image.style.setProperty('--Yoffset', `${Yoffset}px`);
        
        // let step = x_offset / window_width;
        // let blur = Math.abs(index + (x_offset*10 / window_width));
        // console.log(index, blur);
        // image.style.setProperty('--blur', `${blur}px`)
    }
})

banner.addEventListener('mouseout', (e)=>{
    init()
})