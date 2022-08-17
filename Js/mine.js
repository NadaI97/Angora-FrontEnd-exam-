$(window).scroll(function(){
    let pTop =$("#about").offset().top;
    let sTop = $(window).scrollTop();
    console.log("hi");

    if(sTop >= pTop){

        $(".navbar").removeClass("oldNav");
        $(".navbar").addClass("newNav");
console.log("hello");

    }else{
        $(".navbar").addClass(".newNav");

        $(".navbar").removeClass(".oldNav");
        console.log("bye");
    }
})