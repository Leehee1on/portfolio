import React from 'react';
import '../assets/css/skill.css';
import { skills } from '../utils/portfolio';
import SkillCard from './SkillCard';

export default function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section--skill" id="skills">
            <div className="inner">

                <Fade left duration={800}>
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.subTitle}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-desc">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="skill-image">
                    <i className="fas fa-code"></i>
                </div>
                </Fade>

            </div>
        </section>
    );
}