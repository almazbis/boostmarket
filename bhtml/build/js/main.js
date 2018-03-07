'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

	$('a[to-toggle], button[to-toggle], div[to-toggle], span[to-toggle]').on('click', function () {
		var el = $(this).attr('to-toggle');

		$(el).toggleClass('show');
	});

	$('input[to-toggle]').change(function () {
		var el = $(this).attr('to-toggle');

		if (this.checked) {
			$(el).addClass('show');
		} else {
			$(el).removeClass('show');
		}
	});;

	$('.js-select-options li').on('click', function () {
		var selectValue = $(this).attr('data-value');
		var selectHTML = $(this).html();
		var selectInput = $(this).parent().siblings('.js-select-input');
		var selectTrigger = $(this).parent().siblings('.js-select-trigger');

		selectInput.val(selectValue);
		selectTrigger.html(selectHTML);
		$(this).parent('.js-select-options').removeClass('active');
	});

	$('.js-select-trigger').on('click', function () {
		var selectOptions = $(this).siblings('.js-select-options');

		selectOptions.toggleClass('active');
		$(this).parents('.select').toggleClass('active');
	});;

	var menuBtn = document.getElementById('menu-btn');
	var menuList = document.getElementById('header-menu-links');

	var isMenuExpanded = false;

	menuBtn.addEventListener('click', function () {

		if (isMenuExpanded) {

			menuList.classList.remove('expanded');
			menuBtn.classList.remove('expanded');

			isMenuExpanded = false;
		} else {

			menuList.classList.add('expanded');
			menuBtn.classList.add('expanded');

			isMenuExpanded = true;
		}
	});
	;
});