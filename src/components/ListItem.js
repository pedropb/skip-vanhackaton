import React, { Component } from 'react';

class List extends Component {
    render() {
        const { name, detail, value } = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{name}</h6>
                    <small className="text-muted">{detail}</small>
                </div>
                <span className="text-muted">{value}</span>
            </li>
        );
    }
}

export default List;