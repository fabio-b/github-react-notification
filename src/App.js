import React, { Component } from 'react';
import Fetch from 'react-fetch';
import Layout from './components/Layout';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: '',
            username: '',
        }

        this.handleOnchange = this.handleOnchange.bind(this);
    }

    componentDidMount() {
        this.getEvents();
    }

    handleOnchange(e) {
        console.log(e.target.value);
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
                            <label htmlFor='repo'>Repository Name</label>
                            <input type='text' name='repo' className='form-control' placeholder='Type repo' onChange={this.handleOnchange} />
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' className='form-control' placeholder='Type username associated with repo' onChange={this.handleOnchange} />

                        </div>
                    </div>
                    {this.state.repo && this.state.username &&
                        <div className="row">
                            <div className="col-xs-12">
                                <Fetch url="https://api.github.com/repos/zackify/react-fetch/events">
                                    <List />
                                </Fetch>
                            </div>
                        </div>
                    }
                </div>
            </Layout>
        );
    }
}

export default App;
