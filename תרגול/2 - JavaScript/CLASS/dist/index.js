var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, hairColor) {
        this.name = name;
        this.hairColor = hairColor;
    }
    Human.prototype.hobbies = function () {
        console.log('sleep');
    };
    return Human;
}());
var shani = new Human("shani", "brown");
// console.log(shani.hobbies)
// console.log
// shani.hobbies()
var shay = new Human("Shay", "colorfuulllll");
console.log(shay);
shay.hobbies();
var Living = /** @class */ (function (_super) {
    __extends(Living, _super);
    function Living(living, name, hairColor) {
        var _this = _super.call(this, name, hairColor) || this;
        _this.living = living;
        return _this;
    }
    return Living;
}(Human));
var will = new Living("Beer Sheva", "Will", "black");
console.log(will);
