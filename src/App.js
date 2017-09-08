import React, { Component } from 'react';
import Fetch from 'react-fetch';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: '',
            username: '',
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        console.log('getting events');
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Fetch url="https://api.github.com/repos/zackify/react-fetch/events">
                                {/* list items here */}
                            </Fetch>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default App;
