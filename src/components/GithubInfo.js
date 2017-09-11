import React from 'react';

export default class GithubInfo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let values = {
            repo: this.repo.value,
            username: this.user.value,
            eventType: this.eventType.value
        }

        if(!values.repo || !values.username) {
            values.errMessage = 'Repo or username is blank. Please enter values for each to load data'
        }
        this.props.onsubmit(values);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <label htmlFor='repo'>Repository Name</label>
                        <input type='text' name='repo' className='form-control' placeholder='Type repo' ref={repo => {this.repo = repo;}} />
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' className='form-control' placeholder='Type username associated with repo' ref={user => {this.user = user;}} />
                        <label htmlFor='eventType'>Event Type</label>
                        <select name='eventType' className='form-control' ref={event => {this.eventType = event;}}>
                            <option value=''>All</option>
                            <option value='CommitCommentEvent'>Commit Comment</option>
                            <option value='CreateEvent'>Create</option>
                            <option value='DeleteEvent'>Delete</option>
                            <option value='DeploymentEvent'>Deployment</option>
                            <option value='DeploymentStatusEvent'>Deployment Status</option>
                            <option value='DownloadEvent'>Download</option>
                            <option value='FollowEvent'>Follow</option>
                            <option value='ForkEvent'>Fork</option>
                            <option value='ForkApplyEvent'>Fork Apply</option>
                            <option value='GistEvent'>Gist</option>
                            <option value='GollumEvent'>Gollum</option>
                            <option value='InstallationEvent'>Installation</option>
                            <option value='InstallationRepositoriesEvent'>Installation Repositories</option>
                            <option value='IssueCommentEvent'>Issue Comment</option>
                            <option value='IssuesEvent'>Issues</option>
                            <option value='LabelEvent'>Label</option>
                            <option value='MarketplacePurchaseEvent'>Marketplace Purchase</option>
                            <option value='MemberEvent'>Member</option>
                            <option value='MembershipEvent'>Membership</option>
                            <option value='MilestoneEvent'>Milestone</option>
                            <option value='OrganizationEvent'>Organization</option>
                            <option value='OrgBlockEvent'>Org Block</option>
                            <option value='PageBuildEvent'>Page Build</option>
                            <option value='ProjectCardEvent'>Project Card</option>
                            <option value='ProjectColumnEvent'>Project Column</option>
                            <option value='ProjectEvent'>Project</option>
                            <option value='PublicEvent'>Public</option>
                            <option value='PullRequestEvent'>Pull Request</option>
                            <option value='PullRequestReviewEvent'>Pull Request Review</option>
                            <option value='PullRequestReviewCommentEvent'>Pull Request Review Comment</option>
                            <option value='PushEvent'>Push</option>
                            <option value='ReleaseEvent'>Release</option>
                            <option value='RepositoryEvent'>Repository</option>
                            <option value='StatusEvent'>Status</option>
                            <option value='TeamEvent'>Team</option>
                            <option value='TeamAddEvent'>Team Add</option>
                            <option value='WatchEvent'>Watch</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4 text-center">
                        <button className="btn btn-info" onClick={this.handleClick}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
