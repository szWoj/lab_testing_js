const PaintCan = function(liters){
    this.liters = liters;
};

PaintCan.prototype.checkEmpty = function(){
    if (this.liters === 0){
        return true;
    } else {
        return false;
    }
}; //return !this.liters

PaintCan.prototype.emptyCan = function(){
    this.liters = 0;
};

module.exports = PaintCan;