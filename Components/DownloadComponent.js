import React from 'react'
import { Container } from 'react-bootstrap'
function Downloadcomponent() {
    return (
        <div className='download-container-bg'>
            <Container className='download-container'>
                <h3>Got food with Foodo</h3>
                <h3>Download the App</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quas expedita mollitia cumque ex doloremque!
                </p>
                <Container className='img-download'>
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                    <img
                        src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1"
                        className="img-fluid"
                    />
                </Container>
            </Container>
        </div>
    )
}

export default Downloadcomponent