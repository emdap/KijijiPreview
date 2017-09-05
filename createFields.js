function createFields(src){
	console.log("createFields");

	var about = $(src).find('.header-4086619068').attr('data-reactid','290').html() + '</p>';
	
	if (about.match(/.*About the Poster.*/)){
		about = "";
	} else {
		about = '<p> Name: <strong>' + about +'</strong>';
	}

	var owner = '<div id="rightleft"><span style="float: left;"><p> Account Type: <strong>' + $(src).find('.profileItem-1908837923:first').html() + '</strong></p>';
	var since = '<p>' + $(src).find('.profileItem-1908837923:eq(1)').html() + '</p></span>';
	var address =  $(src).find('.address-3119942078').html()
	var mapAddress = address.replace(/ /g, "+");
	var location = '<p>' + address + '</p>';
	var map = '<p> <a href="https://www.google.com/maps/dir//' + mapAddress + '/"  target="_blank"> <img width="400" src="https://maps.googleapis.com/maps/api/staticmap?center=' + mapAddress + '&zoom=13&scale=1&size=400x200&maptype=roadmap&format=png&visual_refresh=true&markers=size:lrg%7Ccolor:0xff99ff%7Clabel:%7C' + mapAddress + '" alt=""></a></p>';
	var otherAdsLink = $(src).find('.profileLink-4028019214:first').attr('href');
	var otherAds = '<span style="float: right;"><p><a href=' + otherAdsLink + '  target="_blank">Other Ads</a>';
	var webLink =  $(src).find('.profileLink-4028019214:eq(1)').attr('href');
	var web = '<p><a href=' + webLink + '  target="_blank">Website</a></p></span></div>';

	//finalVals = location + map + about + owner + since;
	finalVals = [about, location, map, owner, since, otherAds, web];
	addFields(finalVals);
};

function addFields(fieldArray){
	console.log('add fields');
	var $newHTML = "";
	fieldArray.map(function(f) {$newHTML += f;});
	console.log($newHTML);
	$("#tail").html($newHTML);
};

function test(){
	console.log(test);
};

function addPreviewContent(link){
	console.log("addPreview");
	$.ajax({
		url: link,
		type: 'GET',
		success: function(data){
			createFields(data);
		}
	});
};