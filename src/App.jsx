import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const [studentsWithBirthdayToday, setStudentsWithBirthdayToday] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${baseUrl}/birthdays`)
      .then((response) => response.json())
      .then((data) => {
        setStudentsWithBirthdayToday(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la requête', error);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main students={studentsWithBirthdayToday} />
    </div>
  );
}
