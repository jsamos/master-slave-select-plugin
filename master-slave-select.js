$.fn.masterSlave = function( options ) {

    // This is the easiest way to have default options.
    var settings = $.extend({
        // These are the defaults.
        urlBase: "",
        slave: "",
        valAtrr: "",
        textAtrr: ""
    }, options );

    this.change(
        function(){
            
            selected = $(this, "option:selected").val();
            $(settings.slave).empty();

            $.getJSON(settings.urlBase + selected, function(data) {

                $.each(
                    data,
                    function(k, v){
                        $(settings.slave).append('<option value="'+v[settings.valAttr]+'">'+v[settings.textAtrr]+'</option>');
                    }
                );

            });
            
        }
    );

};