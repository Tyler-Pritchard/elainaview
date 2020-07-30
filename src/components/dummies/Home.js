import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loader } from './common/Loader';
import { baseUrl } from '../baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loader />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                <CardImg src={baseUrl + item} alt={item} />
                <CardBody>
                    <CardTitle>{item}</CardTitle>
                    <CardText>{item}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard
                        item={props.chat}
                        isLoading={props.chatLoading}
                        errMess={props.chatErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        item={props.user}
                        isLoading={props.userLoading}
                        errMess={props.userErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                        item={props.docApproval}
                        isLoading={props.docApprovalLoading}
                        errMess={props.docApprovalErrMess}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;