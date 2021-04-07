$('#phoneForm').submit(function(e){
    $('#submit_btn').prop('disabled', true);
    $('#phone').removeClass("is-invalid");
    $("#results").addClass('d-none');
    e.preventDefault();
    $.get( "/phone/" + $('#phone').val(), function() {
      })
        .done(function(response) {
          $("#results").removeClass('d-none');
          if(response == 'Not Found'){
            $('#result-title').text('😊 Este número no aparece en los datos filtrados.');
            $('#result-text').text('Afortunadamente tus datos esta vez están a salvo. Visita la sección de información para saber más sobre cómo cuidar tus datos personales.');
          }
          else{
            $('#result-title').text('😥 Este número aparece en los datos filtrados.');
            $('#result-text').text('La información filtrada puede incluír: Perfil de Facebook Nombre y apellidos, género, estado civil, ciudades de nacimiento y residencia, nombre de la escuela o trabajo, correo electrónico y fecha de nacimiento.');
            $("#result-info").removeClass('d-none');
          }
        })
        .fail(function() {
          $('#phone').addClass("is-invalid");
        })
        .always(function(){
          $('#processing_block').addClass("d-none");
          $('#submit_btn').prop('disabled', false);
        })
});