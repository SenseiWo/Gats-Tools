setInterval(() => {play()},0);
setInterval(() => { RF.list[0].socket.send('s,1,3,5'); }, 2680);
RF.list[0].socket.send('k,0,1');
RF.list[0].socket.send('k,2,1');

// Movement
setInterval(() => {
var distanceX = RD.pool[c3].x*10 - 35000;
var distanceY = RD.pool[c3].y*10 - 35000;
                                        //  ________________
if(distanceX < 0 && distanceY > 0) {    // |               |
  RF.list[0].socket.send('k,1,1');      // |               |
  RF.list[0].socket.send('k,2,1');      // |               |
  RF.list[0].socket.send('k,3,0');      // |  X            |
  RF.list[0].socket.send('k,0,0'); }    // |_______________|
                                        //  ________________
if(distanceX > 0 && distanceY > 0) {    // |               |
  RF.list[0].socket.send('k,0,1');      // |               |
  RF.list[0].socket.send('k,2,1');      // |               |
  RF.list[0].socket.send('k,3,0');      // |           X   |
  RF.list[0].socket.send('k,1,0'); }    // |_______________|
                                        //  ________________
if(distanceY < 0 && distanceX < 0) {    // | X             |
  RF.list[0].socket.send('k,0,0');      // |               |
  RF.list[0].socket.send('k,1,1');      // |               |
  RF.list[0].socket.send('k,3,1');      // |               |
  RF.list[0].socket.send('k,2,0'); }    // |_______________|
                                        //  ________________
if(distanceX > 0 && distanceY < 0) {    // |             X |
  RF.list[0].socket.send('k,3,1');      // |               |
  RF.list[0].socket.send('k,0,1');      // |               |
}},800);                                // |               |
                                        // |_______________|