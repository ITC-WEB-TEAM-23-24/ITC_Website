import React from 'react'
import devcom from './images/devcom.jpg'
import any from './images/any.png'
import cds from './images/cds-srg.png'
import bg7 from './images/bg7.jpg'

function Page5() {
  return (
            <>
                <div class="col-11 pg4col mx-auto">
                   <div class="row p-4 headingrow">
                     <div class="col-10 mx-auto headingcol">
                       <div class="heading fs-2">
                         <h1>Other Body</h1>
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid pg4main-container">
                      <div class="row pg4rows">
                          <div class="col-11 mx-auto pg4cols">
                               <div class="row main-rowpg4">
                                  <div class="col-sm-4   left-cols mx-auto">
                                      <div class="left-part">
                                          <div class="imagecols" id="zoom" >
                                              <img src={bg7} class="img-fluid" alt=""/>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-8 col-11  right-cols mx-auto">
                                      <div class="right-part">
                                      <div class="row right-partrows">
                                          <div class="col-11 right-partcols mx-auto">
                                              <div class="row right-part-row">
                                                  <div class="col-11 mx-auto right-part-col rightpartcol1" id="first" >
                                                        <div class="col-left-part">
                                                           <div class="image-part" id="imgrol1" >
                                                              <img src={devcom} class="img-fluid" alt=""/>
                                                           </div>
                                                        </div>    
                                                        <div class="col-right-part">
                                                          <figcaption class="padding_2x">
                                                              <h3 class="title small">DEVCOM </h3>
                                                              <p className='visible'>Tech projects that have been successfully completed by DevCom include InstiApp, Resobin and Mess-I. Details about each of them can be found below:</p>
                                                              <a class="ms-auto" href="http://devcom-iitb.org" target="_blank"><button class="button m-auto w-100" >Visit Here</button></a>
                                                          </figcaption>
                                                          <hr/>
                                                      </div>
                                                  </div>
                                                  <div class="col-11 mx-auto right-part-col rightpartcol1" id="second">
                                                      <div class="col-right-part">
                                                          <figcaption class="padding_2x">
                                                              <h3 class="title small">CDS-SRG</h3>
                                                              <p className='visible'>we envision to bridge this gap, promote discussion on topics in controls, facilitate exposure to the associated mathematics and delve into implementation details involved in real-life applications</p>   
                                                              <a class="me-auto" href="https://www.insti.app/org/control--dynamical-systems-reading-group" target="_blank"><button class="button">Visit Here</button></a>
                                                          </figcaption>
                                                          <hr/>
                                                      </div>
                                                      <div class="col-left-part" >
                                                          <div class="image-part" id="imgrol2">
                                                              <img src={cds} class="img-fluid" alt=""/>
                                                          </div>
                                                      </div>    
                                                  </div>
                                                  <div class="col-11 mx-auto right-part-col rightpartcol1" id="third">
                                                        <div class="col-left-part" >
                                                            <div class="image-part" id="imgrol3">
                                                              <img src={any} class="img-fluid" alt=""/>
                                                           </div>
                                                          </div>    
                                                          <div class="col-right-part">
                                                              <figcaption class="padding_2x">
                                                                  <h3 class="title small">Team ANYmation</h3>
                                                              <p className='visible'>Team ANYmation | a minimalist Jekyll theme for running a blog or publication by Team ANYmation</p>
                                                              <a class="ms-auto" href="https://anymation-iitb.github.io/" target="_blank"><button class="button">Visit Here</button></a>
                                                      </figcaption>
                                                      <hr/>
                                                        </div>
                                                  </div>
              
                                              </div>
                                          </div>
                                      </div>   
                                      </div>   
                                  </div>
                               </div> 
                          </div>
                      </div>
                  </div>
                 </div> 
            </>
  )
}

export default Page5
