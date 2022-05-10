class Banner{
    constructor(selector) {
        this.banner = document.querySelector('.Banner');
        this.images = document.querySelector('.Banner>div');
        this.init();
        this.bindEvent();
    }
    init() {
        for(let image of this.images.entries()){
            image.style.setProperty('--offset', `0px`);
        }
    }
    bindEvent() {
        this.banner.addEventListener('mouseover', (e)=>{
            // 获取鼠标进入点
            x = e.clientX;
            y = e.clientY;
            // console.log(x);
        })
        this.banner.addEventListener('mousemove', (e)=>{
            x_new = e.clientX;                  // 获取鼠标进入点
            x_offset = x_new - x;               // 获取鼠标位移量 
            y_new = e.clientY;
            y_offset = y_new - y;
            for(let [index, image] of images.entries()){
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