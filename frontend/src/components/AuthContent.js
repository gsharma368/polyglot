import * as React from 'react';
//import { request } from '../helpers/axios_helper';
import axios from 'axios';

export default class AuthContent extends React.Component {

    state = {
        persons: []
      }

    componentDidMount() {
        axios.get('http://localhost:8080/messages').then(
            (response) => {
                const data = response.data;
                this.setState({data})
            });
    };

  render() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <p className="card-text">Content:</p>
                        <ul>
                        {this.state.data &&
                            this.state.data
                                .map(person =>
                                <li >{person}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  };
}