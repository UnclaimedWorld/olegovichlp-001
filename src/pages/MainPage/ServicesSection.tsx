import tw from "tailwind-styled-components";
import AboutHeading from "../../components/AboutHeading";
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";

const Section = tw.article`
    pt-[120px]
    overflow-hidden
    bg-[position:0_calc(100%-126px)]
    bg-no-repeat
`
const Heading = tw(AboutHeading)`
    max-w-[420px]
`
const ColsWrap = tw.div`
    flex
    justify-between
`
const Col = tw.div`
    w-[calc(50%-10px)]
    flex
    flex-col
`
const Description = tw.p`
    text-lg
    leading-[26px]
    font-normal
    mt-[38px]
    mb-9
    shrink-0
`
const ImgWrap = tw.div`
    grow
    flex
    justify-end
`
const ImgMain = tw.img`
    h-full
    max-w-none
`
const ServiceCard = tw.article`
    p-[38px]
    mb-3
    last:mb-0
    group
    bg-white

    first:bg-[linear-gradient(135deg,#337ED9_50%,#337ED9_51%,#fff_52%,#fff),linear-gradient(90deg,#fff,#fff)]
    first:bg-[size:38px_38px,auto]
    first:bg-[position:100%_100%]
    first:bg-no-repeat
`
const ServiceHeading = tw.h3`
    text-3xl
    leading-10
    font-bold
    tracking-[-0.3px]
    mb-8
`
const ServiceDescription = tw.p`
    font-normal
    mb-[26px]
    text-paragraph-100
    group-first:text-paragraph-300
`
const ServiceButton = tw(AppButton)`
    px-[34px]
`

const serviceList = [
    {
        id: 1,
        name: 'Консультация 1+1',
        text: 'Индивидуальная консультация по маркетингу и рекламе. Маркетинговый и рекламный аудит Вашего бизнеса. Разработка маркетинговой стратегии. 275 000 сум за 60 мин.',
        button: 'Получить консультацию',
        primary: true
    },
    {
        id: 2,
        name: 'Тренинги, мастер-классы и семинары',
        text: 'на самые актуальные и наболевшие темы по маркетингу и рекламе',
        button: 'Ближайшее мироприятие'
    },
    {
        id: 3,
        name: 'Вопрос-ответ',
        text: <div>Задайте Ваш вопрос по рекламе и маркетингуи получите на них бесплатный экспертный ответ в рубрике «Вопрос-ответ» в Telegram-канале — <span className="text-primary">@olegovich_exp</span></div>,
        button: 'Задать вопрос'
    },
]

export default function ServicesSection() {
    return (
        <Section style={{backgroundImage: "url('/img/services-background.png')"}}>
            <AppContainer>
                <div className="w-full">
                    <Heading>
                        Развивайте Ваш бизнес <div className="text-primary">вместе со мной</div>
                    </Heading>
                    <ColsWrap>
                        <Col>
                            <Description><b>Стратегии и кампании</b>, над которыми<br/> мы будем работать и создавать вместе,<br/> не только основаны на проверенных принципах,<br/> но что более важно, <b>проверены «в бою»<br/> на компаниях Узбекистана.</b></Description>
                            <ImgWrap>
                                <ImgMain src="/img/services-img.png"/>
                            </ImgWrap>
                        </Col>
                        <Col className="-mt-2">
                            { serviceList.map((s, idx) => (
                                <ServiceCard key={s.id}>
                                    <ServiceHeading>{s.name}</ServiceHeading>
                                    <ServiceDescription>{s.text}</ServiceDescription>
                                    <ServiceButton outline={idx >= 1}>{s.button}</ServiceButton>
                                </ServiceCard>
                            )) }
                        </Col>
                    </ColsWrap>
                </div>
            </AppContainer>
        </Section>
    );
}