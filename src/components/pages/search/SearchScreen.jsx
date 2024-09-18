import React from 'react';
import HeaderStays from '../../organisms/header/HeaderStays';
import Search from '../../molecules/search/Search';
import './searchScreen.css';

const SearchScreen = () => {
  return (
    <>
    <HeaderStays/>
      <main className="search-screen">
        <section className="search-screen-section">
        <h1 className="search-screen-heading">Trouvez la destination idéale</h1>
          <p className="search-screen-description">
            Prêt pour une aventure ? Trouvez les meilleurs endroits pour vos vacances  à prix réduits !
          </p>
          <Search />
        </section>
      </main>
    </>
  );
}
export default SearchScreen;