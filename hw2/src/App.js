import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postsList: [],
    };
  }

  removeListItem(id) {
    const updatedPostsList = this.state.postsList;
    updatedPostsList.splice(id, 1);
    this.setState({ postsList: updatedPostsList });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ postsList: data }));
  }

  render() {
    return (
      <ul>
        {this.state.postsList.map((item, index) => (
          <li key={index}>
            <h2>
              <span>{item.id}</span>
              &nbsp;
              {item.title}
            </h2>
            <p>{item.body}</p>
            <button onClick={() => this.removeListItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
