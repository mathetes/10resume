import PersonalCard from '../components/PersonalCard/PersonalCard';
import NavMenu from '../components/NavMenu/NavMenu';



export default function Sidebar() {
  return (
    <sidebar className="sidebar">
      <NavMenu />
      <PersonalCard />
    </sidebar>
  );
}
