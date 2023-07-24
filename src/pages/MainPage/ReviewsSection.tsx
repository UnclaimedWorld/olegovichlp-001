import tw from 'tailwind-styled-components';
import AboutHeading from '../../components/AboutHeading';
import AppContainer from '../../components/AppContainer';

const Main = tw.article`
    pt-[120px]
`
const Title = tw(AboutHeading)`
    mb-[38px]
`
const List = tw.ul`
    flex
    -ml-5
`
const Item = tw.li<{primary?: boolean}>`
    w-[calc(100%/3-20px)]
    p-[0_38px_62px_38px]
    ml-5
    bg-[position:100%_32px]
    bg-[linear-gradient(to_bottom,#fff,#fff)]
    bg-no-repeat

    ${p => p.primary && (`
        bg-[linear-gradient(135deg,#337ED9_50%,#337ED9_51%,#fff_52%,#fff),linear-gradient(90deg,#fff,#fff)]
        bg-[size:38px_38px,100%_calc(100%-32px)]
        bg-[position:100%_100%]
        bg-no-repeat
    `)}
`
const ItemTitle = tw.h3`
    text-2xl
    leading-[1]
    font-bold
    mb-2
`
const ItemSub = tw.h4`
    leading-[1.5]
    font-normal
    text-primary
    mb-8
`
const ItemDescription = tw.p`
    leading-[1.5]
    font-normal
    text-paragraph-100
`
const ItemImage = tw.img`
    w-[84px]
    h-[84px]
    mb-[42px]
    object-cover
`

const reviewsList = [
    {
        id: 1,
        avatar: '/img/avatar-01.jpg',
        name: 'Зухра Умарова',
        sub: 'Менеджер проектов',
        description: <div>Лучший курс из тех, что я проходил!<br/><br/>Изучение всех нужных программ и иструментов, куча полезных материалов, личный опыт автора.<br/><br/>Обучился в работе Маркетолога и аналитика, поработал над реальными задачами.</div>
    },
    {
        id: 2,
        avatar: '/img/avatar-02.jpg',
        name: 'Макс федоров',
        sub: 'Менеджер',
        description: <div>Лучший курс из тех, что я проходил!<br/><br/>Изучение всех нужных программ и иструментов, куча полезных материалов, личный опыт автора.<br/><br/>Обучился в работе Маркетолога и аналитика, поработал над реальными задачами.</div>,
        primary: true
    },
    {
        id: 3,
        avatar: '/img/avatar-03.jpg',
        name: 'Алина Никифорова',
        sub: 'Бизнесвумен',
        description: <div>Лучший курс из тех, что я проходил!<br/><br/>Изучение всех нужных программ и иструментов, куча полезных материалов, личный опыт автора.<br/><br/>Обучился в работе Маркетолога и аналитика, поработал над реальными задачами.</div>
    },
]

export default function ReviewsSection() {
    return (
        <Main>
            <AppContainer>
                <div className="w-full">
                    <Title>Отзывы <div className="text-primary">реальных клиентов</div></Title>
                    <List>
                        {reviewsList.map(r => (
                            <Item key={r.id} primary={r.primary}>
                                <ItemImage src={r.avatar}/>
                                <ItemTitle>{r.name}</ItemTitle>
                                <ItemSub>{r.sub}</ItemSub>
                                <ItemDescription>{r.description}</ItemDescription>
                            </Item>
                        ))}
                    </List>
                </div>
            </AppContainer>
        </Main>
    )
}