import React from "react";
import { info } from '../utils/portfolio';
import '../assets/css/info.css'

export default function Info() {
	const Fade: any = require("react-reveal/Fade");

  return (
  <section className="section--info" id="about">
    <div className="inner">
      <Fade left duration={800}>
        <div className="wrapper">
            <div className="info-title">
                <p>{info.title}</p>
            </div>
            <div className="info-subtitle">
                <p>{info.subTitle}</p>
            </div>
             <div className="info-desc">
              {info.desc.map((desc, i) => <p key={i}>{desc}</p>)}
            </div>
           
        </div>
      </Fade>

      {/* <Fade right duration={800}>
        <div className="info-image">
            <i className="fas fa-code"></i>
        </div>
      </Fade> */}
      {/* 프로필 사진 영역 */}
    </div>
  </section>);
}
