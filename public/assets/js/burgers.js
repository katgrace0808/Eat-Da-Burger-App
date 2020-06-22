$(function() {
    $(".change-devour").on("click", function(event) {
        console.log("I clicked devour it")
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
        let newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        console.log("I was clicked")
        event.preventDefault();
        let newBurger = {
            burger_name: $("#bur").val().trim(),
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
})