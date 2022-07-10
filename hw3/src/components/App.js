import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postsList: [],
      postTitle: "",
      postText: "",
      inputIsValid: "",
      newPostTitle: "",
      newPostText: "",
      setDisabled: true,
    };
  }

  isValid(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])[a-z\sA-Z]{2,7}$/.test(value);
  }

  onChangePost = (event) => {
    if (this.isValid(event.target.value)) {
      this.setState({
        setDisabled: false,
        inputIsValid: event.target.value,
      });
    } else {
      this.setState({
        setDisabled: true,
      });
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  addItem() {
    const postsList = this.state.postsList;

    postsList.unshift({
      id: postsList.length - (postsList.length - 1),
      title: this.state.postTitle,
      body: this.state.postText,
    });

    const newPostsList = postsList;
    this.setState({
      postTitle: "",
      postText: "",
      inputIsValid: "",
      postsList: newPostsList,
      setDisabled: true,
    });
  }

  changeItem(index) {
    const item = this.state.postsList[index];
    item.title = this.state.newPostTitle;
    item.body = this.state.newPostText;

    const newPostsList = this.state.postsList;

    this.setState({ postsList: newPostsList });
  }

  changeItemValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  removeListItem(id) {
    const newPostsList = this.state.postsList;
    newPostsList.splice(id, 1);
    this.setState({ postsList: newPostsList });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ postsList: json }));
  }

  render() {
    return (
      <div className="wrapper">
        <form className="form">
          <input
            name="postTitle"
            type="text"
            placeholder="Enter title"
            value={this.state.postTitle}
            onChange={this.onChangePost}
          ></input>
          <textarea
            name="postText"
            type="text"
            placeholder="Enter text"
            value={this.state.postText}
            onChange={this.onChangePost}
          />
          <button
            type="button"
            disabled={this.state.setDisabled}
            onClick={() => this.addItem()}
          >
            Add
          </button>
        </form>

        <ul className="list">
          {this.state.postsList.map((item, index) => (
            <li key={index}>
              <h5>
                <span>{item.id}</span>
                &nbsp;
                {item.title}
              </h5>
              <p>{item.body}</p>
              <div className="form">
                <input
                  name="newPostTitle"
                  type="text"
                  placeholder="Update title"
                  value={this.props.changeItemValue}
                  onChange={this.changeItemValue}
                ></input>
                <textarea
                  name="newPostText"
                  type="text"
                  placeholder="Update text"
                  value={this.props.changeItemValue}
                  onChange={this.changeItemValue}
                />
                <button onClick={() => this.changeItem(index)}>Change</button>
                <button onClick={() => this.removeListItem(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
