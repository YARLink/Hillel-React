import React from "react";
import { fetchPopularRepos } from "../../utils/api";
import { SelectedLanguage } from "./SelectedLanguage";
import { Repos } from "./Repos";
import Spinner from "./Spinner";

export default class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: "All",
      repos: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchPopularReposHandler(this.state.selectedLanguage);
  }

  fetchPopularReposHandler = (language) => {
    fetchPopularRepos(language).then((data) =>
      this.setState({ repos: data, isLoading: false })
    );
  };

  selectLanguage = (language) => {
    this.setState({ isLoading: true });
    this.setState({ selectedLanguage: language, repos: null });
    this.fetchPopularReposHandler(language);
  };

  render() {
    return (
      <div>
        <Spinner active={this.state.isLoading} />
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          selectLanguageHandler={this.selectLanguage}
          disabled={this.state.isLoading}
        />
        {this.state.repos && <Repos data={this.state.repos} />}
      </div>
    );
  }
}
