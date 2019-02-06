"use strict";
$(document).ready(function () {
    $(".table").addClass("available");
    //Begin avail btn show overlay
    let table = 0;
    let heck = false;
    let selectedTable = undefined;

    $(".table").on("click", function (e) {
       selectedTable = $(e.target);
        $(".picker_container").addClass("no-click");
        $(".form-overlay").show();
        $(".table-number").html("Table Number: " + $(e.target).attr('id')); //fills button id into the Table Number

        $(e.target).removeClass("available").addClass("selected");

        $(".btn-save").click(function () {
            $(".form-overlay").hide();
            if ($(e.target).hasClass("selected")) {
                $(e.target).removeClass("selected").addClass("reserved").unbind();
                $(".picker_container").removeClass("no-click");
            }
        })
        $(".btn-close").on("click", function () {
            $(".form-overlay").hide();
            $(e.target).removeClass("selected").addClass("available");
            $(".picker_container").removeClass("no-click");
         });
         $(document).on("click", ".btn-save", function(e){
            $(selectedTable).removeClass("available").addClass("reserved").attr("name", $("#name").val()).attr("size", $("#size").val());
            $(selectedTable).append(`
            <section class="tooltip">
                <p>Name: ${$(selectedTable).attr("name")}</p>
                <p>Party Size: ${$(selectedTable).attr("size")}</p>
             </section>
            `);
            
          });
        $(document).on("mouseenter", ".reserved", function(e) {
        $(e.target).children().css("display", "block")
        });
        $(document).on("mouseleave", ".tooltip", function() {
        $(".tooltip").css("display", "none")
        });
    });
});
