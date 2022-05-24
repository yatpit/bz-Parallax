function init2(images, positions){
    for(let i of images.values()){
        i.style.setProperty('--offset', `0px`);
    }
    positions.left.style.setProperty('--opac', 0);
    positions.middle.style.setProperty('--opac',1);
    positions.right.style.setProperty('--opac', 0)
}

function bindEvent2(banner, images, positions, setspeed){
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
            positions.left.style.setProperty('--opac', `${-percentage}`);
            positions.middle.style.setProperty('--opac',`${middleOpc}`);
            positions.right.style.setProperty('--opac',0);
        }else{
            positions.left.style.setProperty('--opac', 0);
            positions.middle.style.setProperty('--opac',`${middleOpc}`);
            positions.right.style.setProperty('--opac',`${percentage}`);
        }
    })
    banner.addEventListener('mouseout', (e)=>{
        init2(images, positions);
    })
}

export {init2, bindEvent2}