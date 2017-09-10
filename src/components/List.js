import React from 'react';
import moment from 'moment';
import './List.css';

export default class List extends React.Component {
    render() {
        const listItems = this.props;
        // console.log(listItems);
        return (
            <ul>
                {this.props.events.map(key => {
                    const listItem = key;
                    if(listItems.eventType === '' || listItems.eventType === listItem.type) {
                        return (
                            <li className="row" key={listItem.id}>
                                <div className="col-xs-2">
                                    <img src={listItem.actor.avatar_url} alt={listItem.actor.display_login} title={listItem.actor.display_login} width='100%' />
                                </div>
                                <div className="col-xs-9">
                                    {moment(listItem.created_at).format('YYYY-MM-DD hh:mm A')}
                                    <br/>
                                    {listItem.type}
                                </div>
                            </li>
                        )
                    }else {
                        return null;
                    }
                })}
            </ul>
        )
    }
}
