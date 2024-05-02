import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "./herosection";
import Organization from "./organization";
import Test from "./test";
export default function Page() {
    return (
        <main>
            <Header />
            <HeroSection />
            <Organization />
            {/* <Test /> */}
            <Footer />
        </main>
    )


}

