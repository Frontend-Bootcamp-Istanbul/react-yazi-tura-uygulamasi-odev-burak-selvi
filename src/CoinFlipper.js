import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      donuyor: false,
      turaCount: 0,
      yaziCount: 0,
      totalCount: 0,
      buttonState: false
    }
  }
  handleClick = () => {
    this.handleSide();
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({ donuyor: true, buttonState: true, totalCount: this.state.totalCount + 1 });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ donuyor: false, buttonState: false }), 1000);
  };
  handleSide = () => {
    const sayi = Math.round(Math.random());
    const sides = ['tura', 'yazi'];
    const side = sides[sayi];
    if (side === 'tura') {
      this.setState({
        side
      }, () => {
        setTimeout(() => this.setState({ turaCount: this.state.turaCount + 1 }), 1000);
      });
    } else {
      this.setState({
        side
      }, () => {
        setTimeout(() => this.setState({ yaziCount: this.state.yaziCount + 1 }), 1000);
      });
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} disabled={this.state.buttonState} >At!</button>
        <p>
          Toplam
            <strong> {this.state.totalCount} </strong>
          atıştan
            <strong> {this.state.turaCount} </strong>
          ü tura
            <strong> {this.state.yaziCount} </strong>
          si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;