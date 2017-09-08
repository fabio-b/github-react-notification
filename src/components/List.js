import React from 'react';

export default class List extends React.Component {
    render() {
        const listItems = this.props;
        console.log(Object.keys(listItems));
        return (
            <ul>
                {Object.keys(listItems).map((key) => {
                    const listItem = listItems[key];
                    return (
                        <li key={listItem.id}>
                            <img src={listItem.actor.avatar_url} alt={listItem.actor.display_login} title={listItem.actor.display_login} width="50" height="50" />
                            {listItem.type}
                        </li>
                    )
                })}
            </ul>
        )
    }
}
