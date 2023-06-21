export default function Header() {
  const date = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const formattedDate = date.toLocaleDateString('fr-FR', options).toUpperCase();

  return (
    <>
      <div className="border-b border-black text-4xl p-8 flex justify-between font-bold">
        <h1>CITATIONS ET ANNIVERSAIRES</h1>
        <p>{formattedDate}</p>
      </div>
    </>
  );
}
