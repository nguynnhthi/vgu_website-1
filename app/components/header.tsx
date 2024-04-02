import VGULogo from '../ui/vgu-logo';
import NavBar from './navbar';
export default function Header() {
  return (
    <div className="md:h-30 h-30 mb-4 flex w-screen items-center justify-between bg-white shadow-lg">
      <VGULogo />
      <NavBar />
    </div>
  );
}
