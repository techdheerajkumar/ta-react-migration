import React, { Component } from 'react'
require('../../Styles//style.scss')
class CustomerExperience extends Component {
    render() {
        return (
            <div className="customer-experience">
                <div className="container">
                    <div className="customer-experience-content">
                        <h2 className="heading-two">
                            Accelerate with excellent customer experience.
                        </h2>

                        <div className="para-content">
                            <p>TA Digital is an innovative digital transformation agency, specializing in delivering
                                customer experience, commerce, and marketing solutions. For nearly two decades, we have
                                 been helping traditional businesses transform and create dynamic digital cultures through
                          disruptive strategies and agile deployment of innovative solutions.</p>
                            <p>We specialize in helping our clients exceed increasing customer expectations by
                                 leveraging people, processes, and technology. Helping them engineer an exceptional
                         end to end customer experience that accelerates business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomerExperience;