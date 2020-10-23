(function($){

  //  Ready Function
  $(document).ready(function(){

    //  Congrats Button Click
    $(document).on('click','#congrats',function(e){
      e.preventDefault();
      $('#congrats_modal').modal('show');
    });

  });

})(jQuery)
