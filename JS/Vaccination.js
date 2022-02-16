$(document).ready(function(){
    $("#btn-check").click(function(e){
        if ($("#overview").css("display") == "none"){
            $("article, table").hide();
            $("#overview").css("display", "block");
            $("#dropdown").hide();
        }
    });

    $("#btn-check1").click(function(e){
        if ($("#types").css("display") == "none"){
            $("article").hide();
            $("#types").show();
            $("#dropdown").css({
                "display":"flex",
                "flex-direction":"column"
            });
        }
    });

    $("#btn-check2").click(function(e){
        if ($("#pfizer").css("display") == "none"){
            $("article, table").hide();
            $("#pfizer").css("display", "block");
        }
    });

    $("#btn-check3").click(function(e){
        if ($("#moderna").css("display") == "none"){
            $("article, table").hide();
            $("#moderna").css("display", "block");
        }
    });

    $("#btn-check4").click(function(e){
        if ($("#jj").css("display") == "none"){
            $("article, table").hide();
            $("#jj").css("display", "block");
        }
    });

    $("#btn-check5").click(function(e){
        if ($("#sideEffects").css("display") == "none"){
            $("article, table").hide();
            $("#sideEffects").css("display", "block");
            $("#dropdown").hide();
        }
    });
});