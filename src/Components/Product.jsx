import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import  styled  from 'styled-components';


const Container = styled.div`
   flex: 1;
   margin 5px;
    `;

    // const Circle = styled.div
    // const Image = styled.img
    // const Info = styled.div
    // const Icon = styled.div

const Products = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src= {item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
           


        </Container>
    )
}

export default Products;