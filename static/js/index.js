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
            $('#result-title').text('馃槉 Este n煤mero no aparece en los datos filtrados.');
            $('#result-text').text('Afortunadamente tus datos esta vez est谩n a salvo. Visita la secci贸n de informaci贸n para saber m谩s sobre c贸mo cuidar tus datos personales.');
          }
          else{
            $('#result-title').text('馃槬 Este n煤mero aparece en los datos filtrados.');
            $('#result-text').text('La informaci贸n filtrada puede inclu铆r: Perfil de Facebook Nombre y apellidos, g茅nero, estado civil, ciudades de nacimiento y residencia, nombre de la escuela o trabajo, correo electr贸nico y fecha de nacimiento.');
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