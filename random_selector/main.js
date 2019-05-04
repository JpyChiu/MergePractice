$(document).ready(function() {
    $("#choose_food").click(function()
    {
        var numbers_of_li = $("#choices li").length;
        var random_list_number = Math.floor(Math.random()*numbers_of_li);
        $("#food_name").text($("#choices li").eq(random_list_number).text());
        switch(random_list_number)
            {
                case 0:
                    $("#food_img").attr("src", "random_selector/image/img1.jpg");
                    break;
                case 1:
                    $("#food_img").attr("src", "random_selector/image/img2.webp");
                    break;
                case 2:
                    $("#food_img").attr("src", "random_selector/image/img3.jpg");
                    break;
            }
    });
});