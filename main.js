$(document).on('ready', function() {

	$('[name=current-income]').on('focusout', function(){
		$('#c-i').text('Current income: ' + $(this).val());
		$('#income-explanation').text('');
	})
	$('[name=current-taxes]').on('focusout', function(){
		$('#c-i').text($(this).val());
	})
	$('[name=new-income]').on('focusout', function(){
		$('#c-i').text($(this).val());
	})
	$('[name=new-taxes]').on('focusout', function(){
		$('#c-i').text($(this).val());
	})


	$('[name=current-income]').on('focusin', function(){
		$('#income-explanation').text('Go here');
	})
	$('[name=current-income]').on('focusin', function(){
		$('#c-i').text($(this).val());
	})
	$('[name=current-income]').on('focusin', function(){
		$('#c-i').text($(this).val());
	})
	$('[name=current-income]').on('focusin', function(){
		$('#c-i').text($(this).val());
	})



  
});