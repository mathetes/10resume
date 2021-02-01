import "../src/layout/Main.scss";
import "../src/layout/Layout.scss";
import "../src/layout/Sidebar.scss";
import "../src/components/PersonalCard/PersonalCard.scss";
import "../src/components/Aboutme/Aboutme.scss";
import "../src/components/Services/Services.scss";
import "../src/components/Knowledges/Knowledges.scss";
import "../src/components/NavMenu/NavMenu.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
