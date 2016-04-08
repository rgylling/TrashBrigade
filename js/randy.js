
var dd = 3;           // variable based off of how many images
var cnt = -1;         // variable counting through the index
function chng() {

           /*--------------------------------
              Using jQuery to set opacity
              to 0 in 10 milliseconds
              then fade it in slowly to 100%
              opacity in 2 seconds
           -------------------------------- */


    $(".fadeThis").fadeTo(10,0);
    $(".fadeThis").fadeTo(2000,1);



             /*---------------------------
                       Image Id's
              -------------------------- */


    var img1 = document.getElementById('imgone');    // match image ID
    var img2 = document.getElementById('imgtwo');
    var img3 = document.getElementById('imgthree');
    var img4 = document.getElementById('imgfour');
    var img5 = document.getElementById('imgfive');
    var img6 = document.getElementById('imgsix');
    var img7 = document.getElementById('imgseven');
    var xmas1 = document.getElementById('xmasone');   // match image ID
    var xmas2 = document.getElementById('xmastwo');
    var xmas3 = document.getElementById('xmasthree');
    var xmas4 = document.getElementById('xmasfour');
    var xmas5 = document.getElementById('xmasfive');
    var xmas6 = document.getElementById('xmassix');
    var xmas7 = document.getElementById('xmasseven');

    var imageDir = '../img/kids/';       // change to match images folder
    var imageDir2 = '../img/xmas/';


              /*----------------------------
                 About Page Image Directory
              ---------------------------- */


    var images1 = ['Kids11.jpg','Kids12.jpg','Kids01.jpg'];
    var images2 = ['Kids13.jpg','Kids16.jpg','Kids04.jpg']
    var images3 = ['Kids07.jpg','Kids09.jpg','Kids02.jpg']
    var images4 = ['Kids10.jpg','Kids14.jpg','Kids03.jpg']
    var images5 = ['Kids15.jpg','Kids18.jpg','Kids05.jpg']
    var images6 = ['Kids17.jpg','Kids19.jpg','Kids06.jpg']
    var images7 = ['Kids20.jpg','Kids21.jpg','Kids08.jpg']


             /*---------------------------
               Xmas Page Image Directory
            ---------------------------- */


    var xmasOne = ['XMas10.jpg','XMas12.jpg','XMas02.jpg'];
    var xmasTwo = ['XMas13.jpg','XMas14.jpg','XMas03.jpg']
    var xmasThree = ['XMas07.jpg','XMas08.jpg','XMas01.jpg']
    var xmasFour = ['XMas11.jpg','XMas16.jpg','XMas04.jpg']
    var xmasFive = ['XMas18.jpg','XMas21.jpg','XMas05.jpg']
    var xmasSix = ['XMas15.jpg','XMas17.jpg','XMas06.jpg']
    var xmasSeven = ['XMas19.jpg','XMas20.jpg','XMas09.jpg']


    cnt++;     //adding one to the count to go through the array index


      /*--------------------------------------------
       Changing IMG directory by 1 each if statement
      -------------------------------------------- */


    if (cnt < dd) {
      if (img1){
        img1.src = imageDir + images1[cnt];
        img2.src = imageDir + images2[cnt];
        img3.src = imageDir + images3[cnt];
        img4.src = imageDir + images4[cnt];
        img5.src = imageDir + images5[cnt];
        img6.src = imageDir + images6[cnt];
        img7.src = imageDir + images7[cnt];
      };
      if (xmas1){
        xmas1.src = imageDir2 + xmasOne[cnt];
        xmas2.src = imageDir2 + xmasTwo[cnt];
        xmas3.src = imageDir2 + xmasThree[cnt];
        xmas4.src = imageDir2 + xmasFour[cnt];
        xmas5.src = imageDir2 + xmasFive[cnt];
        xmas6.src = imageDir2 + xmasSix[cnt];
        xmas7.src = imageDir2 + xmasSeven[cnt];
      };
    }


     /*--------------------------------------------
     Changing IMG directory back to 0 for the loop
     -------------------------------------------- */


    else if (cnt == dd) {
      if (img1){
        img1.src = imageDir + images1[0];
        img2.src = imageDir + images2[0];
        img3.src = imageDir + images3[0];
        img4.src = imageDir + images4[0];
        img5.src = imageDir + images5[0];
        img6.src = imageDir + images6[0];
        img7.src = imageDir + images7[0];
      };
      if (xmas1){
        xmas1.src = imageDir2 + xmasOne[0];
        xmas2.src = imageDir2 + xmasTwo[0];
        xmas3.src = imageDir2 + xmasThree[0];
        xmas4.src = imageDir2 + xmasFour[0];
        xmas5.src = imageDir2 + xmasFive[0];
        xmas6.src = imageDir2 + xmasSix[0];
        xmas7.src = imageDir2 + xmasSeven[0];
      };
        cnt = 0;
    }

}


               /*---------------------------
                 Once page loads setInterval
                 counts down from 7 then
                 calls the function above
               -------------------------- */


setInterval(chng, 6000);
