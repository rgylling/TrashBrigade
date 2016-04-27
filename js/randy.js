var dd = 3;           // variable based off of how many images
var cnt = -1;         // variable counting through the index


       /*--------------------------------------------
             My object holding my image paths
        -------------------------------------------- */

var myObj = {
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
images1: ['img/kids/Kids11.jpg','img/kids/Kids12.jpg','img/kids/Kids01.jpg'],
images2: ['img/kids/Kids13.jpg','img/kids/Kids16.jpg','img/kids/Kids04.jpg'],
images3: ['img/kids/Kids07.jpg','img/kids/Kids09.jpg','img/kids/Kids02.jpg'],
images4: ['img/kids/Kids10.jpg','img/kids/Kids14.jpg','img/kids/Kids03.jpg'],
images5: ['img/kids/Kids15.jpg','img/kids/Kids18.jpg','img/kids/Kids05.jpg'],
images6: ['img/kids/Kids17.jpg','img/kids/Kids19.jpg','img/kids/Kids06.jpg'],
images7: ['img/kids/Kids20.jpg','img/kids/Kids21.jpg','img/kids/Kids08.jpg'],
xmas1: ['img/xmas/XMas10.jpg','img/xmas/XMas12.jpg','img/xmas/XMas02.jpg'],
xmas2: ['img/xmas/XMas13.jpg','img/xmas/XMas14.jpg','img/xmas/XMas03.jpg'],
xmas3: ['img/xmas/XMas07.jpg','img/xmas/XMas08.jpg','img/xmas/XMas01.jpg'],
xmas4: ['img/xmas/XMas11.jpg','img/xmas/XMas16.jpg','img/xmas/XMas04.jpg'],
xmas5: ['img/xmas/XMas18.jpg','img/xmas/XMas21.jpg','img/xmas/XMas05.jpg'],
xmas6: ['img/xmas/XMas15.jpg','img/xmas/XMas17.jpg','img/xmas/XMas06.jpg'],
xmas7: ['img/xmas/XMas19.jpg','img/xmas/XMas20.jpg','img/xmas/XMas09.jpg']
};


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
      myObj.imgId1.src = myObj.images1[cnt];
      myObj.imgId2.src = myObj.images2[cnt];
      myObj.imgId3.src = myObj.images3[cnt];
      myObj.imgId4.src = myObj.images4[cnt];
      myObj.imgId5.src = myObj.images5[cnt];
      myObj.imgId6.src = myObj.images6[cnt];
      myObj.imgId7.src = myObj.images7[cnt];
      };
      if (myObj.xmasId1){
      myObj.xmasId1.src = myObj.xmas1[cnt];
      myObj.xmasId2.src = myObj.xmas2[cnt];
      myObj.xmasId3.src = myObj.xmas3[cnt];
      myObj.xmasId4.src = myObj.xmas4[cnt];
      myObj.xmasId5.src = myObj.xmas5[cnt];
      myObj.xmasId6.src = myObj.xmas6[cnt];
      myObj.xmasId7.src = myObj.xmas7[cnt];
      };
    }


     /*--------------------------------------------
     Changing IMG directory back to 0 for the loop
     -------------------------------------------- */


    else if (cnt == dd) {
      if (myObj.imgId1){
      myObj.imgId1.src = myObj.images1[0];
      myObj.imgId2.src = myObj.images2[0];
      myObj.imgId3.src = myObj.images3[0];
      myObj.imgId4.src = myObj.images4[0];
      myObj.imgId5.src = myObj.images5[0];
      myObj.imgId6.src = myObj.images6[0];
      myObj.imgId7.src = myObj.images7[0];
      };
      if (myObj.xmasId1){
      myObj.xmasId1.src = myObj.xmas1[0];
      myObj.xmasId2.src = myObj.xmas2[0];
      myObj.xmasId3.src = myObj.xmas3[0];
      myObj.xmasId4.src = myObj.xmas4[0];
      myObj.xmasId5.src = myObj.xmas5[0];
      myObj.xmasId6.src = myObj.xmas6[0];
      myObj.xmasId7.src = myObj.xmas7[0];
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
