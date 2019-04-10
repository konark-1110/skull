/*import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Background extends Component {
    state ={
        comments: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
                comments: res.data.slice(0, 2)
            })
            //console.log('Our home state',this.state.posts);
        })
    }

    render() {
        return(
            <div className='center'>
                <h4>Hey</h4>
            </div>
        )
    }
}

export default Background;
*/
