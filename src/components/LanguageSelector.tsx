const availableLanguages = ["en", "ua"];

type ComponentProps = {
  setLang: (val: string) => void;
};

const LanguageSelector = (props: ComponentProps) => {
  return (
    <div className="flex">
      {availableLanguages.map((lang, idx) => {
        return (
          <div className="flex-row items-center mx-2" key={idx}>
            <input
              className="radio radio-primary px-2"
              type="radio"
              name="language"
              key={idx}
              value={lang}
              defaultChecked={availableLanguages[0] === lang}
              id={`rad-${idx}`}
              onChange={(e) => props.setLang(e.target.value)}
            ></input>
            <label key={lang} htmlFor={`rad-${idx}`}>
              {lang}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
