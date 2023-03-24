// var answer =

// $('#yesorno').change(function() {
//     answer =$(this).val();
//     if(answer=='YES') {
//         $('.willYouAttend').html("Glad you can make.");
//         $('.willYouAttend').addClass("yes");
//     } else if (answer== "NO") {
//         $('.willYouAttend').html("Thank you. Your seat will be given to someone else.");
//         $('.willYouAttend').addClass("no");
//     } else {
//         $('.willYouAttend').html("Please select YES or NO.")
//         $('.willYouAttend').addClass("select")
//     }
// });

// actual working code
var songReq = $(
  '<a href="https://docs.google.com/spreadsheets/d/1rh5Tm7yrFpbQQxEhgDJAWWDREVdHP0E4kXENQDr5hnA/edit#gid=0"><br><br><text>Haga clic aqui para añadir canciones para el baile.</text></a>'
);

$("#yes").on("click", function (event) {
  $(".guestAttending").show();
  $("#header").addClass("yes");
  $(".attending").hide();
  $("#yes").hide();
  $("#no").hide();
  var numGuest = prompt(
    "¿Cuantos ADULTOS nos estaran acompañando? Vea su mensaje de texto para ver cuantos han sido invitados"
  );
  var numGuestInt = Number(numGuest);
  if (numGuestInt === 1) {
    $("#guest1").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Que bueno que nos acompañara.<br>Por favor, desplacese hacia abajo.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 2) {
    $("#guest1").show();
    $("#guest2").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Que bueno que nos acompañara.<br>Por favor, desplacese hacia abajo.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 3) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Que bueno que nos acompañara.<br>Por favor, desplacese hacia abajo.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 4) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#guest4").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Que bueno que nos acompañara.<br>Por favor, desplacese hacia abajo.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 5) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#guest4").show();
    $("#guest5").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Que bueno que nos acompañara.<br>Por favor, desplacese hacia abajo..");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else {
    alert("Por favor entre el numero correcto que nos acompañara.");
    $(".attending").show();
    $("#yes").show();
    $("#no").show();
  }
});

// end of actual working code



