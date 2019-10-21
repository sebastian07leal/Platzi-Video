import React from 'react';
import '../assets/styles/components/Search.sass';

const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className="main__input" placeholder="Buscar..."/>
    </section>
)

export default Search;