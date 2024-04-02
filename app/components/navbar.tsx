import MainNav from './mainnav';
import SubNav from './subnav';
export default function NavBar() {
  return (
    <div className="h-30 flex flex-col justify-between">
      <div>
        <SubNav />
      </div>
      <div>
        <MainNav />
      </div>
    </div>
  );
}
