import AboutSection from "./AboutSection";
import ContactsSection from "./ContactsSection";
import MainBanner from "./MainBanner";
import NewsSection from "./NewsSection";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";

export default function MainPage() {
    return (
        <main>
            <MainBanner/>
            <AboutSection/>
            <ServicesSection/>
            <ReviewsSection/>
            <NewsSection/>
            <ContactsSection/>
        </main>
    )
}