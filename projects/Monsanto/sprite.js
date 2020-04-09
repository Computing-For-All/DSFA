function Sprite (pic, x, y, w, h) {
    this.pic = pic;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw = function (ctx) {
        if(this.visible)   ctx.drawImage(
            document.getElementById(this.pic),
            this.x, this.y,
            this.w, this.h
        );
    }
    this.visible = true;
    this.hide = function () {this.visible = false};
    this.show = function () {this.visible = true};
      
 
}