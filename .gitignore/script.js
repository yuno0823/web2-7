onload = function(){
  // canvasエレメントを取得
  var canvas = document.getElementById('canvas');
  canvas.width = 500;
  canvas.height = 300;

  var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

 
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
