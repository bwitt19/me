import React from 'react';
import { Container } from 'react-bootstrap';

function LineBreak() {
    return ( <Container><hr /></Container> );
}

function Contents(props) {
    return (
        <div id={props.id} className="contents">
            <LineBreak />
            <Container className="pt-2 pb-5">
                {props.children}
            </Container>
        </div>
    );
}

export default Contents;
