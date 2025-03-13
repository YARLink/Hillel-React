import { memo } from "react";

export const SelectedLanguage = memo((props) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={
            props.selectedLanguage === language ? { color: "#d0021b" } : null
          }
          onClick={() => props.selectLanguageHandler(language)}
        >
          {language}
        </li>
      ))}
    </ul>
  );
});
