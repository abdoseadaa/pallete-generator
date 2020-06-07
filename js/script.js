$(document).ready(function () {
    var colorVal = "0123456789abcdef";
    $('button').click(function(){
        changeColor()
    })
  
    
    changeColor()
    function changeColor(){
        for(var j=1 ; j <= $('.palette').length ; j++ ){
            var paletteClass = `${$('.palette').attr('class').split(' ')[1]}${j}`;
            colorValue = '#';
            for (var i = 0; i < 6; i++) {
                colorValue += colorGen();
            }
           $(`.${paletteClass}`).css("background" , colorValue)
           $(`.${paletteClass}`).attr('data-color-hex' , colorValue)
        }
        return colorValue;
    }
          function colorGen() {
        var colorVal = "0123456789abcdef";
        colorVal = colorVal.split('');
        var colorDigit = Math.floor(Math.random() * colorVal.length);
        return colorVal[colorDigit]
    }

    $('.palette').mouseover(function(){
        var hoverTxt = `${$(this).attr('class').split(' ')[2]}*`;
        var hoverTxtVal = `${$(this).attr('class').split(' ')[2]} input`;
        $(`.${hoverTxt}`).css('opacity','1');
        $(`.${hoverTxtVal}`).val($(`.${hoverTxtVal}`).parent().attr('data-color-hex'))
    })

    $('.palette').click(function(){
        var hoverTxtcolor = `${$(this).attr('class').split(' ')[2]} input`;
        var copyColor =  $(`.${hoverTxtcolor}`)
        copyColor.select();
        document.execCommand("copy");
       $('.copied-color').fadeIn( 300 );
       $('.copied-color').css('background',copyColor.val())
       $('.copied-color h3').text(copyColor.val())
       console.log(copyColor.val());
       
       setTimeout(function(){
        $('.copied-color').fadeOut(300)
       },1000)
})
$('.copied-color').hide()
})
