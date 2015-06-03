(function($) {

  var Veggies = new spredfast.Poller('veggies');

  Veggies.poll({
	limit: 20,
    frequency: 15
},function(veggies){
	//sort the whole list of veggies
	var list = veggies.sort(function(a,b){return b.count-a.count});
  	var table = $('<table>');
  	var max = 5;
  	
  	$('#info').empty();
    for (var i=0; i < max; i++){
   	  var item = $('<tr class="itemtable">')
      var name = $('<td class="veggiename">').text(list[i].name)
      var votes = $('<td class="mentioncount">').text(roundnum(list[i].count))
      var last = $('<td class="mention">').text('Mentions')
      
      // item.append('<div class="veggiename"><p>' + veggies[i].name + '</p><span>' + addCommas(veggies[i].count) + '</span> + Mentions</div>');

      item.append(name)
      item.append(votes)
      item.append(last)

      table.append(item)
	}   
	//add fading motion to list
	$('#leaderboard').append(table)
	var newi = $('tr.itemtable')
	newi.hide();
	newi.fadeIn(1000).delay(1000);


	//Veggies.poll(veggies, items);
    console.log(veggies);
  })

  //add commas to all the mentions counts
  function roundnum(num){
    while (/(\d+)(\d{3})/.test(num.toString())){
      num = num.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return num;
  }
}(jQuery));

