
var dd = 3;           // variable based off of how many images
var cnt = -1;         // variable counting through the index


       /*--------------------------------------------
             My object holding my image paths
        -------------------------------------------- */

var myObj = {
imageDir: 'img/kids/',
imageDir2: 'img/xmas/',
imgId1: document.getElementById('imgone'),
imgId2: document.getElementById('imgtwo'),
imgId3: document.getElementById('imgthree'),
imgId4: document.getElementById('imgfour'),
imgId5: document.getElementById('imgfive'),     //About img Ids
imgId6: document.getElementById('imgsix'),
imgId7: document.getElementById('imgseven'),
xmasId1: document.getElementById('xmasone'),
xmasId2: document.getElementById('xmastwo'),
xmasId3: document.getElementById('xmasthree'),    //Xmas img Ids
xmasId4: document.getElementById('xmasfour'),
xmasId5: document.getElementById('xmasfive'),
xmasId6: document.getElementById('xmassix'),
xmasId7: document.getElementById('xmasseven'),
images1: ['Kids11.jpg','Kids12.jpg','Kids01.jpg'],
images2: ['Kids13.jpg','Kids16.jpg','Kids04.jpg'],
images3: ['Kids07.jpg','Kids09.jpg','Kids02.jpg'],    //Aboutme Img Paths
images4: ['Kids10.jpg','Kids14.jpg','Kids03.jpg'],
images5: ['Kids15.jpg','Kids18.jpg','Kids05.jpg'],
images6: ['Kids17.jpg','Kids19.jpg','Kids06.jpg'],
images7: ['Kids20.jpg','Kids21.jpg','Kids08.jpg'],
xmas1: ['XMas10.jpg','XMas12.jpg','XMas02.jpg'],
xmas2: ['XMas13.jpg','XMas14.jpg','XMas03.jpg'],
xmas3: ['XMas07.jpg','XMas08.jpg','XMas01.jpg'],     //Xmas Img Paths
xmas4: ['XMas11.jpg','XMas16.jpg','XMas04.jpg'],
xmas5: ['XMas18.jpg','XMas21.jpg','XMas05.jpg'],
xmas6: ['XMas15.jpg','XMas17.jpg','XMas06.jpg'],
xmas7: ['XMas19.jpg','XMas20.jpg','XMas09.jpg']
}


function chng() {

           /*--------------------------------
              Using jQuery to set opacity
              to 0 in 10 milliseconds
              then fade it in slowly to 100%
              opacity in 2 seconds
           -------------------------------- */


    $(".fadeThis").fadeTo(10,0);
    $(".fadeThis").fadeTo(2000,1);


    cnt++;     //adding one to the count to go through the array index


      /*--------------------------------------------
       Changing IMG directory by 1 each if statement
      -------------------------------------------- */


    if (cnt < dd) {
      if (myObj.imgId1){
      myObj.imgId1.src = myObj.imageDir + myObj.images1[cnt];
      myObj.imgId2.src = myObj.imageDir + myObj.images2[cnt];
      myObj.imgId3.src = myObj.imageDir + myObj.images3[cnt];
      myObj.imgId4.src = myObj.imageDir + myObj.images4[cnt];
      myObj.imgId5.src = myObj.imageDir + myObj.images5[cnt];
      myObj.imgId6.src = myObj.imageDir + myObj.images6[cnt];
      myObj.imgId7.src = myObj.imageDir + myObj.images7[cnt];
      };
      if (myObj.xmasId1){
      myObj.xmasId1.src = myObj.imageDir2 + myObj.xmas1[cnt];
      myObj.xmasId2.src = myObj.imageDir2 + myObj.xmas2[cnt];
      myObj.xmasId3.src = myObj.imageDir2 + myObj.xmas3[cnt];
      myObj.xmasId4.src = myObj.imageDir2 + myObj.xmas4[cnt];
      myObj.xmasId5.src = myObj.imageDir2 + myObj.xmas5[cnt];
      myObj.xmasId6.src = myObj.imageDir2 + myObj.xmas6[cnt];
      myObj.xmasId7.src = myObj.imageDir2 + myObj.xmas7[cnt];
      };
    }


     /*--------------------------------------------
     Changing IMG directory back to 0 for the loop
     -------------------------------------------- */


    else if (cnt == dd) {
      if (myObj.imgId1){
      myObj.imgId1.src = myObj.imageDir + myObj.images1[0];
      myObj.imgId2.src = myObj.imageDir + myObj.images2[0];
      myObj.imgId3.src = myObj.imageDir + myObj.images3[0];
      myObj.imgId4.src = myObj.imageDir + myObj.images4[0];
      myObj.imgId5.src = myObj.imageDir + myObj.images5[0];
      myObj.imgId6.src = myObj.imageDir + myObj.images6[0];
      myObj.imgId7.src = myObj.imageDir + myObj.images7[0];
      };
      if (myObj.xmasId1){
      myObj.xmasId1.src = myObj.imageDir2 + myObj.xmas1[0];
      myObj.xmasId2.src = myObj.imageDir2 + myObj.xmas2[0];
      myObj.xmasId3.src = myObj.imageDir2 + myObj.xmas3[0];
      myObj.xmasId4.src = myObj.imageDir2 + myObj.xmas4[0];
      myObj.xmasId5.src = myObj.imageDir2 + myObj.xmas5[0];
      myObj.xmasId6.src = myObj.imageDir2 + myObj.xmas6[0];
      myObj.xmasId7.src = myObj.imageDir2 + myObj.xmas7[0];
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
