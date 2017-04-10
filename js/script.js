/**
 * Simple JS Hash Generator
 */


$(document).ready(function () {
    // Auto Focus Elements
    $("textarea").focus(function() {
        // Select all on focus; 
        // Source:  https://stackoverflow.com/questions/5797539/jquery-select-all-text-from-a-textarea
        var $this = $(this);
        $this.select();
        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });  
    // Check if GET value is populated  
    var GETvalue = $.urlParam('value'); 
    if (typeof GETvalue !== 'undefined' && GETvalue) {
        $('#valueinput').val(GETvalue);
        dohash();
    }
});


function dohash() {
    var value = $('#valueinput').val();
    if (typeof value === 'undefined' || !value) { 
        console.log("INPUT Empty, abort!");    
        $('#output').css('visibility','hidden');
    } else {
        console.log("Hashing...");
        $("#r_md5").empty();
        $("#r_md5").append(md5(value));
        $("#r_sha1").empty();
        $("#r_sha1").append(sha1(value));    
        $("#r_sha256").empty();
        $("#r_sha256").append(sha256(value));    
        $("#r_sha384").empty();
        $("#r_sha384").append(sha384(value));    
        $("#r_sha512").empty();
        $("#r_sha512").append(sha512(value));
        $("#r_whirlpool").empty();
        $("#r_whirlpool").append(Whirlpool(value)); 
        $('#output').css('visibility','visible');
    }   

}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

