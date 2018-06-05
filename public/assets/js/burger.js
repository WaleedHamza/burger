$(function () {
    $(".devouredBtn").on("click", function (event) {
        // console.log('inside the devouredBtn /public burger.js')
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");
        // console.log(newDevoured)
        var newDevouredState = {
            devoured: !newDevoured
        };

        // Send the PUT request.
        $
            .ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevouredState
            })
            .then(function () {
                // console.log("changed eaten to", newDevoured); Reload the page to get the
                // updated list
                location.reload();
            });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //Frontend Validation
        var burgerInput = $("#input")
            .val()
            .trim();
        // this var will take only letters and white spaces
        var letters = /^[a-zA-Z ]+$/
        if (burgerInput == "" || !burgerInput.match(letters)) {
            alert("Please input burger name letters Only");
            return;
        } else {
            var newBurger = {
                burger_name: burgerInput,
                devoured: false
            };

            // Send the POST request.
            $
                .ajax("/api/burgers", {
                    type: "POST",
                    data: newBurger
                })
                .then(function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                });
        }
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $
            .ajax("/api/burgers/" + id, {type: "DELETE"})
            .then(function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            });
    });
});
