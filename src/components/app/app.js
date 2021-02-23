import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';


class App extends React.Component {

    state = {
        vision : false,
        error : false    
    }
    componentDidCatch(){
        this.setState(({error:true}))            
    }   
    onButton = () =>{
    this.setState((state)=>{
        return {
            vision: !state.vision
        }
    })};
    

    render(){
        const {vision} = this.state;
        const btnAction = vision ? <WindowRandom/> : null;

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
          <Router>
               <div className="app">
               <Container>
                    <Header/>
               </Container>
               
                <Container>
                    {btnAction}
                    <Button className ="toggle-btn"  onClick ={this.onButton}>Random Character</Button>
                        <Route path='/' exact component={() => <h1 className ="welcome">Welcome to GOT DB</h1>}/>
                        <Route path='/characters' component={CharacterPage} />                    
                        <Route path='/houses' component={HousesPage} />
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render ={({match})=>{
                            const {id} = match.params;
                            return <BooksItem bookId={id}/>

                        }} />
                    
                </Container>
               </div>
                </Router>
           
        );
    }
    
};

const WindowRandom = () =>{
    return(
      
    <Row>
        <Col lg={{size: 5, offset: 0}}>
            <RandomChar/>
        </Col>
    </Row>

    )
}

export default App;