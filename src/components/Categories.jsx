import React from 'react';
import '../assets/styles/components/Categories.sass'

const Categories = ({children}) => (
    <div className="categories">
        <h2 className="categories__title">Mi lista</h2>
        {children}
    </div>
)

export default Categories;