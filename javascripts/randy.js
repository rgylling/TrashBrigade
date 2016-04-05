var dd = 2;
var cnt = 0;
function chng() {

  $(".fadeThis").fadeTo(10,0);
  $(".fadeThis").fadeTo(2000,1);
    var img1 = document.getElementById('imgone');  // match image ID
    var img2 = document.getElementById('imgtwo');
    var img3 = document.getElementById('imgthree');
    var img4 = document.getElementById('imgfour');
    var img5 = document.getElementById('imgfive');
    var img6 = document.getElementById('imgsix');
    var img7 = document.getElementById('imgseven');
    var xmas1 = document.getElementById('xmasone');  // match image ID
    var xmas2 = document.getElementById('xmastwo');
    var xmas3 = document.getElementById('xmasthree');
    var xmas4 = document.getElementById('xmasfour');
    var xmas5 = document.getElementById('xmasfive');
    var xmas6 = document.getElementById('xmassix');
    var xmas7 = document.getElementById('xmasseven');

    var imageDir = '../img/kids/';     // change to match images folder
    var imageDir2 = '../img/xmas/';

    var images1 = ['Kids11.jpg', 'Kids12.jpg'];
    var images2 = ['Kids13.jpg','Kids16.jpg']
    var images3 = ['Kids07.jpg','Kids09.jpg']
    var images4 = ['Kids10.jpg','Kids14.jpg']
    var images5 = ['Kids15.jpg','Kids18.jpg']
    var images6 = ['Kids17.jpg','Kids19.jpg']
    var images7 = ['Kids20.jpg','Kids21.jpg']

    var xmasOne = ['XMas10.jpg', 'XMas12.jpg'];
    var xmasTwo = ['XMas13.jpg','XMas14.jpg']
    var xmasThree = ['XMas07.jpg','XMas08.jpg']
    var xmasFour = ['XMas11.jpg','XMas16.jpg']
    var xmasFive = ['XMas18.jpg','XMas21.jpg']
    var xmasSix = ['XMas15.jpg','XMas17.jpg']
    var xmasSeven = ['XMas19.jpg','XMas20.jpg']

    cnt++;

    var len1 = images1.length;
    var len2 = images2.length;
    var len3 = images3.length;
    var len4 = images4.length;
    var len5 = images5.length;
    var len6 = images6.length;
    var len7 = images7.length;
    if (cnt < dd) {

        img1.src = imageDir + images1[cnt];
        img2.src = imageDir + images2[cnt];
        img3.src = imageDir + images3[cnt];
        img4.src = imageDir + images4[cnt];
        img5.src = imageDir + images5[cnt];
        img6.src = imageDir + images6[cnt];
        img7.src = imageDir + images7[cnt];
    }
    else if (cnt == len1 || cnt == len2 || cnt == len3 || cnt == len4 || cnt == len5 || cnt == len6 || cnt == len7) {
        img1.src = imageDir + images1[0];
        img2.src = imageDir + images2[0];
        img3.src = imageDir + images3[0];
        img4.src = imageDir + images4[0];
        img5.src = imageDir + images5[0];
        img6.src = imageDir + images6[0];
        img7.src = imageDir + images7[0];
        cnt = 0;
      }

}
/*
function runIt() {
    var time = 600;
    $(".first").fadeIn(time).fadeOut(time, function(){
        $(".second").fadeIn(time).fadeOut(time, function(){
            $(".third").fadeIn(time).fadeOut(time, function(){
                $(".fourth").fadeIn(time).fadeOut(time, runIt);
            });
        });
    });



};
runIt();

*/

setInterval(chng, 7000);
