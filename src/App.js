import React, { Component } from 'react';


class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="TIMELINE"/>
                    <Content activities={activities} />
                </div>
            </div>
        )
    }
}


class Content extends React.Component {
    render() {
      //const activity = this.props.activity; does the same as the line below
        const {activities} = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline item */}
                {activities.map( (activity) => (
                    <ActiviityItem activity={activity} />
                    ))}
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>
                <span className="title">{this.props.title}</span>
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search ..." />
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

class ActivityItem extends React.Component {
    render() {
        const {activity} = this.props; // ES6 destructuring
        return (
            <div className="item">
                <div className="avatar">
                    <img src={activity.user.avatar} />
                    {activity.user.name}
                </div>
                <span className="time">
                    {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
            </div>
        )
    }
}


export default App;
