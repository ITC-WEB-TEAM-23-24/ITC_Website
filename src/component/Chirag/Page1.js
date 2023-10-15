import React, { useEffect } from 'react'
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';




function Page1() {

  //  useEffect(()=>{
  //   const container = document.querySelector(".main_container");
  //   const econtainer = document.querySelector(".emain_container");
  //   const row1 = document.getElementById("translate1");
  //   const row2 = document.getElementById("translate2");
  //   let scrollThreshold = container.offsetWidth;
  //   window.addEventListener('resize', function() {
  //     scrollThreshold = container.offsetWidth;
  //   });
  //   console.log(scrollThreshold);
  //   let scrolline = document.querySelector(".scroll");

  //   container.addEventListener("wheel", (e) => {
  //     e.preventDefault();

  //     if (scrollThreshold > 1900 && container.scrollLeft > scrollThreshold) {
  //       if (container.scrollLeft > scrollThreshold) {
  //         container.scrollTop += e.deltaY;
  //         scrolline.style.width = container.scrollLeft + "px";
  //         console.log(container.scrollTop);
  //         // console.log(container.scrollLeft);
  //         if (container.scrollTop === 0) {
  //           container.scrollLeft += e.deltaY;
  //         }
  //       }
  //     } else if (container.scrollLeft > scrollThreshold + 45) {
  //       container.scrollTop += e.deltaY;
  //       scrolline.style.width = container.scrollLeft + "px";
  //       console.log(container.scrollTop);
            
  //       // if(container.scrollTop>600 && container.scrollTop<1000){
  //       //   const x = -(0.250*container.scrollTop)+200;
  //       //   console.log(x);
  //       //   row1.style.transform = `translateX(${x}%)`;
  //       //   row2.style.transform = `translateX(${x}%)`;
  //       // }
  //       // console.log(container.scrollLeft);
  //       if (container.scrollTop === 0) {
  //         container.scrollLeft += e.deltaY;
  //       }
  //     } else {
  //       container.scrollLeft += e.deltaY;
  //       scrolline.style.width = container.scrollLeft + "px";
  //       // console.log(container.scrollLeft);
  //     }
  //   });

  //  },[])

   useEffect(()=>{
    const container = document.querySelector(".main_container");
    const econtainer = document.querySelector(".emain_container");
    const row1 = document.getElementById("translate1");
    const row2 = document.getElementById("translate2");
    let scrollThreshold = container.offsetWidth;
    window.addEventListener('resize', function() {
      scrollThreshold = container.offsetWidth;
    });
    console.log(scrollThreshold);
    let scrolline = document.querySelector(".scroll");

    container.addEventListener("wheel", (e) => {
      e.preventDefault();

      if (scrollThreshold > 1900 && container.scrollLeft > scrollThreshold) {
        if (container.scrollLeft > scrollThreshold) {
          container.scrollTop += e.deltaY;
          scrolline.style.width = container.scrollLeft + "px";
          console.log(container.scrollTop);
          // console.log(container.scrollLeft);
          if (container.scrollTop === 0) {
            container.scrollLeft += e.deltaY;
          }
          if(container.scrollTop>=1050){
          const first=document.getElementById('first');
          const second=document.getElementById('second');
          const third=document.getElementById('third');
          const imgrol3=document.getElementById('imgrol1');
          const imgrol2=document.getElementById('imgrol2');
         const imgrol1=document.getElementById('imgrol3');
         const zoom=document.getElementById('zoom');
         first.classList.add('movement');
         third.classList.add('movement');
         second.classList.add('movementr');
         imgrol1.classList.add('imgrol');
         imgrol3.classList.add('imgrol');
         imgrol2.classList.add('imgrol');
         zoom.classList.add('zoom');
        }           
        }
      } else if (container.scrollLeft > scrollThreshold + 45) {
        container.scrollTop += e.deltaY;
        scrolline.style.width = container.scrollLeft + "px";
        console.log(container.scrollTop);

        if(container.scrollTop>=1050){
          const first=document.getElementById('first');
          const second=document.getElementById('second');
          const third=document.getElementById('third');
          const imgrol3=document.getElementById('imgrol1');
          const imgrol2=document.getElementById('imgrol2');
         const imgrol1=document.getElementById('imgrol3');
         const zoom=document.getElementById('zoom');
         first.classList.add('movement');
         third.classList.add('movement');
         second.classList.add('movementr');
         imgrol1.classList.add('imgrol');
         imgrol3.classList.add('imgrol');
         imgrol2.classList.add('imgrol');
         zoom.classList.add('zoom');
        }         
        // if(container.scrollTop>600 && container.scrollTop<1000){
        //   const x = -(0.250*container.scrollTop)+200;
        //   console.log(x);
        //   row1.style.transform = `translateX(${x}%)`;
        //   row2.style.transform = `translateX(${x}%)`;
        // }
        // console.log(container.scrollLeft);
        if (container.scrollTop === 0) {
          container.scrollLeft += e.deltaY;
        }
      } 
      else {
        container.scrollLeft += e.deltaY;
        console.log(container.scrollLeft);
        scrolline.style.width = container.scrollLeft + "px";
        // console.log(container.scrollLeft);
      }
      econtainer.addEventListener('wheel',(e)=>{
        e.preventDefault();
        console.log(e.deltaX);
      })
    });
   },[])
   


  return (
    <>
       <div className="scroll"></div>
    <div className="main_container">
      <div className="row rowclass">
        <div className="center_div">
          <div className="page_1 col-md-6 col-12">
           <Page2/>
          </div>
          <div className="page_2 col-md-12 ms-4">
           <Page3/>
            <div className="row pg3row">
              <div className="container-fluid main-container">
                <div className="row p-4 headingrow">
                  <div className="col-10 mx-auto headingcol">
                    <div className="heading fs-2">
                      <h1>events</h1>
                    </div>
                  </div>
                </div>
                <div className="row imgrow">
                  <div className="col-10 circle-col">
                    <div className="row circle-row">
                      <div className="container-fluid main_fluid">
                        <div className="row main_row">
                          <div className="col-md-10 col-sm-11 mx-auto main_col">
                            <div className="escroll"></div>
                          <Page4/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pg4row"> 
            <Page5/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page1
