
import React, { Component } from 'react'
import { Link } from 'react-router'
import TagGrid from '../TagGrid'

class Chrono extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      millis: 0,
      running: false,
      isChronometerStarted: false,
      isError: false
    };

    this._handleStartClick = this._handleStartClick.bind(this);
    this._handleStopClick = this._handleStopClick.bind(this);
    this._handleSaveClick = this._handleSaveClick.bind(this);
  }


  _handleStartClick(event) {
    var _this = this;
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100)

      this.setState({ running: true, isChronometerStarted: false })
    }
  }

  _handleStopClick(event) {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false, isChronometerStarted: true })
    }
  }

  _handleSaveClick(event) {
    if (this.refs.tagName.value !== '') {
      const nextId = this.props.tags.length + 1
      const totalTime = this.state.minutes + ':' + this.state.seconds;
      const tagName = this.refs.tagName.value
      this.props.addTag(nextId, tagName, '00', totalTime)
      this.update(0, 0, 0);
      this.refs.tagName.value = ''
      this.setState({ isChronometerStarted: false, isError: false });
    }
    else {
      this.setState({ isError: true });
      this.refs.tagName.focus();
    }
  }

  tick() {
    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.update(millis, seconds, minutes);
  }

  zeroPad(value) {
    return value < 10 ? `0${value}` : value;
  }

  update(millis, seconds, minutes) {
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    });
  }

  render() {
    let run = this.state.running === true;
    return (
      <div className="app">
        <header className="header">
          <div className="title">Chronometer</div>
          <Link to="/tags" className="view-link">View Tags</Link>
        </header>
        <main className="main">
          <div className="display">
            <div className="state">{run ? 'Running' : 'Stop'}</div>
            <div className="segments">
              <span className="mins">{this.zeroPad(this.state.minutes) }: </span>
              <span className="secs">{this.zeroPad(this.state.seconds) } </span>
              <span className="millis">.0{this.state.millis}</span>
            </div>
          </div>

          <div className="actions">
            <button className={"btn start " + (run ? 'hidden' : '') }
              onClick={this._handleStartClick}>Start</button>

            <button className={"btn stop " + (false == run ? 'hidden' : '') }
              onClick={this._handleStopClick}>Stop</button>
          </div>
          <div>
            {this.state.isChronometerStarted ?
              <section>
                <div className="row m-t-sm">
                  <div className="col-sm-6 col-sm-offset-3">
                    { this.state.isError ?
                      <div className="alert alert-danger text-center">
                        Please enter Tag Name
                      </div>
                      : ''
                    }
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm-6 col-sm-offset-3">
                    <input className="form-control" type="text" ref="tagName" />
                  </div>
                </div>
                <div className="row m-t-sm">
                  <div className="col-sm-12">
                    <button className={"btn stop btn-success center-block"} onClick={this._handleSaveClick}>Save</button>
                  </div>
                </div>
              </section>
              : null}
          </div>
        </main>
      </div>);
  }
}

export default Chrono
