import DatePicker from '../components/DatePicker'
import GetToday from '../components/GetToday'
import PhotoRenderer from '../components/PhotoRenderer'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    const fetchPhotoData = async () => {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${formattedDate}`);
      const data = await response.json();
      setPhotoData(data);
    };
    fetchPhotoData();
  }, [selectedDate]);

  return (
    <>
      <div className={styles.contSelector}>
        <div className={styles.dateSelector}>
          <h2 className={styles.subtitleSelector}>SELECCIÓN POR FECHA</h2>
          <DatePicker date={selectedDate} setDate={setSelectedDate} />
        </div>
        <div className={styles.todaySelector}>
          <h2 className={styles.subtitleSelector}>FOTO DEL DÍA</h2>
          <GetToday setDate={setSelectedDate} />
        </div>
      </div>
      <div className={styles.contPicture}>
        {photoData.url && <PhotoRenderer imageUrl={photoData.url} title={photoData.title} explanation={photoData.explanation} date={photoData.date} />}
      </div>
    </>
  );
}
