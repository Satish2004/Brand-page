import React from "react";
import "../App.css";
const Containt = () => {
  return (
    <>
      <div className="container-data  mt-[100px] w-400 m-[20%] flex ">
        <div className="leftConatiner ">
          <div className="textAreaConatine  ">
            <h1 className="header">
              YOUR FEET <br />
              DESERVE <br />
              THE BEST
            </h1>
            <p className="paragraph">
              YOUR FEET DESERVE THE BEST Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Omnis hic cum numquam sapiente .
              <div className="buttonComponents mt-3">
                <button className=" shopBtn ">Shop Now</button>
                <button className=" categoryBtn ">Category</button>
              </div>
              <p className="mt-10"> Also Available On</p>
              <div className="branblogo flex ">
              <img src="\images\flipkart.png" className="mr-4 w-[32px] h-[32px]" alt="flipkart logo" />
                <img src="\images\amazon.png" className="w-[32px] h-[32px]" alt="amazon logo" />
              </div>
            </p>
          </div>
        </div>
        <div className="RightContainer">
            
            <img className="ml-20 w-[530px] h-[487px]" src="\images\shoe_image.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Containt;
