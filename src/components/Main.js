import React, { Component } from 'react'
import Navbar from './Navbars/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChat, fetchDocApprove, fetchUser } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        chat: state.chat,
        user: state.user,
        docApprove: state.docApprove
    }
}

const mapDispatchToProps = {
    fetchChat: () => (fetchChat()),
    fetchDocApprove: () => (fetchDocApprove()),
    fetchUser: () => (fetchUser())
};


class Main extends Component {

    // componentDidMount() {
    //     this.props.fetchChat();
    //     this.props.fetchDocApprove();
    //     this.props.fetchUser();
    // }

    render() {

        const HomePage = () => {
            return (
                <Home
                    chat={this.props.chat}
                    //chatLoading={this.props.chat.isLoading}
                    //chatErrMess={this.props.chat.errMess}
                    docApprove={this.props.docApproves}
                    //docApproveLoading={this.props.docApproves.isLoading}
                    //docApproveErrMess={this.props.docApproves.errMess}
                    user={this.props.user}
                    //userLoading={this.props.user.isLoading}
                    //userErrMess={this.props.user.errMess}
                />
            );
        }

        return (
            <div>
                <Navbar />
                <Sidebar />
                <TransitionGroup>
                    {/* <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>  */}
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Redirect to='/home' />
                        </Switch>
                    {/* </CSSTransition> */}
                </TransitionGroup>
                <Footer />
            content
            </div>
        );
    }
}

//export default withRouter(connect(mapStateToProps, mapDispatchToProps))(Main);
export default Main;