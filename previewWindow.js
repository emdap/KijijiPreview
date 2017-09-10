function addFields(fieldArray){
	//add the new content to preview 
	var $newHTML = "";
	
	fieldArray.map(function(f) {
		if (f!='undefined'){
			$newHTML += f;
		}
	});

	$('.tail').not('.inactive').html($newHTML);
};

var curReq = null; //for tracking ajax requests

function addPreviewContent(link){
	//get webpage at link
	curReq = $.ajax({
		url: link,
		type: 'GET',
		beforeSend: function() {
			if (curReq != null){
				curReq.abort();
				curReq = null;
			}
		},
		success: function(data){
			addFields(createFields(data, link));
			$('.tail').not('.inactive').css({width: 300});	
		}
	});
};

function initPreview(divHght){
	//initialize newDiv preview 
	var $preview = $('<div class="tail active" style="width: 75px" tabindex="0" scrollTop="0"><p>Loading...<p></div>');
	$('body').append($preview);
	$('.tail.active').hide();
	return $('.tail.active');
};
