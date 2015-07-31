$(document).on('ready', function() {

	var currentIncome, currentTaxes, newIncome, newTaxes;

	$('[name=current-income]').on('focusout', function(){
		// $('#c-i').text('Current income: ' + $(this).val());
		// Store value in currentIncome variable
		currentIncome = $('[name=current-income]').val();

		// Reset directions
		$('#income-explanation').text('');
		
	})
	$('[name=current-taxes]').on('focusout', function(){
		// $('#c-i').text($(this).val());
		// Store value in currentTaxes variable
		currentTaxes = $('[name=current-taxes]').val();
		
		// Reset directions
		$('#income-explanation').text('');

	})
	$('[name=new-income]').on('focusout', function(){
		// $('#c-i').text($(this).val());
		// Store value in newIncome variable
		newIncome = $('[name=new-income]').val();

		// Reset directions
		$('#income-explanation').text('');
	})
	$('[name=new-taxes]').on('focusout', function(){
		// $('#c-i').text($(this).val());
		// Store value in newTaxes variable
		newTaxes = $('[name=new-taxes]').val();

		// Reset directions
		$('#income-explanation').text('');
	})


	$('[name=current-income]').on('focusin', function(){
		$('#income-explanation')
			.html('<i class="fa fa-info-circle"></i> Enter your current annual income. This example is based on a $15/hour job.')
			.addClass('directions');
	})
	$('[name=current-taxes]').on('focusin', function(){
		$('#income-explanation')
			.html('<i class="fa fa-info-circle"></i> Enter your current Federal & State taxes. Go to www.paycheckcity.com/calculator to enter your specifics, this is based on a Colorado resident.')
			.addClass('directions');	
	})
	$('[name=new-income]').on('focusin', function(){
		$('#income-explanation')
			.html('<i class="fa fa-info-circle"></i> Our average graduate earns $67,000 within 3 months of graduation! Use this figure or experiment with average salaries.')
			.addClass('directions');
	})
	$('[name=new-taxes]').on('focusin', function(){
		$('#income-explanation')
			.html('<i class="fa fa-info-circle"></i> Federal & State taxes based on Colorado resident. Go to www.paycheckcity.com/calculator to get your specific tax amount.')
			.addClass('directions');
	})

	var calcMonthly = function(money){
		return money / 12;
	}

	var calcNet = function(income, taxes){
		return income - taxes;
	}



  
});