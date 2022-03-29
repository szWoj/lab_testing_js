const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function(){
    let paint_Can;

    beforeEach(function(){
        paint_Can = new PaintCan(10);
    });

    it('should have a number of liters in it', function(){
        const actual = paint_Can.liters;
        assert.strictEqual(actual, 10);
    });

    it('should check if it is not empty', function(){
        const actual = paint_Can.checkEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself', function(){
        paint_Can.emptyCan();
        const actual = paint_Can.checkEmpty();
        assert.strictEqual(actual, true);
    });

    it('should check if it is empty', function(){
        paint_Can.emptyCan()
        const actual = paint_Can.checkEmpty();
        assert.strictEqual(actual, true);
    });
});