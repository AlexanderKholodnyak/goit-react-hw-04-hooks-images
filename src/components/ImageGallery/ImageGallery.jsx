// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import apiService from '../services/apiService';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import Loader from '../Loader';
import Modal from '../Modal';
import ErrorView from '../ErrorView';
import Button from '../Button';

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     largeImageURL: '',
//     page: 1,
//     error: null,
//     isLoading: false,
//     showModal: false,
//   };

function ImageGallery({ query, page, images, setPage, setImages }) {
  // const [images, setImages] = useState(newImages);
  const [largeImageURL, setLargeImageURL] = useState('');
  // const [page, setPage] = useState(newPage);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(query);
    if (query === '') {
      return;
    }

    setIsLoading(true);

    apiService
      .fetchImages(query, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
        }
      })
      .catch(err => {
        setError(err);
      })
      .finally(setIsLoading(false));
  }, [query, page, setImages]);

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    scrollPage();
  };
  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: 'smooth',
      });
    }, 500);
  };

  // render() {
  //   const { images, error, isLoading, largeImageURL, showModal } = this.state;
  return (
    <div>
      {error && <ErrorView textError={error.message} />}

      {
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onOpenModal={onOpenModal}
            />
          ))}
        </ul>
      }
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && <Button onLoadMore={onLoadMore} />}
      {showModal && (
        <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}
      {<ToastContainer autoClose={3000} />}
    </div>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
