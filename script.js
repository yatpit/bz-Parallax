import {addCSS1,init1,bindEvent1} from '/paraOne.js'
import {addCSS2,init2,bindEvent2} from '/paraTwo.js'

class Banner{
    constructor(selector, option) {
        // 选出最外层div
        this.banner = document.querySelector(`${selector}`);
        // 引入css文件，动态添加类
        // this.addCSS(option.type)
        // 设置speed初始值
        if(option.speed === undefined){option.speed = 3}

        if(option.type == 'paraOne'){
            // 引入css文件，为banner动态添加类名
            addCSS1(this.banner);

            this.images = this.banner.querySelectorAll('div>img');

            init1(this.images);
            bindEvent1(this.banner, this.images, option.speed);
        }

        if(option.type == 'paraTwo'){
            addCSS2(this.banner);

            this.imgs = this.banner.querySelectorAll('div>img');
            this.left = this.banner.querySelector('.left');
            this.middle = this.banner.querySelector('.middle');
            this.right = this.banner.querySelector('.right');

            init2(this.imgs, this.left, this.middle, this.right);
            bindEvent2(this.banner, this.imgs, this.left, this.middle, this.right, option.speed);
        }
    }
}
export default Banner;