import React, {Component} from 'react'

export default class Meme extends Component {


    render() {
        const meme = this.props.meme;

        console.log('-1-', meme);

        return (
            <div>Its Meme
                <div>{meme.id}---{meme.score}
                    <img src={meme.imgUrl} alt="image"/>
                </div>
            </div>
        )

    }
}
