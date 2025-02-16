import { memo } from "react";

export const Repos = memo((props) => (
  <ul className="popular-list">
    {props.data.map((repo, index) => (
      <li key={repo.id} className="popular-item">
        <div className="popular-rank">#{index + 1}</div>
        <ul className="space-list-items">
          <li>
            <img className="avatar" src={repo.owner.avatar_url} alt="avatar" />
          </li>
          <li>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count}</li>
        </ul>
      </li>
    ))}
  </ul>
));
