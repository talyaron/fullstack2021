var zap = {
    items: [],
    addItem: function (item) {
        this.items.push(item);
    },
    removeItem: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
};
