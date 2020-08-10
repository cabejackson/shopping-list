'use strict'

function shoppingList() {
    //user submits shopping list item
    $('#js-shopping-list-form').submit(function (e) {
        e.preventDefault();
        let listedItem = $('#shopping-list-entry').val();
        //console.log(listedItem)

        $('#shopping-list-entry').val('');

        //item is added to list
        //append list so the check & delete button comes with it
        $('.shopping-list').append(`<li>  
        <span class="shopping-item"> ${listedItem} </span>
        <div class= "shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span></button> 
        <button class="shopping-item-delete">
        <span class = "button-label">delete</span> 
        </button></div></li></span>`);
    });
    //user clicks delete button
    $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
        //item is removed from list
        $(this).closest('li').remove();
    });

    //user clicks check button
    $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
        //item is "checked" or striked through effect occurs
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

    });


};



$(shoppingList);

//where does the event delegation fall into this sequence,