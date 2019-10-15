// toggle todos
$("ul").on('click', "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Creating new todo on input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // getting the value of the input
        let todoText = $(this).val();
        $(this).val("");
        // creating a new li and adding it to the lu
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
    }
});