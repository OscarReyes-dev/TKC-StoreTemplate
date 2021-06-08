// function for adding a new LI item.
function addNewList(current, newItems) {
    var newList = $('<li class="parent-menu parent">');

    newList.append('<a href="test">test<span class="toggle"></span></a>');

    var div = $('<div class="submenu-wrapper">');
    newList.append(div);

    var ul = $('<ul class="plain">');
    div.append(ul);

    for (var i = 0; i < newItems.length; i++) {
        ul.append(newItems[i]);
    }

    current.after(newList);

    return newList;
}




function splitLists() {
    var allLists = $(".plain > li.parent-menu");

    for (var i = 0; i < allLists.length; i++) {
        var currentList = $(allLists[i]);
        var items = currentList.find("li");

        if (items.length > 5) {
            var temp = [];
            
            for (var j = 5; j < items.length; j++) {
                temp.push($(items[j]));

                if (temp.length == 5) {
                    currentList = addNewList(currentList, temp);
                    temp = [];
                }
            }
            if (temp.length > 0) {
                currentList = addNewList(currentList, temp);
            }
        }
    }
}

// Run the process.
splitLists();