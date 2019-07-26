import React, {Component} from 'react';
import MemeList from "./components/MemeList";
import 'bootstrap/dist/css/bootstrap.css'
// import {ReportOptions as response, ReportOptions as res} from "istanbul-reports";

const apiUrl='https://nodejs-azat.herokuapp.com/mems';


class App extends Component {

    state = {

        memes:this.getArray(),
    };

    render() {

        // this.getArray();

        console.log('-', this.state);
        return (
            <div className='container'>
                <div>
                    <h1>LikerApp</h1>
                </div>
                <div>
                    <MemeList memes={this.state.memes}/>
                </div>

            </div>
        )
    }

    getArray(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',apiUrl);
        xhr.addEventListener('load',()=>{
           const arr = JSON.parse(xhr.responseText);
            console.log('--',arr);
            this.setState({memes: arr})
        });
        xhr.send();

        // return arr
    }
}


export default App;