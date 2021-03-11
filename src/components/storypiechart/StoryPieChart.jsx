import React, { Component } from 'react';
import './StoryPieChart.css';
import PieChart from "../piechart/PieChart";

class StoryPieChart extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <div className="about-text">
                    <div className={this.props.className}>
                        <div className="storyPieChartInfo">
                            <h3>Vencedores por gênero</h3>
                            <p>Desde seu início, o Prêmio Nobel foi entregue a HOLD .Dentre quais, tivemos  HOLD vencedores do gênero mascilino e HOLD do gênero feminino.</p>
                        </div>
                        <PieChart
                            data={[{ label: 'Masculino', value: 50 }, { label: 'Feminino', value: 50 }]}
                            outerRadius={150}
                            innerRadius={0} />
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryPieChart;