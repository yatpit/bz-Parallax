// 添加CSS文件，以及banner添加新的class
function addCSS2(banner){
    let new_element = document.createElement('link');
    new_element.setAttribute('rel', 'stylesheet');
    new_element.setAttribute('href', 'style.css');
    document.body.appendChild(new_element);
    banner.classList.add('wrapper');
    banner.classList.add('wrapper2');
}

function init2(images, left, middle, right){
    for(let i of images.values()){
        i.style.setProperty('--offset', `0px`);
    }
    left.style.setProperty('--opac', 0);
    middle.style.setProperty('--opac',1);
    right.style.setProperty('--opac', 0)
}

function bindEvent2(banner, images, left, middle, right, setspeed){
    let x, offset, percentage, middleOpc;

    banner.addEventListener('mouseover', (e)=>{
        x = e.clientX;
    })
    banner.addEventListener('mousemove', (e)=>{
        offset = e.clientX - x;
        // 实现位移：最前面一层不动，其他层滑动
        for(let img of images.values()){
            // if(index != this.imgs.length-1) {
            img.style.setProperty('--offset', `${offset/30}px`);
            // }
        }
        
        // 实现
        percentage = offset*setspeed/document.body.clientWidth;
        middleOpc = 1-Math.abs(percentage);
        if(offset<0){
            left.style.setProperty('--opac', `${-percentage}`);
            middle.style.setProperty('--opac',`${middleOpc}`);
            right.style.setProperty('--opac',0);
        }else{
            left.style.setProperty('--opac', 0);
            middle.style.setProperty('--opac',`${middleOpc}`);
            right.style.setProperty('--opac',`${percentage}`);
        }
    })
    banner.addEventListener('mouseout', (e)=>{
        init2(images, left, middle, right);
    })
}

export {addCSS2, init2, bindEvent2}