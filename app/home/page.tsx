import Carousel from "./carousel";
import CtaSection from "../components/ctasection";
import Footer from "../components/footer";
import Header from "../components/header";
import StudyPrograms from "./studyprograms";
import VguInFigures from "./vguinfigures";
import VguPartners from "./vgupartners";
import VguToday from "./vgutoday";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Carousel />
            <StudyPrograms />
            <VguInFigures />
            <VguToday />
            <VguPartners />
            <CtaSection />
            <Footer />
        </main>
    )


}