import React, { Component } from 'react';
import './StoryPieInfo.css';

import MarrieCurrie from '../../assets/MarieCurrie.jpg'

class StoryPieInfo extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <div className="about-text">
                    <div className={this.props.className}>

                        <img className="marrieCurrie" src={MarrieCurrie} alt="MarrieCurrie" />
                        <div className="storyPieInfoInfo">
                            <h3>Marie Currie</h3>
                            <p>O Prêmio Nobel já foi entregue a HOLD pesquisadores. Dentre quais, tivemos HOLD vencedores do gênero mascilino e HOLD do gênero feminino.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryPieInfo;