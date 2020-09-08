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
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);