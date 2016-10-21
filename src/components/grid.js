'use strict';

import React from 'react';
import Cell from './cell';
import emitter from '../arrowEmitter';
import keys from '../arrowKeys';

let listener;

class Grid extends React.Component {
    constructor(props) {
        super(props);

        let cells = [],
            x,
            y;

        for (x = 0; x < this.props.width; x++) {
            cells.push([]);

            for (y = 0; y < this.props.height; y++) {
                cells[x].push(2);
            }
        }

        this.state = { cells };
    }

    onKeystroke(key) {
        switch (key) {
            case keys.UP:
                console.log('en haut');
                break;

            case keys.RIGHT:
                console.log('à droite');
                break;

            case keys.DOWN:
                console.log('en bas');
                break;

            case keys.LEFT:
                console.log('à gauche');
                break;
        }
    }

    componentDidMount() {
        listener = emitter.onKeystroke(this.onKeystroke);
    }

    componentWillUnmount() {
        listener.remove();
    }

    render() {
        let { width, ...theSunshine } = this.props;

        return (
            <div className="grid">
                {this.state.cells.map(function(row, y) {
                    return row.map(function(value, x) {
                        return (
                            <Cell>{x}/{y}</Cell>
                        );
                    });
                })}
            </div>
        );
    }
}

Grid.defaultProps = {
    width: 4,
    height: 4
};

export default Grid;
