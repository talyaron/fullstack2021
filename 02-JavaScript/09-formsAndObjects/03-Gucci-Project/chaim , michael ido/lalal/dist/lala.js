var object = {
    objectsTwo: [{ year: 1990, name: 'red' }, { year: 1990, name: 'black' },
        { year: 1992, name: 'yellow' }, { year: 1998, name: 'yellow' },],
    objects: [{ year: 1990, name: 'red' }, { year: 1990, name: 'black' },
        { year: 1992, name: 'yellow' }, { year: 1998, name: 'yellow' },],
    sortByYear: function (list, year) {
        return list.sort(function (item) { return item.year == year; });
    }, renderByYear: function () {
        this.sortByYear();
    }
};
var lala = object.objects;
object.sortByYear(object.objects, 1998);
