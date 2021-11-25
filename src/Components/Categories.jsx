import  styled  from 'styled-components';
import { categories } from '../data';
import Categories from './CategoryItems';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    `;

const Categories = () => {
    return (
        <Container>
            
           

             {categories.map((item) => (
                <CategoryItems item= {item}/>
            ))} 


        </Container>
    )
}

export default Categories;