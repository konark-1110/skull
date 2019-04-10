var React = require('react');
var CurrentPlay = require('./CurrentPlay.jsx');
var Controller = require('./Controller.jsx');


var MainPlayer = React.createClass({
    _onRightClick: function(play) {
        this.props._onRightClick(play)
    },
    _onLeftClick: function(play) {
        this.props._onLeftClick(play)
    },
    render: function(){
        var bg = this.props.songNow.thumb;
        var divStyle = {
          background: "linear-gradient(to right bottom, rgba(209, 67, 72, 0.498039), rgb(114, 166, 92)), url("+bg+")"
        };

        return (
            <div className="player" style={divStyle}>
                <CurrentPlay songNow={this.props.songNow} />
                <Controller _onRightClick={this._onRightClick} _onLeftClick={this._onLeftClick} playNow={this.props.playNow} songNow={this.props.songNow} />
            </div>
        )
    }
})

module.exports = MainPlayer;
