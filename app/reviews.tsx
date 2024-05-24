// app/reviews/page.tsx

import "@/app/globals.css";

interface Review {
  id: number;
  reviewer: string;
  rating: number;
  date: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    reviewer: 'Guest 15/05',
    rating: 4,
    date: '2024-05-15',
    content: 'Thank you for your support and sacrifice.',
  },
  // Add more reviews as needed
];

const ReviewsPage: React.FC = () => {
  return (
    <div className="r-container">
      <h1 className="title">Customer Reviews</h1>
      <div className="main">
      {reviews.map((review) => (
        <div key="review.id" className="review">
          <h2 className="reviewer">{review.reviewer}</h2>
          <p className="rating">Rating: <span>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span></p>
          <p className="date">Reviewed on: {review.date}</p>
          <p className="content">{review.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
