import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchCategory} from '../../redux'

import {
    useParams
  } from "react-router-dom";
export function CategoryDetailPage(prop) {
    const categoryState = useSelector(state => state.category)
    const dispatch = useDispatch()

    let { categoryId } = useParams();

    React.useEffect(()=>{
        dispatch(fetchCategory(categoryId))
    }, [])

    return categoryState.loading || !categoryState.category ? (<h6>Loading...</h6>):
    categoryState.error ?(<p style={{color:'red'}}>{categoryState.error}</p>):
    
        (
            <div>
            <h1>Category Detail Page - {categoryId}</h1>
                <p>{categoryState.category.Id}</p>
                <p>{categoryState.category.Name}</p>
                <p>{categoryState.category.Description}</p>
            </div>
        )
}

export default CategoryDetailPage