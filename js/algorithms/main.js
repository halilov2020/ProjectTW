let canvas = $("#main-canvas")[0];
let cx = canvas.getContext("2d");
let scale;
let height_step;
let line_width;
let num_lines;
let heights = [];
let delay;
$("#nrLines").change(function() {
  console.log();
  scale = 1/$("#nrLines")[0].value;
  height_step = scale * canvas.height;
  line_width = scale * canvas.width;
  num_lines = canvas.width / line_width;
  heights = [];

  for (let i = 1; i <= num_lines; i++){
    heights.push(i * height_step);
  }

  shuffleLines();
  drawLines();

});

$("#delay").change(function(){

});

$(".submit-button").click(function() {
  let listValue = $('.list').children("option:selected").val();
  switch (listValue){
    case 'shuffle':
      shuffleLines();
      drawLines();
      break;

    case 'bubble-sort':
      bubbleSort();
      break;

    case 'insertion-sort':
      insertionSort();
      break;

    case 'selection-sort':
      selectionSort();
      break;

    case 'quick-sort':
      quickSort(0, heights.length-1);
      break;

    case 'shell-sort':
      shellSort();
      break;
  }
  delay = $("#delay")[0].value;
  scale = 1/$('#nrLines')[0].value;
});
