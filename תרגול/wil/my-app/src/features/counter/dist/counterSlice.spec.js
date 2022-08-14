"use strict";
exports.__esModule = true;
var textSlice_1 = require("./textSlice");
describe('counter reducer', function () {
    var initialState = {
        value: 3,
        status: 'idle'
    };
    it('should handle initial state', function () {
        expect(textSlice_1["default"](undefined, { type: 'unknown' })).toEqual({
            value: 0,
            status: 'idle'
        });
    });
    it('should handle increment', function () {
        var actual = textSlice_1["default"](initialState, increment());
        expect(actual.value).toEqual(4);
    });
    it('should handle decrement', function () {
        var actual = textSlice_1["default"](initialState, decrement());
        expect(actual.value).toEqual(2);
    });
    it('should handle incrementByAmount', function () {
        var actual = textSlice_1["default"](initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
