var Card = React.createClass({
	getInitialState: function() {
		var cardName = this.props.card.name.trim().replace(/[^a-zA-Z0-9-\s-\']/g, '').replace(/[^a-zA-Z0-9-]/g, '-').replace(/--/g, '-').toLowerCase();
		if (cardName=="si7-agent") {
			cardName = "si-7-agent";
		}
		return {
			hasLoaded: false,
			imgSrc: "//s3.amazonaws.com/hearthstatsprod/full_card/" + cardName +".png"
		}
	},

	componentDidMount: function() {
		this.setState({
			hasLoaded: true
		});
	},

	render: function() {
		return (
			<img src={this.state.hasLoaded ? this.state.imgSrc : "/assets/blind_draft/deckbuilder-card-back.png"} className={"deckbuilder-img " + this.props.cName} onClick={this.handleClick}/>
		);
	},
	handleClick: function(event) {
		this.props.click(event);
	}
});
