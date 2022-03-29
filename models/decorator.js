const Decorator = function(){
    this.stock = 0
};

Decorator.prototype.addACan = function(){
    this.stock += 1;
};

Decorator.prototype.calculateTotalLiters = function(paintCan){
    return paintCan.liters * this.stock;
};

Decorator.prototype.calculateEnoughPaint = function(room, paintCan){
    let total = this.calculateTotalLiters(paintCan);
    if (room.area > total){
        return false;
    } else {
        return true;
    }
};

Decorator.prototype.paintRoom = function(room, paintCan){
     let totalPaint = this.calculateEnoughPaint(room, paintCan)
    if (totalPaint){
         room.painted = true;
     };
};

module.exports = Decorator;