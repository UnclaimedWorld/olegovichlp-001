import tw from "tailwind-styled-components";
import AppContainer from "../../components/AppContainer";
import quotes from '../../assets/img/quotes.svg?url';
import bannerArrow from '../../assets/img/banner-arrow.svg?url';
import AboutHeading from "../../components/AboutHeading";

const Main = tw.article`
    bg-[linear-gradient(90deg,#337ED9,#337ED9),_linear-gradient(90deg,#fff,#fff)]
    bg-[size:calc((100vw-1190px)/2+383px)_100%,_100%]
    bg-[position:100%_0px]
    h-screen
    max-h-[1000px]
    min-h-[900px]
    bg-no-repeat
    flex
    items-center
`
const ContentImage = tw.img`
    w-[484px]
    h-[680px]
    object-cover
    self-end
`
const ContentWrap = tw.section`
    pl-[100px]
    mr-[120px]
    w-[584px]
`
const Title = tw(AboutHeading)`
    mb-9
`
const Description = tw.p`
    relative
    text-lg
    leading-[26px]
    text-paragraph-100
    font-normal
    mb-7
`
const Quotes = tw.span`
    w-[26px]
    h-[22px]
    block
    absolute
    -left-[45px]
    top-1
`
const CardMarketing = tw.li`
    mb-[14px]
    p-[30px_33px_30px_26px]
    shadow-card
    flex
    font-normal
    last:mb-0
`
const CardIcon = tw.img`
    w-4
    h-4
    mt-1.5
    mr-[22px]
`
const CardDescription = tw.p`
    pr-11
`
const CardLogos = tw.div`
    py-[3px]
    flex
    flex-grow
    flex-col
    justify-center
    shrink-0
`
const CardLogo = tw.img`
    w-[77px]
    object-contain
    [&:nth-child(n+2)]:mt-auto
`

const marketingList = [
    {
        id: 1,
        important: 'Работал в крупных международных компаниях',
        text: ' на руководящих должностях по направлению маркетинг.',
        logos: [
            'ucell.svg',
            'evo.svg'
        ]
    },
    {
        id: 2,
        important: 'Со-основатель первой площадки предпринимателей',
        text: ' в Узбекистане. ',
        logos: [
            'business-hub.png',
        ]
    },
    {
        id: 3,
        important: 'Ментор программы поддержки',
        text: ' молодёжных инновационных идей и стартап-проектов при ПРООН',
        logos: [
            'startup.png'
        ]
    },
]

export default function AboutSection() {
    return (
        <Main>
            <AppContainer>
                <ContentWrap>
                    <Title>Совсем немного <div className="text-primary">обо мне</div></Title>
                    <Description><Quotes style={{backgroundImage: `url(${quotes})`}}/>Я помогаю бизнесу и предпринимателям Узбекистана строить правильную маркетинговую стратегию, определять эффективные и проверенные рекламные каналы и инструменты, вследствие – увеличивать продажи и рентабельность бизнеса. Работая со мной, вы сможете не совершать ошибки в маркетинге и рекламе, которые обходятся слишком дорого.</Description>
                    <ul>
                        {marketingList.map(item => (
                            <CardMarketing key={item.id}>
                                <CardIcon src={bannerArrow}/>
                                <CardDescription><b>{item.important}</b>{item.text}</CardDescription>
                                <CardLogos>
                                    {item.logos.map(logo => (<CardLogo key={logo} src={"/img/about-logos/" + logo}/>))}
                                </CardLogos>
                            </CardMarketing>
                        ))}
                    </ul>
                </ContentWrap>
                <ContentImage src="/img/about-01.jpg"/>
            </AppContainer>
        </Main>
    );
}