$(document).on('ready', function() {

	// Create variables to store user input and calculations
	var currentIncome, currentTaxes, newIncome, newTaxes;

	// When input bar is selected
	// Give the user directions to the right of the input bar
	$('[name=current-income]').on('focusin', function(){
		$('#income-explanation')
			.html('<i class="fa fa-info-circle"></i> Enter your current annual income. This example is based on a $15/hour job.')
			.addClass('directions');
	})
	$('[name=current-taxes]').on('focusin', function(){
		$('#taxes-explanation')
			.html('<i class="fa fa-info-circle"></i> Enter your current Federal & State taxes. Go to www.paycheckcity.com/calculator to enter your specifics, this is based on a Colorado resident.')
			.addClass('directions');	
	})
	$('[name=new-income]').on('focusin', function(){
		$('#new-income-explanation')
			.html('<i class="fa fa-info-circle"></i> Our average graduate earns $67,000 within 3 months of graduation! Use this figure or experiment with average salaries.')
			.addClass('directions');
	})
	$('[name=new-taxes]').on('focusin', function(){
		$('#new-taxes-explanation')
			.html('<i class="fa fa-info-circle"></i> Federal & State taxes based on Colorado resident. Go to www.paycheckcity.com/calculator to get your specific tax amount.')
			.addClass('directions');
	})

	// When the input bar is no longer selected
	// Calculate and display in the table
	$('[name=current-income]').on('focusout', function(){
		
		// Store value in currentIncome variable
		currentIncome = $('[name=current-income]').val();

		// Print values (both annual and monthly) in the table
		$('#current-income').text($(this).val());
		$('#monthly-current-income').text('$' + calcMonthly(currentIncome));

		// Reset directions
		$('#income-explanation').text('');
		
	})
	$('[name=current-taxes]').on('focusout', function(){
		// Store value in currentTaxes variable
		currentTaxes = $('[name=current-taxes]').val();
		// Store value in currentIncome variable
		currentIncome = $('[name=current-income]').val();

		$('#current-taxes').text($(this).val());
		$('#monthly-current-taxes').text('$' + calcMonthly(currentTaxes));
		
		console.log('Net pay: ' + calcNet(currentIncome, currentTaxes));
		console.log('Net pay monthly: ' + calcMonthly(calcNet(currentIncome, currentTaxes)));

		// Reset directions
		$('#taxes-explanation').text('');

	})
	$('[name=new-income]').on('focusout', function(){
		// Store value in newIncome variable
		newIncome = $('[name=new-income]').val();

		$('#new-income').text($(this).val());
		$('#monthly-new-income').text('$' + calcMonthly(newIncome));

		// Reset directions
		$('#new-income-explanation').text('');
	})
	$('[name=new-taxes]').on('focusout', function(){
		// Store value in newTaxes variable
		newTaxes = $('[name=new-taxes]').val();
		// Store value in newIncome variable
		newIncome = $('[name=new-income]').val();

		$('#new-taxes').text($(this).val());
		$('#monthly-new-taxes').text('$' + calcMonthly(newTaxes));

		console.log('New net pay: ' + calcNet(newIncome, newTaxes));
		console.log('New net pay monthly: ' + calcMonthly(calcNet(newIncome, newTaxes)));
		

		// Reset directions
		$('#new-taxes-explanation').text('');
	})


// FUNCTIONS

	var calcMonthly = function(money){
		return money / 12;
	}

	var calcNet = function(income, taxes){
		return income - taxes;
	}


	console.log('Net pay: ');

  
});