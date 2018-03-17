import React, { Component } from 'react';

class List extends Component {
    render() {
        const { title, count, total } = this.props;

        return (
            <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">{title}</span>
                    <span className="badge badge-secondary badge-pill">{count}</span>
                </h4>
                <ul className="list-group mb-3">
                    {this.children}
                    {
                        total && (
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>{total}</strong>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;