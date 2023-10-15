import React from 'react'
import image from './images/itcimg.avif';
function Page2() {
  return (
    <>
        <div className="row pg1row">
              <div className="col-md-8 col-12">
                <div className="img">
                  <img src={image} className="pg1_img" alt="hlo" />
                </div>
              </div>
              <div className="col-md-4 aboutcol col-12">
                <div className="about_us">
                  <div className="section part1">
                    <div className="number">
                      <p>41</p>
                    </div>
                    <div className="heading">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="section part2">
                    <div className="number">
                      <p>41</p>
                    </div>
                    <div className="heading">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="section part3">
                    <div className="number">
                      <p>41</p>
                    </div>
                    <div className="heading">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Page2
