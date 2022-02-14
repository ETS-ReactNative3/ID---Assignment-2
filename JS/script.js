$(document).ready(function(){
    $("#btn-check").click(function(e){
        if ($("#pfizer").css("display") == "none"){
            $("#pfizer").css("display", "block");
        } else {
            $("#pfizer").css("display", "none");
        };
    })

    $("#btn-check2").click(function(e){
        if ($("#mordena").css("display") == "none"){
            $("#mordena").css("display", "block");
        } else {
            $("#mordena").css("display", "none");
        };
    })

    $("#btn-check3").click(function(e){
        if ($("#jj").css("display") == "none"){
            $("#jj").css("display", "block");
        } else {
            $("#jj").css("display", "none");
        };
    })
})