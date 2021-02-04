import { useState } from 'react';
// import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

// class Searchbar extends Component {
//   state = {
//     name: '',
//   };

function Searchbar({ onHandleSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      toast.error('Что ищем ?');
      return;
    }
    // this.props.onHandleSubmit(name);
    // console.log(this.state.name);
    onHandleSubmit(name);
    setName('');
  };
  const handleChange = e => {
    setName(e.currentTarget.value);
  };

  return (
    <header onSubmit={handleSubmit} className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  // onSearchQueryChange: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
};

export default Searchbar;
