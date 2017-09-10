import React, { Component } from 'react';
import Layout from './components/Layout';
import GithubInfo from './components/GithubInfo';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'https://api.github.com/repos',
            repo: '',
            username: '',
            eventType: '',
            errorMessage: ''
        }

        this.handleError = this.handleError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {

    }

    getEvents() {
        fetch(this.state.api+'/'+this.state.username+'/'+this.state.repo+'/events').then(res => {
            //convert instance to json object
            return res.json();
        }).then( events => {
            if(!events.message) {
                this.setState({
                    events: events
                })
            }else{
                this.handleError(events);
            }
        })
    }

    handleSubmit(value) {
        const {repo, username, eventType, errMessage} = {...value};

        if(repo && username){
            this.setState({
                repo: repo,
                username: username,
                eventType: eventType,
                errorMessage: ''
            }, () => {
                this.getEvents();
            })
        }else{
            this.setState({
                errorMessage: errMessage
            })
        }
    }

    handleError(val) {
        console.log(val.message);

        if(val.message){
            this.setState({
                errorMessage: [this.state.api,this.state.repo,this.state.username].join('/')+' '+val.message
            })
        }
    }

    reset() {
        this.setState({
            repo: '',
            username: '',
            eventType: '',
            errorMessage: ''
        })
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    {this.state.errorMessage &&
                        <div className="alert alert-warning">
                            <i className="glyphicon glyphicon-exclamation-sign"/>
                            &nbsp;{this.state.errorMessage}
                        </div>
                    }
                    {this.state.repo && this.state.username ?
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3">
                                <button onClick={this.reset} className="btn btn-danger">Search again</button>
                                {this.state.events &&
                                <List eventType={this.state.eventType} events={this.state.events} />
                                }
                            </div>
                        </div>
                    :
                    <GithubInfo onsubmit={this.handleSubmit} />
                    }
                </div>
            </Layout>
        );
    }
}

export default App;
