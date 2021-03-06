import React from 'react';
import './collection.styles.scss'
import {connect } from 'react-redux';
import { selectCollection } from '../redux/selectors/shop.selector';
import CollectionItem from '../CollectionItem/collectionItem.component';


const CollectionPage = ({collection})=>{
    const { title, items } = collection;
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps =(state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);