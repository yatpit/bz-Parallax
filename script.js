class Banner{
    constructor(selector, option) {
        // 选出最外层div
        this.banner = document.querySelector(`${selector}`);
        // 引入css文件，动态添加类
        this.addCSS(option.type)

        if(option.type == 'type1'){
            this.images = this.banner.querySelectorAll('div>img');
        }

        if(option.type == 'type2'){
            this.imgs = this.banner.querySelectorAll('div>img');
            this.left = this.banner.querySelector('.left');
            this.middle = this.banner.querySelector('.middle');
            this.right = this.banner.querySelector('.right');
        }

        this.init(option.type);
        this.bindEvent(option.type);
    }

    addCSS(type){
        let new_element = document.createElement('link');
        new_element.setAttribute('rel', 'stylesheet');
        new_element.setAttribute('href', 'style.css');
        document.body.appendChild(new_element);

        this.banner.classList.add('wrapper');
        if(type == 'type1'){
            this.banner.classList.add('wrapper1');
        }
        if(type == 'type2'){
            this.banner.classList.add('wrapper2');
        }
    }

    init(type) {
        if(type == 'type1'){
            // css参数初始化
            for(let image of this.images.values()){
                image.style.setProperty('--Xoffset', `0px`);
                image.style.setProperty('--Yoffset', `0px`);
            }
        }
        if(type == 'type2'){
            // css参数初始化
            for(let i of this.imgs.values()){
                i.style.setProperty('--offset', `0px`);
            }
            this.left.style.setProperty('--opac', 0);
            this.middle.style.setProperty('--opac',1);
            this.right.style.setProperty('--opac', 0)
        }
    }

    bindEvent(type) {
        let x, y, x_offset, y_offset;
        let offset, percentage, middleOpc;

        this.banner.addEventListener('mouseover', (e)=>{
            // 获取鼠标进入点
            if(type == 'type1'){
                x = e.clientX;
                y = e.clientY;
            }
            if(type == 'type2'){
                x = e.clientX;
            }
        })

        this.banner.addEventListener('mousemove', (e)=>{

            if(type == 'type1'){
                // 实现位移
                x_offset = e.clientX - x; 
                y_offset = e.clientY - y;
                for(let [index, image] of this.images.entries()){
                    // console.log([index, image])
                    let speed = (6 - index)*10;
                    let Xoffset = x_offset / speed;
                    let Yoffset = y_offset / speed;
                    image.style.setProperty('--Xoffset', `${Xoffset}px`);
                    image.style.setProperty('--Yoffset', `${Yoffset}px`);
                }
            }

            if(type == 'type2'){
                offset = e.clientX - x;
                // 实现位移：最前面一层不动，其他层滑动
                for(let [index, img] of this.imgs.entries()){
                    if(index != this.imgs.length-1) {
                        img.style.setProperty('--offset', `${offset/30}px`);
                    }
                }
                
                // 实现
                percentage = offset*1.5/document.body.clientWidth;
                middleOpc = 1-Math.abs(percentage);
                if(offset<0){
                    this.left.style.setProperty('--opac', `${-percentage}`);
                    this.middle.style.setProperty('--opac',`${middleOpc}`);
                    this.right.style.setProperty('--opac',0);
                }else{
                    this.left.style.setProperty('--opac', 0);
                    this.middle.style.setProperty('--opac',`${middleOpc}`);
                    this.right.style.setProperty('--opac',`${percentage}`);
                }
            }
        })

        this.banner.addEventListener('mouseout', (e)=>{
            this.init(type)
        })

    }
}
export default Banner;