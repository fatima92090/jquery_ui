$(document).ready(function() {
	$("#draggable1").draggable();
	$( "#draggable" ).draggable();
	$( "#droppable" ).droppable({
		drop: function( event, ui ) {
			$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
		}
	});
	$( "#resizable" ).resizable();
	$( "#accordion" ).accordion();

	var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	$( "#tags" ).autocomplete({
		source: availableTags
	});

	$( "#datepicker" ).datepicker();
	$( "#dialog" ).dialog();

	var spinner = $( "#spinner" ).spinner();
	 $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
     $( "#tabs" ).tabs();

      $( document ).tooltip();


});