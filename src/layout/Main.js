import FlexboxInfo from "../components/Flexbox/Flexbox";
import Aboutme from "../components/Aboutme/Aboutme";
import Services from "../components/Services/Services";

export default function Main() {
  return (
    <div className="main-block">
      <Aboutme />
      <Services />
    </div>
  );
}
