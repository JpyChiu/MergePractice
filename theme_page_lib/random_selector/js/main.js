$(document).ready(function() {
    $("#choose_food").click(function()
    {
        var numbers_of_li = $("#choices li").length;
        var random_list_number = Math.floor(Math.random()*numbers_of_li);
        $("#food_name").text($("#choices li").eq(random_list_number).text());
        switch(random_list_number)
            {
                case 0:
                    $("#food_img").attr("src", "images/random_selector/img1.jpg");
                    break;
                case 1:
                    $("#food_img").attr("src", "images/random_selector/img4.webp");
                    break;
                case 2:
                    $("#food_img").attr("src", "images/random_selector/img5.jpg");
                    break;
                case 3:
                    $("#food_img").attr("src", "images/random_selector/img6.jpg");
                    break;
                case 4:
                    $("#food_img").attr("src", "images/random_selector/img7.jpg");
                    break;
                case 5:
                    $("#food_img").attr("src", "images/random_selector/img8.jpg");
                    break;
            }
    });
});