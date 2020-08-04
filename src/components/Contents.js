import React from 'react';
import { Container } from 'react-bootstrap';

function LineBreak() {
    return ( <Container className="linebreak"><hr /></Container> );
}

function Contents(props) {
    return (
        <div id={props.id} className="contents">
            <Container className="py-4">
                {props.children}
            </Container>
            <LineBreak />
        </div>
    );
}

export default Contents;
