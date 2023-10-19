const rbtns = [];
rbtns[0] = document.getElementById('rbtn-1');
rbtns[1] = document.getElementById('rbtn-2');
rbtns[2] = document.getElementById('rbtn-3');
rbtns[3] = document.getElementById('rbtn-4');
rbtns[4] = document.getElementById('rbtn-5');

const btn_r = document.getElementById('btn-r');
const btn_l = document.getElementById('btn-l');

$(document).ready(SliderChangeHandler(0));

const radio = document.getElementById('pager');
radio.addEventListener('change', SliderChangeHandler);

function RadioChanger(direction) {
    if (direction === 'right') {

        if (rbtns[0].checked) rbtns[1].checked = true;
        else if (rbtns[1].checked) rbtns[2].checked = true;
        else if (rbtns[2].checked) rbtns[3].checked = true;
        else if (rbtns[3].checked) {
            rbtns[4].checked = true;
        }
            
    } else if (direction === 'left') {
        if (rbtns[4].checked) rbtns[3].checked = true;
        else if (rbtns[3].checked) rbtns[2].checked = true;
        else if (rbtns[2].checked) rbtns[1].checked = true;
        else if (rbtns[1].checked) {
            rbtns[0].checked = true;
        }
    }
    SliderChangeHandler();
}

function SliderChangeHandler(duration) {
    if (rbtns[0].checked) {
        btn_l.disabled = true;
    } else if (rbtns[4].checked) {
        btn_r.disabled = true;
    } else {
        $('#btn-l').removeAttr("disabled");
        $('#btn-r').removeAttr("disabled");
    }
    // if(rbtns[0].checked) {
    //     $('#img-1').animate({ "max-width": "262px", "height": "250px"}, 500);
    //     $('#img-2').animate({ "max-width": "190px", "height": "190px"}, 500);

    //     $('#img-3').animate({ "max-width": "0px"}, 500);
    //     $('#img-4').animate({ "max-width": "0px"}, 500);
    //     $('#img-5').animate({ "max-width": "0px"}, 500);
    // } else if(rbtns[1].checked) {
    //     $('#img-1').animate({ "max-width": "190px", "height": "190px"}, 500);
    //     $('#img-2').animate({ "max-width": "262px", "height": "250px"}, 500);
    //     $('#img-3').animate({ "max-width": "190px", "height": "190px"}, 500);

    //     $('#img-4').animate({ "max-width": "0px"}, 500);
    //     $('#img-5').animate({ "max-width": "0px"}, 500);
    // } else if(rbtns[2].checked) {
    //     $('#img-2').animate({ "max-width": "190px", "height": "190px"}, 500);
    //     $('#img-3').animate({ "max-width": "262px", "height": "250px"}, 500);
    //     $('#img-4').animate({ "max-width": "190px", "height": "190px"}, 500);

    //     $('#img-1').animate({ "max-width": "0px"}, 500);
    //     $('#img-5').animate({ "max-width": "0px"}, 500);
    // } else if(rbtns[3].checked) {
    //     $('#img-3').animate({ "max-width": "190px", "height": "190px"}, 500);
    //     $('#img-4').animate({ "max-width": "262px", "height": "250px"}, 500);
    //     $('#img-5').animate({ "max-width": "190px", "height": "190px"}, 500);

    //     $('#img-1').animate({ "max-width": "0px"}, 500);
    //     $('#img-2').animate({ "max-width": "0px"}, 500);
    // } else if(rbtns[4].checked) {
    //     $('#img-4').animate({ "max-width": "190px", "height": "190px"}, 500);
    //     $('#img-5').animate({ "max-width": "262px", "height": "250px"}, 500);

    //     $('#img-1').animate({ "max-width": "0px"}, 500);
    //     $('#img-2').animate({ "max-width": "0px"}, 500);
    //     $('#img-3').animate({ "max-width": "0px"}, 500);
    // } 
    for (var i = 0; i < rbtns.length; i++) {
        if (rbtns[i].checked && (i !== 0 || i !== rbtns.length - 1)) {
            $('#img-'+(i-1)).animate({ "max-width": "190px", "height": "190px"}, 500);
            $('#img-'+i).animate({ "max-width": "262px", "height": "250px"}, 500);
            $('#img-'+(i+1)).animate({ "max-width": "190px", "height": "190px"}, 500);

            for(var j = i+2; j < rbtns.length; j++) $('#img-'+j).animate({ "max-width": "0px"}, 500);
            for(var k = i-2; k >= 0; k--) $('#img-'+k).animate({ "max-width": "0px"}, 500);
        } else if (rbtns[i].checked) {
            if (i === 0) {
                $('#img-'+i).animate({ "max-width": "262px", "height": "250px"}, 500);
                $('#img-'+(i+1)).animate({ "max-width": "190px", "height": "190px"}, 500);

                for (var j = i+2; j < rbtns.length; j++) $('#img-'+j).animate({ "max-width": "0px"}, 500);
            } else if (i === rbtns.length-1) {
                $('#img-'+i).animate({ "max-width": "262px", "height": "250px"}, 500);
                $('#img-'+(i-1)).animate({ "max-width": "190px", "height": "190px"}, 500);

                for (var j = i-2; j >= 0; j--) $('#img-'+j).animate({ "max-width": "0px"}, 500);
            }
        }
    }
}