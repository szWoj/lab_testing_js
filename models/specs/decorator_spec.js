const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function(){
    let decorator;


    beforeEach(function(){
        decorator = new Decorator();

    });

    it('should begin with no stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, 0);
    });

    it('should be able to add a can', function(){
        decorator.addACan();
        const actual = decorator.stock;
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate total liters paint', function(){
        let paint_can = new PaintCan(5);
        decorator.addACan();
        const actual = decorator.calculateTotalLiters(paint_can);
        assert.strictEqual(actual, 5)
    });

    it('should be able to calculate if it has enough paint', function(){
        let room = new Room(50);
        let paint_can = new PaintCan(5);
        const actual = decorator.calculateEnoughPaint(room, paint_can);
        assert.strictEqual(actual, false);
    });
    it('should be able to paint room if it has enough paint is stock', function(){
        let room = new Room(50);
        let paint_can = new PaintCan(5);
        decorator.paintRoom(room, paint_can);
        const actual = room.painted
        assert.strictEqual(actual, false);
    });
});