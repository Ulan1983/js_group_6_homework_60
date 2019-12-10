import React, {Component} from 'react';
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";

class Chat extends Component {
	state = {
		posts: [],
		message: '',
		author: '',
	};

	componentDidMount() {
		this.getMessages()
	}

	componentDidUpdate() {
		clearInterval(this.interval);
		const lastDateTime = this.state.posts[this.state.posts.length - 1].datetime;
		if (lastDateTime) {
			this.interval = setInterval(this.getMessages, 2000, lastDateTime)
		}
	}

	shouldComponentUpdate(nextState) {
		return (this.state.message !== nextState.message ||
			this.state.author !== nextState.author ||
			this.state.posts.length !== nextState.length)
	}

	getMessages = (lastMessages) => {
		const url = 'http://146.185.154.90:8000/messages';
		const lastUrl = 'http://146.185.154.90:8000/messages?datetime='+ lastMessages;
		fetch(lastMessages ? lastUrl : url).then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Error');
		}).then(posts => {
			this.setState({posts: [...this.state.posts].concat(posts)})
		})
	};

	sendMessage = e => {
		e.preventDefault();
		const url = 'http://146.185.154.90:8000/messages';

		const data = new URLSearchParams();
		data.set('message', this.state.message);
		data.set('author', this.state.author);

		fetch(url, {
			method: 'post',
			body: data,
		}).then(() => {
			this.setState({author: '', message: ''})
		})
	};

	changeHandler = e => {
		this.setState({[e.target.name]: (e.target.value)});
	};


	render() {
		return (
			<div className="App">
				<Form
					onChange={e => this.changeHandler(e)}
					submit={e => this.sendMessage(e)}
					message={this.state.message}
					author={this.state.author}
				/>
				{this.state.posts.map(post => (
					<Posts
						key={post._id}
						author={post.author}
						message={post.message}
						date={post.datetime}
					/>
				)).reverse()
				}
			</div>
		);
	}
}

export default Chat;