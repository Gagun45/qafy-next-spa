import Container from "../General/Container/Container";
import ThemeToggle from "../General/ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="w-full bg-accent h-24">
      <Container className="flex items-center gap-4">
        <span>Qafy Mobile</span>
        <ThemeToggle />
      </Container>
    </header>
  );
};
export default Header;
