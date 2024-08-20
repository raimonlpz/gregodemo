import React from 'react'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Agenda() {
    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {
      var tl = new TimelineMax();
      tl.to(screen, {
        duration: 1.2,
        height: "100%",
        ease: Power3.easeInOut,
      });
      tl.to(screen, {
        duration: 1,
        top: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
      });
      tl.set(screen, { left: "-100%" });
      TweenMax.to(body, .3, {css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut
      }}).delay(2);
      return () => {
        TweenMax.to(body, 1, {css: {
          opacity: "0",
          pointerEvents: 'none'
        }});
    }
    });
  return (
    <React.Fragment>
        <div className="load-container">
            <div className="load-screen1" ref={(el) => (screen = el)}></div>
        </div>
        <div ref={(el) => (body = el)} className="Agenda">
            <NavLink to="/" className="button nav arrow">&#8592;</NavLink>
        </div>
    </React.Fragment>
  )
}


export default Agenda