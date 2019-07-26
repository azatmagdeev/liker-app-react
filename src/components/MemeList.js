import React, {Component} from 'react';
import Meme from "./Meme";

class MemeList extends Component {


    render() {

        console.log('---', this.props);
        let memeEl;
        if (this.props.memes !== undefined) {
            memeEl = this.props.memes.map(o =>
                <div key={o.id}><Meme meme={o}/></div>);
        }


        return (
            <div>
                Its MemeList
                {memeEl}
            </div>
        );
    }
}

export default MemeList;