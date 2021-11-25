import  styled  from 'styled-components';
// // import { Categories } from '../data';
// // import CategoryItems from './CategoryItems';

const Container = styled.div`
    display: 1;
    margin: 5px;
    height: 80vh;
    position: relative;
    `;

//     // const Image = styled.img`
//     //         width: 100%;
//     //         height: 100%;
//     //         object-fit: cover;
//     // `;
//     // const Info = styled.div`
//     //         position: absolute;
//     //         top: 0;
//     //         left: 0;
//     //         width: 100%;
//     //         height: 100%;
//     //         background-color: blue;
//     // `;
//     // const Title = styled.h1`
//     //         color: white;
//     //         margin-bottom: 20px
//     // `;
//     // const Button = styled.button`
//     //         border: none;
//     //         padding: 15px;
//     //         background-color: white;
//     //         color: gray;
//     //         cursor: pointer;
//     //         font-weight: 500px;
//     // `;



const CategoryItems = ({item}) => {
    return (
        <Container>

            Adding Products Here!!
            {/* <Image src= {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Click Here</Button>
            </Info>
             */}
        </Container>
    )
}

export default CategoryItems;
