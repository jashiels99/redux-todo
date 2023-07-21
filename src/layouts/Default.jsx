import Container from '../components/Layout/Container';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

const Default = ({ children }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="pb-8 grow">
                    <Container>{children}</Container>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Default;
