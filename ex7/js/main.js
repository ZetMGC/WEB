const rbtns = [];
rbtns[0] = document.getElementById('rbtn-1');
rbtns[1] = document.getElementById('rbtn-2');
rbtns[2] = document.getElementById('rbtn-3');
rbtns[3] = document.getElementById('rbtn-4');
rbtns[4] = document.getElementById('rbtn-5');

$(document).ready(SliderChangeHandler());

const radio = document.getElementById('pager');
radio.addEventListener('change', SliderChangeHandler);

function SliderChangeHandler(event) {
    if(rbtns[2].checked) {
        $('#img-1').animate({ opacity: "hide" }, "slow");
    }
}