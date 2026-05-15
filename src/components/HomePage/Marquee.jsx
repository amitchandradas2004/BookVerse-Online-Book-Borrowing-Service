import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
const books = [
  {
    id: 1,
    title: "New Arrivals: The Silent Forest",
    author: "John Carter",
  },
  {
    id: 2,
    title: "New Arrivals: Quantum World",
    author: "Dr. Alan Smith",
  },
  {
    id: 3,
    title: "React Mastery",
    author: "Sarah Lee",
  },
  {
    id: 4,
    title: "Lost in Time",
    author: "Emily Watson",
  },
  {
    id: 5,
    title: "New Arrivals: Next.js Pro",
    author: "David Kim",
  },
  {
    id: 6,
    title: "Space Exploration",
    author: "Neil Johnson",
  },
  {
    id: 7,
    title: "New Arrivals: Hidden Truth",
    author: "Michael Brown",
  },
  {
    id: 8,
    title: "JavaScript Deep Dive",
    author: "Chris Evans",
  },
  {
    id: 9,
    title: "Human Anatomy Basics",
    author: "Dr. Lisa Ray",
  },
  {
    id: 10,
    title: "New Arrivals: Dream Catcher",
    author: "Sophia Green",
  },
  {
    id: 11,
    title: "Full Stack Guide",
    author: "Alex Turner",
  },
  {
    id: 12,
    title: "New Arrivals: The Science of Mind",
    author: "Dr. Robert King",
  },
];
const MarqueeLayout = () => {
  return (
    <div className="bg-gray-100 backdrop-blur-lg shadow-md py-5 my-10">
      <Marquee pauseOnHover="true">
        {books.map((book) => (
          <span
            key={book.id}
            className="pl-5 flex items-center gap-2 font-medium"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
            </span>{" "}
            {book.title} <FaArrowRightLong />
            {book.author}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLayout;
