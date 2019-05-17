$("#mover1").hide();
$("#mover2").hide();
$("#mover3").hide();
$("#mover4").hide();
$("#mover5").hide();
$("#mover6").hide();
$("#mover7").hide();
$("#mover8").hide();
$("#mover9").hide();
$("#mover10").hide();
$("#mover11").hide();
$("#mover12").hide();
$("#mover13").hide();

$("#video1").on("mouseover", function () {
   $("#mover1").show();
}).on("mouseleave", function () {
   $("#mover1").hide();
});

$("#video2").on("mouseover", function () {
   $("#mover2").show();
}).on("mouseleave", function () {
   $("#mover2").hide();
});

$("#video3").on("mouseover", function () {
   $("#mover3").show();
}).on("mouseleave", function () {
   $("#mover3").hide();
});

 $("#video4").on("mouseover", function () {
   $("#mover4").show();
}).on("mouseleave", function () {
   $("#mover4").hide();
});

$("#video5").on("mouseover", function () {
   $("#mover5").show();
}).on("mouseleave", function () {
   $("#mover5").hide();
});


 $("#video6").on("mouseover", function () {
   $("#mover6").show();
}).on("mouseleave", function () {
   $("#mover6").hide();
});

$("#video7").on("mouseover", function () {
   $("#mover7").show();
}).on("mouseleave", function () {
   $("#mover7").hide();
});

$("#video8").on("mouseover", function () {
   $("#mover8").show();
}).on("mouseleave", function () {
   $("#mover8").hide();
});

 $("#video9").on("mouseover", function () {
   $("#mover9").show();
}).on("mouseleave", function () {
   $("#mover9").hide();
});

$("#video10").on("mouseover", function () {
   $("#mover10").show();
}).on("mouseleave", function () {
   $("#mover10").hide();
});

 $(" #video12").on("mouseover", function () {
   $("#mover11").show();
}).on("mouseleave", function () {
   $("#mover11").hide();
});

$("#video11").on("mouseover", function () {
  $("#mover13").show();
}).on("mouseleave", function () {
  $("#mover13").hide();
});

$("#penstore").on("mouseover", function () {
   $("#mover12").show();
}).on("mouseleave", function () {
   $("#mover12").hide();
});

 $("#dickblick").on("mouseover", function () {
   $("#mover13").show();
}).on("mouseleave", function () {
   $("#mover13").hide();
});

$(document).on('mousemove', function(e){
 $('#mover1').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover2').css({
    left:  e.pageX +5,
    top:   e.pageY -200
 });

   $('#mover3').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover4').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover5').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
  $('#mover6').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover7').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });

   $('#mover8').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover9').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
 $('#mover10').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
  $('#mover11').css({
    left:  e.pageX +5,
    top:   e.pageY -300
 });
    $('#mover12').css({
    left:  e.pageX +5,
    top:   e.pageY +5
 });
  $('#mover13').css({
    left:  e.pageX +5,
    top:   e.pageY -300
 });

});

function handle_mousedown(e){
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();
    function handle_dragging(e){
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    }
    $('body')
    .on('mouseup', handle_mouseup)
    .on('mousemove', handle_dragging);
}
$('#mus1').mousedown(handle_mousedown);
$('#mus2').mousedown(handle_mousedown);
$('#mus3').mousedown(handle_mousedown);
$('#mus4').mousedown(handle_mousedown);
