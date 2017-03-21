import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="TIMELINE"/>
                    <Content activities= {[
                            {
                                timestamp: new Date().getTime(),
                                text: "Ate lunch",
                                user: {
                                    id: 1, name: 'Nate',
                                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                                },
                                comments: [{ from: 'Ari', text: 'Me too!' }]
                            },
                            {
                                timestamp: new Date().getTime(),
                                text: "Woke up early for a beautiful run",
                                user: {
                                    id: 2, name: 'Ari',
                                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                                },
                                comments: [{ from: 'Nate', text: 'I am so jealous' }]
                            },
                        ]}/>
                </div>
            </div>
        )
    }
}

class Header extends Component {
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


class Content extends Component {
    render() {
        const {activities} = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline item */}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        )
    }
}


class ActivityItem extends Component {
    render() {
        const {activity} = this.props; // ES6 destructuring
        return (
            <div className="item">
                <div className="avatar">
                    <img src={activity.user.avatar} alt=""/>
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
