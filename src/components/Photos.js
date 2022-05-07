import { useState, useEffect } from 'react'
import styles from './Photos.module.css'

const Photos = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9')
        .then((result) => {
            return result.json();
        })
        .then((data) => setPhotos(data))
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {photos.map((photo) => (
                   <div key={photo.id} className={styles.box}>
                       <span className={styles.id}>{photo.id}</span>
                       <h2>Photos</h2>
                       <p className={styles.text}>{photo.title}</p>
                       <img src= {photo.thumbnailUrl}></img>
                   </div>
                ))}
            </div>
        </div>
    )
}

export default Photos