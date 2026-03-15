import "./JournalBanner.scss";

export default function JournalBanner() {
  const images = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.png",
    "10.png",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.png",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.png",
    "22.jpg",
    "23.png",
  ];

  const loopImages = [...images, ...images];

  return (
    <div className="journal-banner">
      <div className="journal-track">
        {loopImages.map((img, index) => (
          <img
            key={index}
            src={`assets/images/Journal_Images/${img}`}
            alt="journal"
          />
        ))}
      </div>
    </div>
  );
}
