import tw from "tailwind-styled-components";
import AppButton from "../../components/AppButton";
import humanImage from '../../assets/img/human-main-01.png?url';
import bannerArrow from '../../assets/img/banner-arrow.svg?url';
import AppContainer from "../../components/AppContainer";

const Main = tw.article`
    h-screen
    min-h-[800px]
    max-h-[1000px]
    w-full
    bg-[size:max(((100vw-1190px)/2_-_104px),0px)_272px,_calc((100vw-1190px)/2+174px)_545px,_calc((100vw-1190px)/2+404px)_100%,_100%]
    bg-[linear-gradient(90deg,#F9F8FC,#F9F8FC),linear-gradient(90deg,white,white),linear-gradient(90deg,currentColor,currentColor),linear-gradient(90deg,#fff,#fff)]
    bg-[position:0px_100%,_0px_100%,_0px_0px]
    bg-no-repeat
`
const Container = tw(AppContainer)`
    h-full
`
const FigureWrap = tw.figure`
    w-[404px]
    self-end
    relative
`
const FigureArrowTop = tw.span`
    w-[81px]
    h-[83px]
    absolute
    -right-10
    -top-9
`
const FigureArrowBottom = tw.span`
    w-[81px]
    h-[83px]
    absolute
    right-5
    top-7
`
const FigureImage = tw.img`
    w-full
    max-h-full
`
const ContentWrap = tw.section`
    w-[686px]
    ml-[100px]
    h-full
    pt-[max(min(30.7vh,307px),245px)]
`
const SuperTitle = tw.h2`
    text-[22px]
    -tracking-[0.22px]
    mb-2.5
    text-primary
`
const Title = tw.h1`
    text-[40px]
    font-extrabold
    leading-[53px]
    -tracking-[0.4px]
    text-paragraph-200
    mb-8
`
const Description = tw.p`
    text-lg
    font-normal
    text-paragraph-100
    mb-8
`
const Button = tw(AppButton)`
    px-9
`

export default function MainBanner() {
    return (
        <Main>
            <Container>
                <FigureWrap>
                    <FigureImage src={humanImage}/>
                    <FigureArrowTop style={{backgroundImage: `url(${bannerArrow})`}}/>
                    <FigureArrowBottom style={{backgroundImage: `url(${bannerArrow})`}}/>
                </FigureWrap>
                <ContentWrap>
                    <SuperTitle>Привет, я Олег Кузнецов</SuperTitle>
                    <Title>Маркетолог, эксперт по digital-маркетингу и рекламе с практическим опытом работы в Узбекистане более 12 лет</Title>
                    <Description>Задайте Ваш вопрос по рекламе и маркетингу и получите на него бесплатный экспертный ответ</Description>
                    <Button>Задать вопрос</Button>
                </ContentWrap>
            </Container>
        </Main>
    )
}