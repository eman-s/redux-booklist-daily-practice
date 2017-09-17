import React, {Component} from 'react';
import '../styles/App.css';

import BookList from './BookList';
import BookDetail from './BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row">
                <h1>Books N Roses: Appetite for Instruction</h1>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
