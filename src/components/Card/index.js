import React from 'react';
import styles from './Card.module.scss'


function Card({ imageUrl, title, price,onFavorite, onPlus }) {

    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price })
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneaker"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-check.svg' : '/img/btn-plus.svg'} alt="Add"/>  
                </div>
            </div>
    )
}

export default Card;