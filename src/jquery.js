'use strict'

import $ from 'jquery';
import 'jquery-ui-bundle';

$('#root').hide();

$(document).ready( () => {
    const $todo =  $('.todo-app');
    $('#root').show();
    $todo.css('display', 'none').children().hide();;
    $todo.show('fold', 1000);

    setTimeout(function() {
        $('.header').show('fade', 1000);

        setTimeout(function() {
            const $li = $('ul').children();
            $li.hide();
            $('ul').show();
            for(let i = 1; i <= $li.length*2; i++) {
                const $current = $(`ul li:nth-child(${i})`);
                if($li.index($current) % 2 !== 0) {
                    $current.show('drop', {direction: 'right'}, 600);
                } else {
                    $current.show('drop', {direction: 'left'}, 600);
                }
            }

            setTimeout(function() {
                $('.todo-app form').show('slide', {direction: 'down'}, 600);
            }, 1000);
        }, 1000);
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