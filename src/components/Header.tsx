import NavBar from './NavBar';

export default function Header() {
  return (
    <header
      id="header"
      className="fixed z-10 top-0 left-0 right-0 p-4 backdrop-blur-sm"
    >
      <NavBar />
    </header>
  );
}
