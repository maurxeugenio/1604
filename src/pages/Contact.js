import React, { useState }  from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Container, Row, Col } from 'react-grid-system'


function Services() {
    const [copied, setCopied] = useState(false) 

    return (
        <div className="contact">
           <Container>
                <h1 className="headline">enter in contact</h1>
                <Col>
                    <Row>
                        <ul className="list-contact">
                            <li>
                                <h4>telegram</h4>
                                <a href="https://t.me/eugenio1604" target="_blank">access</a>
                            </li>
                            <li>
                                <h4>instagram</h4>
                                <a href="https://instagram.com/1604.in" target="_blank">access</a>
                            </li>
                            <li>
                                <h4>eugenio@1604.in</h4>
                                <CopyToClipboard text={'eugenio@1604.in'}
                                    onCopy={() => setCopied(true)}>
                                    <span>{ copied ? 'copied': 'copy it'}</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </Row>
                </Col>
           </Container>
        </div>
    );
}

export default Services;
