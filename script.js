  $(document).ready(function(){
        var value = ""
        $('input[type=submit]').click(function() {
            var value = $('input[type=text]').val();
            var res = value.replace(/foo/gi,"bar");
            $("ul").append('<li>'+res+'</li>');
            return false;
        });

    });
