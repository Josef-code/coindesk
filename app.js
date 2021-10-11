$(document).ready(function(){
    $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json", 
        dataType: 'json',
        success: function(result){
           $('#usd').text("$" + result['bpi']['USD']['rate']);
           $('#pound').text("£" + result['bpi']['GBP']['rate']);
           $('#euro').text("€" + result['bpi']['EUR']['rate']);
           $('#naira').text("coming soon");
            // console.log(result['bpi']);
      }

  })
})