
var levelInfo = {
    current: 1,
    startX: 50,
    startY: 50,
    endX: width/2,
    endY: height/2,
    endWidth: 135,
    endHeight: 60
};

var boxes = [];

// dimensions
boxes.push({
    x: 0,
    y: 0,
    width: width,
    height: 40
});
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 20,
    width: width,
    height: 20
});
boxes.push({
    x: width -10,
    y: 0,
    width: 10,
    height: height
});
// dimensions

boxes.push({
    x: 120,
    y: height - 20,
    width: 80,
    height: 80
});
boxes.push({
    x: 170,
    y: height - 30,
    width: 80,
    height: 80
});
boxes.push({
    x: 220,
    y: height - 40,
    width: 80,
    height: 80
});
boxes.push({
    x: 270,
    y: 150,
    width: 40,
    height: 40
});
