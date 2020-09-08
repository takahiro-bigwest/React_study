import React from 'react';
import ReactDOM from 'react-dom';

// function Clock(props) {
//   return (
//     <div>
//       <h1>Helo, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// React.Component を継承する同名の ES6 クラスを作成する。
// render() と呼ばれる空のメソッドを 1 つ追加する。
// 関数の中身を render() メソッドに移動する。
// render() 内の props を this.props に書き換える。
// 空になった関数の宣言部分を削除する。

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);