import React, {Component} from 'react';
import './itemDetails.css';
import Spinner from '../spinner';
import GotService from '../../services/gotService';


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {

    gotService = new GotService()


    state = {
        item: null,
        loading: false
    }

    componentDidMount() {
        this.updateItem();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }

    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
              return; 
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
            
         
    }



    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select item in the list</span>
            
        }
        const {item} = this.state;
        const {name} = item;

        const renderContent = (
            <>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </>

        )

        const content = renderContent ? renderContent : <Spinner/> 

        return (
            <div className="char-details rounded">
                {content}
            </div>
        );
    }
}
