'use strict';

import React from 'react';

export default class Cell extends React.Component {
    render() {
        return (
            <div className="cell">{this.props.children}</div>
        );
    }
}
