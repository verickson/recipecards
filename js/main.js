//size of card
//this allows the size to change value in the dropdown on display
let size;
function sizeofcard(){
  $("#CardSize .dropdown-menu li a").click(function(){
  	//pulls the size of the cards
    $(this).parents("#CardSize").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    size = $(this).parents("#CardSize").find('.btn').val($(this).data('value'));
	
	//alert(size[0].innerText);
	//const urls = "../Images/Recipe-Card-" + size[0].innerText + "_" + (++i) + ".png";

  	return size;
  });
}

const cardsize = sizeofcard();


// const cardnumber = numberofcards();


// function numberofcards(){

// 	// $("#CardStyle a").each( function(i) {
// 	// 	$(this).append("<img class='col-lg-6 col-md-6 col-sm-12 col-xs-12' src='../Images/Recipe-Card-3x5_" + (++i) + ".png' />");	
		
// 	// });

// 	//pulls number of cards
//     const img = $('#CardStyle a img').attr('src','../Images/Recipe-Card-3x5_' + (++i) + '.png');
	
// 	$("#CardStyle a").append("<img class='col-lg-6 col-md-6 col-sm-12 col-xs-12' src='../Images/Recipe-Card-3x5_" + (++i) + ".png' />");	
//  //    let cardnum = "";

    
// }


$(document).ready( function() {
	editing();	
});


//typeface
//this allows the typeface to change value in the dropdown on display
let type;
function typeforcard(){
  $("#CardType .dropdown-menu li a").click(function(){
    $(this).parents("#CardType").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    type = $(this).parents("#CardType").find('.btn').val($(this).data('value'));
  	
	//alert(type[0].innerText);
	$('.card').css('font-family', type[0].innerText);

  	cardstype();
  });
}

const cardtype = typeforcard();


//the change in the cards and change in typeface
function cardstype(){
	if($('.largecard').attr('src') === '../Images/Recipe-Card-3x5_1.png'){
		$('.card > div').css('padding', '10px');
		if ($('.card').css('font-family') === 'Mightype'){
			$('.editable').css('font-size', '14px');
			$('.titlecontiner').css('line-height', '17px');
			$('.title').css({'font-size': '24px', 'color': 'black'});
			$('.servingcontiner').css({'margin': '0px'});
			$('.servheader').css('font-size', '14px');
			$('.itemheader').css({'font-size': '18px', 'color': 'black', 'display': 'inline-block', 'margin-bottom': '0px'});
			$('.ingredientcontiner').css({'line-height': '19px', 'width': '100%', 'float': 'none', 'height': 'auto', 'max-height': 'auto'});
			$('.directioncontiner').css({'float': 'none', 'width': '100%'});
		}
		else{
			$('.editable').css('font-size', '12px');
			$('.titlecontiner').css('line-height', '22px');
			$('.title').css({'font-size': '18px', 'color': 'black'});
			$('.servingcontiner').css({'margin': '0px'});
			$('.servheader').css('font-size', '12px');
			$('.itemheader').css({'font-size': '14px', 'color': 'black', 'display': 'inline-block', 'margin-bottom': '0px'});
			$('.ingredientcontiner').css({'line-height': '21px', 'width': '100%', 'float': 'none', 'height': 'auto', 'max-height': 'auto'});
			$('.directioncontiner').css({'float': 'none', 'width': '100%'});
		}
	}
	else if($('.largecard').attr('src') === '../Images/Recipe-Card-3x5_2.png'){
		$('.card > div').css('padding', '13px 18px');
		if ($('.card').css('font-family') === 'Mightype'){
			$('.editable').css('font-size', '14px');
			$('.titlecontiner').css('line-height', '17px');
			$('.title').css({'font-size': '20px', 'color': 'black'});
			$('.servingcontiner').css({'margin': '0px'});
			$('.servheader').css('font-size', '14px');
			$('.itemheader').css({'font-size': '18px', 'display': 'block', 'margin-bottom': '6px', 'color': 'black'});
			$('.ingredientcontiner').css({'line-height': '15px', 'width': '83px', 'float': 'left'});
			$('.directioncontiner').css({'line-height': '15px', 'float': 'right', 'width': '227px'});
		}
		else{
			$('.editable').css('font-size', '12px');
			$('.titlecontiner').css('line-height', '24px');
			$('.title').css({'font-size': '16px', 'color': 'black'});
			$('.servingcontiner').css({'margin': '0px'});
			$('.servheader').css('font-size', '12px');
			$('.itemheader').css({'font-size': '14px', 'display': 'block', 'margin-bottom': '6px', 'color': 'black'});
			$('.ingredientcontiner').css({'line-height': '20px', 'width': '83px', 'float': 'left'});
			$('.directioncontiner').css({'line-height': '20px', 'float': 'right', 'width': '227px'});
		}
	}
	else{
		$('.card > div').css('padding', '29px 26px 26px 35px');
		if ($('.card').css('font-family') === 'Mightype'){
			$('.editable').css('font-size', '14px');
			$('.titlecontiner').css('line-height', '12px');
			$('.title').css({'font-size': '24px', 'color': 'orange'});
			$('.servingcontiner').css({'margin-top': '-36px', 'margin-bottom': '20px'});
			$('.servheader').css('font-size', '14px');
			$('.itemheader').css({'font-size': '16px', 'color': 'brown', 'display': 'inline-block', 'margin-bottom': '0px'});
			$('.ingredientcontiner').css({'line-height': '15px', 'width': '100%', 'height': '33px', 'max-height': '33px', 'float': 'none'});
			$('.directioncontiner').css({'line-height': '15px', 'width': '100%', 'float': 'none'});
		}
		else{
			$('.editable').css('font-size', '12px');
			$('.titlecontiner').css('line-height', '20px');
			$('.title').css({'font-size': '18px', 'color': 'orange'});
			$('.servingcontiner').css({'margin-top': '-36px', 'margin-bottom': '20px'});
			$('.servheader').css('font-size', '12px');
			$('.itemheader').css({'font-size': '14px', 'color': 'brown', 'display': 'inline-block', 'margin-bottom': '0px'});
			$('.ingredientcontiner').css({'line-height': '13px', 'width': '100%', 'height': '30px', 'max-height': '30px', 'float': 'none'});
			$('.directioncontiner').css({'line-height': '17px', 'width': '100%', 'float': 'none'});
		}
	}
	return false;
};


//on click of print print the cards on paper
$('#Print').click(function (){
	//grabs all of the items that have the same class
	const cards = document.querySelectorAll('.card');
	let printContents= "";

	//for loop for the cards to be repeated with the inner html info
	for (let i = 0; i < cards.length; i++){
		printContents += cards[i].innerHTML;
	}

	//hides prints and shows the items after based on the info so they don't get messed up on reloading the page
 	$('#Container').hide();
 	$('#printdiv').html(printContents).show();

 	window.print();

 	$('#Container').show();
 	$('#printdiv').hide();
});


//select card style for the page
$('#CardStyle a').click(function (){
	const imgsrc = $(this).find('img').attr('src');

	$('.largecard').attr('src', imgsrc);

  	cardstype();

  	return false;
});


//editable areas for all items
function editing(){
	$('.editable').bind('click', function() {
	        $(this).attr('contentEditable', true);
	    }).blur(
	    function() {
	    	$(this).attr('contentEditable', false);
	});
};


//on click of add card create a new recipe card
let count = 0;
$('#AddNew').click(function (){
	count += 1;

	$("#DefaultCard").clone().insertBefore("#AddNew").attr("id","Card"+count).show();
	$('.cardarea').scrollTop($('.cardarea')[0].scrollHeight);
	editing();
});