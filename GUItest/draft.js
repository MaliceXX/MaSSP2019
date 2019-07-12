var name2;
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah') 
                .attr('src', e.target.result)
                //.width(150)
                //.height(200);
        };
        //console.log(input.files[0])
        reader.readAsDataURL(input.files[0]);
        console.log(input.files[0].name)
        name2 = input.files[0].name;
        //alert(input.files[0].lastModified)
    }
}
function myFunction(){
    //alert(name2)
    $('#imagetwo')
        .attr('src',name2)
        //.width(150)
        //.height(200);
}
var distance = -1;
var superLoop;
function bamnut(){
    distance -=1000;
    console.log(distance)
    if (distance < 0){
        myFunction();
        clearInterval(superLoop);
        return;
    }
}

function bam2(){
    if (distance >= 0 ) return;
    $('#imagetwo')
        .attr('src','#')
    distance = 3000;
    superLoop = setInterval(bamnut,1000);
    return;
}
