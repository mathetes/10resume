import { PersonalCard } from '../components/PersonalCard/';
import {Knowledges} from '../components/Knowledges/';

export default function Sidebar() {
  return (
    <sidebar className="sidebar">
      <PersonalCard />
      <Knowledges />
    </sidebar>
  );
}
