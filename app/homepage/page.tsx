
import CtaSection from "../components/ctasection";
import Footer from "../components/footer";
import Header from "../components/header";
import StudyPrograms from "./studyprograms";
import VguInFigures from "./vguinfigures";
import VguPartners from "../components/vgupartners";
import VguToday from "./vgutoday";
import HeroSection from "./herosection";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <HeroSection />
            <StudyPrograms />
            <VguInFigures />
            <VguToday />
            <VguPartners />
            <CtaSection />
            <Footer />
        </main>
    )


}