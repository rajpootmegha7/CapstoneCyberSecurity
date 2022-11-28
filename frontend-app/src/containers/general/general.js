import React, { Component } from 'react'
import './style.css'
import { Parallax } from 'react-parallax';
import wall from '../../images/wallpaper 1.png'
import planning_img from '../../images/wallpaper 1.png'

export default class general extends Component {
    render() {
        return (
            <div className="general_info_container">
                
                <Parallax bgImage={wall} strength={500}>
                    <div data-testid="img1-test" className="first_parallax_container">
                        <div className="flex_center title_container">
                            <div className="page_title">
                                Deloitte Cyber Security General Information
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="doc_container">
                    <div className="container_img">
                        <img src={planning_img} alt="planning_1" className="planning_class" />
                    </div>
                    <div className="about_us_bio flex_center">
                        <div data-testid="planning-text-test" className='para_text'>
                        Supply Chain in the software industry involves keeping track of all components needed to deliver the product and ultimately affect the software development lifecycle (SDLC). 
                        This includes custom code used, open source, developers coding the product, DevOps tools, repositories, packs managers, maintenance of security vulnerabilities, etc. Documentation is key in the software supply chain process,
                        especially documentation in the code. This documentation should include the third party components in use and their potential cyber threats. There should be a formal Software Bill of Materials that details the components used 
                        to create the software and their dependencies.
                            <p className="Process_name">- Automotive Planning </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
