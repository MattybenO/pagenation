let IndexValue=1;
var SpanNumber=document.querySelectorAll('.number span')

showColor(IndexValue);
function btnSlide(n){(showColor(IndexValue = n))}
function sideSlide(n){(showColor(IndexValue += n))}

function showColor(n) {
    var i;
    if(n>SpanNumber.length) {
        IndexValue=1;
    }

    if(n<1) {
        IndexValue=SpanNumber.length;
    }
    for(i=0;i<SpanNumber.length;i++){
        SpanNumber[i].style.background="rgba(0, 0, 0, .3)"
        SpanNumber[i].style.transition='.2s'
    }

    SpanNumber[IndexValue-1].style.background="rgba(225, 0, 225, .59)"
}

const Btn=document.querySelectorAll('button');
Btn.forEach(bt=>{
    bt.addEventListener('click',()=>{
        Btn.forEach(bt=>{
            bt.classList.remove('active')
        })
        bt.classList.add('active')
    })
})