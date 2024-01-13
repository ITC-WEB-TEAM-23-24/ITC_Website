import React, { useEffect } from 'react'
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import TT_Pack from '../techteam';


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
    const app = document.querySelector(".app");
    let scrollThreshold = container.offsetWidth;
    window.addEventListener('resize', function() {
      scrollThreshold = container.offsetWidth;
    });
    // console.log(scrollThreshold);
    let scrolline = document.querySelector(".scroll");

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      
      if (scrollThreshold > 1900 && container.scrollLeft > scrollThreshold) {
        if (container.scrollLeft > scrollThreshold) {
          container.scrollTop += e.deltaY;
          scrolline.style.width = container.scrollLeft + "px";
          // console.log(container.scrollTop);
          
          if (container.scrollTop === 0) {
            container.scrollLeft += e.deltaY;
          }
                
        }
      } else if (container.scrollLeft > scrollThreshold + 45) {
        container.scrollTop += e.deltaY;
        scrolline.style.width = container.scrollLeft + "px";
        // console.log(container.scrollTop);
        if (container.scrollTop === 0) {
          container.scrollLeft += e.deltaY;
        }
      } 
      else {
        if(container.scrollLeft === 0 && e.deltaY<=0){
            console.log("hi");
        }else{
          container.scrollLeft += e.deltaY;
        }
        scrolline.style.width = container.scrollLeft + "px";
      }
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
                          {/* <Page4/> */}
                          <Page6/>
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
            <div className="tt pg4row"> 
                <TT_Pack />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page1
