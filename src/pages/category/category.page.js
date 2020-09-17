import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchCategories} from '../../redux'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
export function CategoryPage(prop) {
    const categoryState = useSelector(state => state.category)
    const dispatch = useDispatch()
    let match = useRouteMatch();
    React.useEffect(()=>{
        console.log(categoryState.categories)
        if(categoryState.categories.length ==0) dispatch(fetchCategories())
    }, [])

    return  categoryState.loading ? (<h3>Loading ...</h3>) : 
    categoryState.error ?  (<p style={{color:'red'}}>{categoryState.error}</p>):
            (<div>
                <p>User list</p>
                <div>
                    {
                        categoryState && categoryState.categories && categoryState.categories
                        .map( cate => <div key={cate.Id}><Link to={`${match.url}/${cate.Id}`}><p>{cate.Name}</p></Link> </div>)
                    }
                </div>
            </div>
            )
}

export default CategoryPage
