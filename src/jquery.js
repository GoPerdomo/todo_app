'use strict'

import $ from 'jquery';
import 'jquery-ui-bundle';

$('#root').hide();

$(document).ready( () => {
    $('#root').show();
    $('.todo-app').children().hide();
    $('.todo-app').css('display', 'none');
    $('.todo-app').show('fold', 'slow');

    setTimeout(function() {
        $('.header').show('fade', 'slow');
        setTimeout(function() {
            $('ul').show('drop', {direction: 'right'}, 'slow');
            $('.todo-app form').show('drop', {direction: 'left'}, 'slow');
        }, 500);
    }, 1000);
});

const highlightIt = (element, action) => {
    const $el = $(element);
    let hlColor = '#ffff99';
    if (action === 'del') {
        hlColor = '#ea7373';
    }
    $el.effect('highlight', {color: hlColor}, 200);
}

export { highlightIt }