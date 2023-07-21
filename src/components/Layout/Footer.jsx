import Container from './Container';

const Footer = () => {
    return (
        <footer className="h-16 border-t border-gray-700">
            <Container>
                <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-400">
                        Copyright &copy; 2023 ReduxTodo
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
