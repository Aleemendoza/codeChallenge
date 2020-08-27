import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SingleItem from './singleitem.jsx'

const List = (props) => (
    <div>
        {

            props.items.map((item, i) => {
                console.log(item)
                return (
                	<SingleItem items={item} />
				)
            })
        }
    </div>
)
class Vacantes extends React.Component {

 constructor() {
        super();
        this.state = { 
            done: false,
            vacantes: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/vacantes')
        .then(result=>result.json())
        .then(vacantes=>this.setState({
            done: true,
            vacantes
        }))
    }

    render() {
        return(
            <div>
                {this.state.done && this.state.vacantes ? (
                    <List items={this.state.vacantes} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            </div>
        )
    

	}
}

export default Vacantes


