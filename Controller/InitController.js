class InitContoller {
  constructor() {
    this.canvasPool = this._createCanvas("Pool");
    this.canvasBalls = this._createCanvas("Balls");

    this.contextPool = this.canvasPool.getContext("2d");
    this.contextBalls = this.canvasBalls.getContext("2d");

    this.controls = this._createControls();

    this.table = new Table(this.contextPool, this.contextBalls, this);
    this._initializeEventListeners(this.canvasBalls);
  }

  _createCanvas(type) {
    var canvas = document.createElement("canvas");
    canvas.width = "800";
    canvas.height = "400";
    canvas.id = "canvas" + type;
    document.getElementById("container").appendChild(canvas);
    return canvas;
  }

  _createControls() {
    var controls = document.getElementById("controls");
    var ctrlObjects = {};

    //round
    var round = createDivWithID("round", controls);
    round.innerText = "ROUND - ";

    //shots
    var shots = createDivWithID("shots", controls);
    shots.innerText = "SHOTS - ";

    //score
    var score = createDivWithID("score", controls);
    score.innerText = "SCORE - ";

    ctrlObjects.round = round;
    ctrlObjects.shots = shots;
    ctrlObjects.score = score;

    function createDivWithID(id, destination) {
      var div = document.createElement("div");
      div.id = id;
      destination.appendChild(div);
      return div;
    }

    return ctrlObjects;
  }

  _initializeEventListeners(canvasBalls) {
    /*
      this.canvasBalls.addEventListener( 'mousedown', mouse_down, false );
      this.canvasBalls.addEventListener( 'mouseup', mouse_up, false );
      this.canvasBalls.addEventListener( 'mousemove', mouse_move, false );
    */
  }

  updateControls(round, shots, score) {
    document.getElementById("round").innerText = "ROUND - " + round;
    document.getElementById("shots").innerText = "SHOTS - " + shots;
    document.getElementById("score").innerText = "SCORE - " + score;
  }
}

var initContoller = new InitContoller();