import { Layout } from "../layout/component.jsx";
import {restaurants} from "../../../materials/mock.js";
import { Restaurant } from "../restaurant/component.jsx"

export const App = ()=> {
    return (
     <Layout>
            {restaurants.map(({id,name, menu,reviews}) =>  <Restaurant key={id} name = {name} menu={menu} reviews = {reviews} />)}
     </Layout>
   );
}