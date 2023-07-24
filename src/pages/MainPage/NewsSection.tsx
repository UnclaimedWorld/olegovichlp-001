import tw from 'tailwind-styled-components';
import AboutHeading from '../../components/AboutHeading';
import AppButton from '../../components/AppButton';
import AppContainer from '../../components/AppContainer';

const Main = tw.article`
    py-[120px]
`
const Title = tw(AboutHeading)`
    mb-[38px]
`
const List = tw.ul`
    grid
    grid-cols-2
    gap-[1px]
    mb-[38px]
`
const Item = tw.li`
    p-9
    bg-secondary-100
    flex
    flex-col
    h-[382px]
`
const ItemSub = tw.h4`
    uppercase
    text-xs
    font-bold
    tracking-[-0.24px]
    mb-auto
    text-primary
`
const ItemTitle = tw.h3`
    text-2xl
    leading-8
    font-bold
    tracking-[-0.24px]
    mb-5
`
const ItemDescription = tw.p`
    font-normal
    leading-6
    text-paragraph-100
`
const Button = tw(AppButton)`
    px-[35px]
    mx-auto
    block
`

const newsItem = {
    name: 'Как китайский язык может помочь в карьере? ',
    category: 'маркетинг',
    description: 'Рассказываем, зачем китайский язык инженерам, юристам, закупщикам, маркетологам, IT-специалистам и другим профессионалам.'
};
const newsList = [newsItem,newsItem,newsItem,newsItem,newsItem,newsItem];

export default function NewsSection() {
    return (
        <Main>
            <AppContainer>
                <Title>Статьи, которые <div className="text-primary">вам помогут</div></Title>
                <List>
                    {
                        newsList.map(n => (
                            <Item>
                                <ItemSub>{n.category}</ItemSub>
                                <ItemTitle>{n.name}</ItemTitle>
                                <ItemDescription>{n.description}</ItemDescription>
                            </Item>)
                        )
                    }
                </List>
                <Button outline>Все статьи</Button>
            </AppContainer>
        </Main>
    )
}