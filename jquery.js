$(function(){

    // changes navbar color from transparent to black when scrolling
    // $(window).on('scroll',function(){
    //     let scroll = $(window).scrollTop();
    //     if (scroll > 20) {
    //       $(".navbar").css("background" , "black");
    //     }
    //     else{
    //         $(".navbar").css("background" , "rgba(0,0,0,0)");  	
    //     }
    // })


    // ====================================
    // modal button links
    // ====================================
    $('#trailerBtn').on('click',function(){
        window.location.href = 'https://www.netflix.com/tw/title/81435684';
    })

    $('.vi').on('click',() => {
        $('#vi-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#vi-modal,#overlay').hide()
    })

    $('.jinx').on('click',() => {
        $('#jinx-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#jinx-modal,#overlay').hide()
    })

    $('.jayce').on('click',() => {
        $('#jayce-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#jayce-modal,#overlay').hide()
    })

    $('.mel').on('click',() => {
        $('#mel-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#mel-modal,#overlay').hide()
    })

    $('.vander').on('click',() => {
        $('#vander-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#vander-modal,#overlay').hide()
    })

    $('.silco').on('click',() => {
        $('#silco-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#silco-modal,#overlay').hide()
    })

    $('.cait').on('click',() => {
        $('#cait-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#cait-modal,#overlay').hide()
    })

    $('.viktor').on('click',() => {
        $('#viktor-modal, #overlay').show()
    })
    $('.close-button').on('click',()=>{
        $('#viktor-modal,#overlay').hide()
    })







    
})

