class Banner{
    constructor(selector) {
        this.banner = document.querySelector(`${selector}`);
        this.images = document.querySelectorAll(`${selector}>div`);
        this.init();
        this.bindEvent();
    }
    init() {
        // const images = this.images
        for(let image of this.images.values()){
            // console.log(image)
            image.style.setProperty('--Xoffset', `0px`);
            image.style.setProperty('--Yoffset', `0px`);
        }
    }
    bindEvent() {
        let x, y, x_offset, y_offset;
        // let x_new = 0;
        // let x_offset = 0;
        this.banner.addEventListener('mouseover', (e)=>{
            // 获取鼠标进入点
            x = e.clientX;
            y = e.clientY;
            // console.log(x);
        })
        this.banner.addEventListener('mousemove', (e)=>{
            // 获取鼠标进入点
            x_offset = e.clientX - x;               // 获取鼠标位移量 
            y_offset = e.clientY - y;
            for(let [index, image] of this.images.entries()){
                // console.log([index, image])
                let speed = (6 - index)*10;
                let Xoffset = x_offset / speed;
                let Yoffset = y_offset / speed;
                image.style.setProperty('--Xoffset', `${Xoffset}px`);
                image.style.setProperty('--Yoffset', `${Yoffset}px`);
            }
        })
        this.banner.addEventListener('mouseout', (e)=>{
            this.init()
        })
    }
}
export default Banner;