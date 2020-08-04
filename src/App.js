import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from "./components/likesButton";
import DigitalClock from "./components/DigitalClock"
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

const tags = ['恐龙', '仙女']
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ['this is my first reply']
        }
        this.addComment = this.addComment.bind(this)
        this.getIndex = this.getIndex.bind(this)
    }
    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    getIndex(i) {
        let list = [...this.state.comments]
        list.splice(i, 1)
        this.setState({
            comments: list
        })
    }
    render() {
        const { comments } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="app-logo" alt={logo}/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <CommentList comments={comments}
                             onGetIndex={this.getIndex}
                />
                <CommentBox
                    commentsLength={comments.length}
                    onAddComment={this.addComment}
                />
            </div>
        )
    }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/*<NameCard name="Amy" number={1212121212} isHuman tags={tags} />*/}
//       {/*<LikesButton />*/}
//       {/*<DigitalClock />*/}
//       <CommentBox />
//     </div>
//   );
// }

export default App;
