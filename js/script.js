// $(document).ready(function () {
//     // bar
//     $('.bar').click(function () {
//         // console.log($(this).data("step"));

//         $('.bar').addClass('active');
//         $('.bar2').removeClass('active');
//         $('.bar3').removeClass('active');

//         $('.step1').addClass('active2');
//         $('.step2').removeClass('active2');
//         $('.step3').removeClass('active2');
//     })

//     // bar2
//     $('.bar2').click(function () {
//         // console.log(this.className);

//         $('.bar2').addClass('active');
//         $('.bar').removeClass('active');
//         $('.bar3').removeClass('active');

//         $('.step2').addClass('active2');
//         $('.step1').removeClass('active2');
//         $('.step3').removeClass('active2');
//     })

//     // bar3
//     $('.bar3').click(function () {
//         // console.log(this.className);

//         $('.bar3').addClass('active');
//         $('.bar2').removeClass('active');
//         $('.bar').removeClass('active');

//         $('.step3').addClass('active2');
//         $('.step2').removeClass('active2');
//         $('.step1').removeClass('active2');
//     })


//     // btn1
//     $('.btn1').click(function () {
//         // console.log($(this).data("step"));

//         $('.bar2').addClass('active');
//         $('.bar').removeClass('active');
//         $('.bar3').removeClass('active');

//         $('.step2').addClass('active2');
//         $('.step1').removeClass('active2');
//         $('.step3').removeClass('active2');
//     })

//     // btn2
//     $('.btn2').click(function () {
//         // console.log($(this).data("step"));

//         $('.bar3').addClass('active');
//         $('.bar2').removeClass('active');
//         $('.bar').removeClass('active');

//         $('.step3').addClass('active2');
//         $('.step2').removeClass('active2');
//         $('.step1').removeClass('active2');
//     })
// })

// 
$(document).ready(function () {
    // $(".bar").click(function () {
    //     // console.log($(this).data("step"));
    //     let bar = $(this).data("step");
    //     $('.bar').removeClass('active');
    //     $('.bar'+bar).addClass("active");
    //     // 
    //     $('.comman').removeClass('active2');
    //     $('.step'+bar).addClass("active2");
    // })
    // 
    $(".btn").click(function () {
        // console.log($(this).data("step"));
        let bar = $(this).data("step");
        // 
        $('.btn').removeClass('active');
        $('.bar'+bar).addClass("active");
        // 
        $('.comman').removeClass('active');
        $('.step'+bar).addClass("active");
    })
})