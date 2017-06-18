import React from 'react';
import rd3 from 'react-d3';
//import Client from './Client';  <-- this is for requests

var LineChart = rd3.LineChart;

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSet: [
                {
                    "name": "Series 1",
                    "values": [
                        {
                            "x": 0,
                            "y": 0
                        }, {
                            "x": 1,
                            "y": 1.1
                        }, {
                            "x": 2,
                            "y": 2.5
                        }, {
                            "x": 3,
                            "y": 3
                        }, {
                            "x": 4,
                            "y": 6
                        }, {
                            "x": 5,
                            "y": 9
                        }
                    ]
                }
            ],
            activeData: [1, 2, 3]
        };
    }

    render() {
        return (
            <div>
                <button/>
                <LineChart data={this.state.dataSet} width={500} height={200} fill={'#3182bd'} title='Line'/>
            </div>
        );
    }
}

export default Chart;
