import React from 'react';
import { Container } from 'react-bootstrap';

function LineBreak() {
    return ( <Container className="linebreak"><hr /></Container> );
}

function Contents(props) {
    return (
        <div id={props.id} className="contents">
            <LineBreak />
            <Container className="pt-3 pb-5">
                {props.children}
            </Container>
        </div>
    );
}

export default Contents;
