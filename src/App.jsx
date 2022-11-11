import { useTranslation, Trans } from "react-i18next";

const lngs = {
	en: { nativeName: "English" },
	es: { nativeName: "Espaniol" },
	uk: { nativeName: "Ukrainian" },
};

function App() {
	const { t, i18n } = useTranslation();
	return (
		<div>
			{Object.keys(lngs).map((lng) => (
				<button
					type="submit"
					key={lng}
					onClick={() => i18n.changeLanguage(lng)}
					disabled={i18n.resolvedLanguage === lng}
				>
					{lngs[lng].nativeName}
				</button>
			))}
			<p>{t("test")}</p>
			<p>
				<Trans i18nKey={"test2"}>ffff</Trans>
			</p>
		</div>
	);
}

export default App;
