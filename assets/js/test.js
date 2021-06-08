// function for adding a new LI item.
function addNewList(current, newItems) {
    // Create the new li node.
    var newList = $('<li class="parent-menu parent">');

    // Add the initial a link.
    newList.append('<a href="test">test<span class="toggle"></span></a>');

    // Create and append the submenu-wrapper div to our new list item.
    var div = $('<div class="submenu-wrapper">');
    newList.append(div);

    // Create and append the new ul node to our submenu-wrapper div.
    var ul = $('<ul class="plain">');
    div.append(ul);

    // Loop the 5 (or less) items that have been specified and add them to our new list.
    for (var i = 0; i < newItems.length; i++) {
        // Using append will move the elements that already exist in the original place.
        ul.append(newItems[i]);
    }

    // Add our new list item to the DOM.
    current.after(newList);

    return newList;
}







// Base function to split the lists as required.
function splitLists() {

    // Get all the lists that we want to process.
    var allLists = $(".plain > li.parent-menu");

    // Loop each list and process.
    for (var i = 0; i < allLists.length; i++) {
        var currentList = $(allLists[i]);

        // Get the sub-items that we need to split.
        var items = currentList.find("li");

        // We only care about lists that are more than 5 items.
        if (items.length > 5) {
            // Create array to store the items that we want to move (any after first 5)
            var temp = [];
            // Start at the 6th item an start moving them in blocks of 5.
            for (var j = 5; j < items.length; j++) {
                // Add the item to move to our temp array.
                temp.push($(items[j]));

                // If we have 5 in our temp array then move them to new list.
                if (temp.length == 5) {
                    // Move items with helper function.
                    currentList = addNewList(currentList, temp);
                    // Clear the temp array ready for the next set of items.
                    temp = [];
                }
            }
            // If we have any spare ones that didn't get handle in the length == 5 check, then process them now.
            if (temp.length > 0) {
                currentList = addNewList(currentList, temp);
            }
        }
    }
}

// Run the process.
splitLists();