import AboutSection from "./AboutSection";
import MainBanner from "./MainBanner";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";

export default function MainPage() {
    return (
        <main>
            <MainBanner/>
            <AboutSection/>
            <ServicesSection/>
            <ReviewsSection/>
        </main>
    )
}