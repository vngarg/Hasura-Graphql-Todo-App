import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './footer.css';

class Footer extends Component {
    render() { 
        return (
            <Container className="themed-container footer bg-dark text-center" fluid={true}>
                &#169; Learncool Pvt. Ltd.
            </Container>
        );
    }
}
 
export default Footer;