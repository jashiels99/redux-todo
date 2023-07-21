import Container from './Container';
import SiteLogo from './SiteLogo';

const Header = () => {
    return (
        <header className="sticky top-0 w-full h-20 border-b border-gray-700 backdrop-blur">
            <Container>
                <div className="flex items-center justify-center h-full">
                    <SiteLogo />
                </div>
            </Container>
        </header>
    );
};

export default Header;
