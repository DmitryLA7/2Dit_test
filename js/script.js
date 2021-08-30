$(document).ready(function () {
	$('.team__name').click(function (event) {
		$('.team__name').toggleClass('active')
		$('.team__items').toggleClass('active')
	})
})