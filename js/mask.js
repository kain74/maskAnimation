const wrap = document.querySelector('main');
const btns = wrap.querySelectorAll('#navi li');
const panels = wrap.querySelectorAll('section article');
const brs = wrap.querySelectorAll('br')
const videos = wrap.querySelectorAll('video');
window.addEventListener('DOMContentLoaded', ()=>{
    btns.forEach((btn, index)=>{
        btn.addEventListener('click', e =>{
            for(let i=0; i<btns.length; i++){
                btns[i].classList.remove('on');
                btns[i].ariaSelected = false;
                videos[i].pause();
                if(panels[i].classList.contains('on')){
                    panels[i].classList.add('mask');
                }
            }
            btns[index].classList.add('on');
            btns[index].ariaSelected = true;
            panels[index].classList.add('lower');
            videos[index].play();
            setTimeout(()=>{
                for(let i=0; i<panels.length; i++){
                    if(panels[i].classList.contains('on')){
                        panels[i].classList.remove('on');
                        panels[i].classList.remove('mask');
                    }
                }
                panels[index].classList.remove('lower');
                panels[index].classList.add('on');
            },1400)
        });
    });
});





