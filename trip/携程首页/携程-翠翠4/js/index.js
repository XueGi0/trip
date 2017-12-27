let tabChange = (function(){
      let tabBox=document.getElementById('tabList'),
          tabList=tabBox.getElementsByTagName('li'),
          imgBox=document.getElementsByClassName('imgBox1');
      let tabBox2=document.getElementById('tabList2'),
          tabList2=tabBox2.getElementsByTagName('li'),
          imgBox2=document.getElementsByClassName('imgBox2');
      imgBox=utils.toArray(imgBox);
    imgBox2=utils.toArray(imgBox2);
    let headerBox=document.getElementById('guide'),
        smallHeader=headerBox.getElementsByClassName('smallHeader'),
        guideBody1=headerBox.getElementsByClassName('buyBody'),
        guideBody2=headerBox.getElementsByClassName('travel');
    smallHeader=utils.toArray(smallHeader);
    guideBody1=utils.toArray(guideBody1);
    guideBody2=utils.toArray(guideBody2);

    function change() {
          for (let i = 0; i < tabList.length; i++) {
             let item = tabList[i];

             item.onclick=function () {
                 imgBox[i].style.display='block';
                 item.className='chose';
                 for (let j = 0; j < imgBox.length; j++) {
                     if(i!==j){imgBox[j].style.display='none';
                     tabList[j].className='null';}
                 }
             }

          }
      }
    function change2() {
        for (let i = 0; i < tabList2.length; i++) {
            let item = tabList2[i];

            item.onclick=function () {
                imgBox2[i].style.display='block';
                tabList2[i].className='chose';
                console.log(i);
                for (let j = 0; j < imgBox2.length; j++) {
                    if(i!==j){
                        imgBox2[j].style.display='none';
                        tabList2[j].className=null;
                    }
                }
            }

        }
    }
    function changeGuide() {
        let triangle1=smallHeader[0].getElementsByTagName('i')[0];
        let triangle2=smallHeader[1].getElementsByTagName('i')[0];

        for (let f = 0; f < smallHeader.length; f++) {
            smallHeader[f].onclick=function () {
                if(f===0){
                    guideBody1[0].style.display='block';
                    smallHeader[0].className+=' select';
                    triangle1.style.display='block';
                    triangle2.style.display='none';
                    guideBody2[0].style.display='none';
                    smallHeader[1].className=' smallHeader';
                }else{
                    guideBody1[0].style.display='none';
                    smallHeader[0].className=' smallHeader';
                    guideBody2[0].style.display='block';
                    smallHeader[1].className+=' select';
                    triangle2.style.display='block';
                    triangle1.style.display='none';
                }
            }

        }
    }

       return{
        init:function(){
          change();
          change2();
          changeGuide();
        }
       }
})();
tabChange.init();
