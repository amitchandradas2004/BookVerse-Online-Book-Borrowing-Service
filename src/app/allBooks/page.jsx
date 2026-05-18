"use client";
import Book from "@/components/HomePage/Book";
import { useState } from "react";
const AllBooksPage = () => {
  const [searchInput, setSearchInput] = useState("");
  // const res = await fetch(
  //   `https://online-book-borrowing-platform.vercel.app/Books.json`,
  // );
  // const data = await res.json();
  // const allBooks = data.books;

  const Books = {
    books: [
      {
        id: 1,
        title: "The Silent Forest",
        author: "John Carter",
        description:
          "Deep within an isolated region lies a forest shrouded in mystery and silence. Locals believe the forest holds ancient secrets, where strange whispers echo and time seems to stand still. When a young journalist ventures inside to uncover the truth, he begins to experience unexplainable events that blur the line between reality and illusion. This gripping story explores fear, curiosity, and the unknown forces that dwell in the darkest corners of nature.",
        category: "Story",
        available_quantity: 5,
        image_url:
          "https://m.media-amazon.com/images/I/81o8SNPuY7L._UF1000,1000_QL80_.jpg",
        pages: 320,
        language: "English",
        publisher: "GreenLeaf Publications",
        release_date: "2022-05-10",
        rating: 4.5,
        total_reviews: 1240,
        formats: ["PDF", "ePub"],
        featured: true,
      },
      {
        id: 2,
        title: "React Mastery",
        author: "Sarah Lee",
        description:
          "React Mastery is a complete and practical guide designed for developers who want to build modern, scalable web applications. From basic concepts like components and props to advanced topics such as hooks, context API, and performance optimization, this book covers everything in depth. Real-world examples and projects help reinforce learning, making it a must-have resource for anyone aiming to become a professional React developer.",
        category: "Tech",
        available_quantity: 8,
        image_url:
          "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF1000,1000_QL80_.jpg",
        pages: 450,
        language: "English",
        publisher: "TechPress",
        release_date: "2023-01-15",
        rating: 4.8,
        total_reviews: 980,
        formats: ["PDF", "ePub"],
        featured: true,
      },
      {
        id: 3,
        title: "Quantum World",
        author: "Dr. Alan Smith",
        description:
          "Quantum World introduces readers to the fascinating and often mind-bending concepts of quantum physics. The book explains complex theories such as superposition, entanglement, and wave-particle duality in a simple and engaging manner. With real-world applications and thought-provoking examples, it helps readers understand how quantum mechanics is shaping modern technology and our understanding of the universe.",
        category: "Science",
        available_quantity: 6,
        image_url:
          "https://bookscape-s3-bucket.s3.amazonaws.com/product_images/9789380303000b.jpg",
        pages: 380,
        language: "English",
        publisher: "Science Hub",
        release_date: "2021-09-20",
        rating: 4.6,
        total_reviews: 760,
        formats: ["PDF"],
        featured: true,
      },
      {
        id: 4,
        title: "Lost in Time",
        author: "Emily Watson",
        description:
          "Lost in Time is an exciting journey through different eras where past, present, and future collide. The protagonist accidentally discovers a way to travel through time but soon realizes that every action has consequences. As timelines begin to shift and reality becomes unstable, the story unfolds with suspense, emotional depth, and unexpected twists that keep readers hooked until the very end.",
        category: "Story",
        available_quantity: 4,
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651062928l/60522318.jpg",
        pages: 290,
        language: "English",
        publisher: "TimeHouse",
        release_date: "2020-11-12",
        rating: 4.3,
        total_reviews: 540,
        formats: ["PDF", "ePub"],
        featured: false,
      },
      {
        id: 5,
        title: "Next.js Pro",
        author: "David Kim",
        description:
          "Next.js Pro is an advanced guide for developers looking to build high-performance web applications using Next.js. It dives deep into server-side rendering, static site generation, API routes, and deployment strategies. With hands-on projects and best practices, this book helps developers optimize their applications for speed, SEO, and scalability in real-world environments.",
        category: "Tech",
        available_quantity: 7,
        image_url:
          "https://d2sofvawe08yqg.cloudfront.net/book-next-react/s_hero2x?1713792430&1713792430",
        pages: 410,
        language: "English",
        publisher: "DevWorld",
        release_date: "2023-06-18",
        rating: 4.7,
        total_reviews: 890,
        formats: ["PDF"],
        featured: true,
      },
      {
        id: 6,
        title: "Space Exploration",
        author: "Neil Johnson",
        description:
          "This book takes readers on an incredible journey through space, from early space missions to modern interplanetary exploration. It covers the history of space travel, major discoveries, and future possibilities such as colonizing other planets. With stunning insights and scientific explanations, it inspires curiosity about the vast universe beyond Earth.",
        category: "Science",
        available_quantity: 3,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mXoVdW4KlSpRmjTHK1-iVl2arww_327uMg&s",
        pages: 360,
        language: "English",
        publisher: "Galaxy Press",
        release_date: "2019-03-05",
        rating: 4.4,
        total_reviews: 670,
        formats: ["PDF", "ePub"],
        featured: false,
      },
      {
        id: 7,
        title: "Hidden Truth",
        author: "Michael Brown",
        description:
          "Hidden Truth is a thrilling detective story that dives deep into secrets, lies, and conspiracies. A seasoned detective is assigned a seemingly simple case that quickly spirals into a complex web of deception. As he uncovers shocking truths, he must confront his own past while solving a mystery that could change everything.",
        category: "Story",
        available_quantity: 9,
        image_url:
          "https://cdn2.penguin.com.au/covers/original/9780593483695.jpg",
        pages: 300,
        language: "English",
        publisher: "Mystery Ink",
        release_date: "2021-07-21",
        rating: 4.2,
        total_reviews: 450,
        formats: ["PDF"],
        featured: false,
      },
      {
        id: 8,
        title: "JavaScript Deep Dive",
        author: "Chris Evans",
        description:
          "JavaScript Deep Dive explores the core concepts and advanced features of JavaScript in a clear and structured way. It covers closures, asynchronous programming, event loops, and modern ES6+ features. With practical examples and real-world scenarios, this book helps developers write efficient and maintainable JavaScript code.",
        category: "Tech",
        available_quantity: 10,
        image_url:
          "https://media.licdn.com/dms/image/v2/D4E22AQFXmGolYkaGhw/feedshare-shrink_800/B4EZU4VPtzGwAg-/0/1740406848792?e=2147483647&v=beta&t=grOMdL-XA6yKUlUBO0y3E-s3L9m_dwJYuAzrLn69F6U",
        pages: 500,
        language: "English",
        publisher: "CodeMaster",
        release_date: "2022-10-10",
        rating: 4.9,
        total_reviews: 1500,
        formats: ["PDF", "ePub"],
        featured: true,
      },
      {
        id: 9,
        title: "Human Anatomy Basics",
        author: "Dr. Lisa Ray",
        description:
          "This beginner-friendly guide introduces the structure and functions of the human body. From the skeletal system to the nervous system, it explains complex biological processes in a simple and engaging way. Ideal for students and curious minds, this book provides a strong foundation in human anatomy.",
        category: "Science",
        available_quantity: 5,
        image_url:
          "https://m.media-amazon.com/images/I/81UDFN0So4L._AC_UF1000,1000_QL80_.jpg",
        pages: 340,
        language: "English",
        publisher: "HealthBooks",
        release_date: "2018-02-14",
        rating: 4.3,
        total_reviews: 620,
        formats: ["PDF"],
        featured: false,
      },
      {
        id: 10,
        title: "Dream Catcher",
        author: "Sophia Green",
        description:
          "Dream Catcher is a magical and emotional story that blends fantasy with reality. It follows a young girl who discovers the ability to enter dreams and influence them. As she navigates through different dream worlds, she learns about hope, fear, and the power of imagination.",
        category: "Story",
        available_quantity: 6,
        image_url:
          "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1611766265i/11570.jpg",
        pages: 310,
        language: "English",
        publisher: "Fantasy House",
        release_date: "2020-08-08",
        rating: 4.5,
        total_reviews: 710,
        formats: ["PDF", "ePub"],
        featured: true,
      },
      {
        id: 11,
        title: "Full Stack Guide",
        author: "Alex Turner",
        description:
          "Full Stack Guide provides a complete roadmap for becoming a full-stack developer. It covers frontend and backend technologies, databases, APIs, and deployment. With step-by-step guidance and real-world projects, this book equips readers with the skills needed to build modern web applications from scratch.",
        category: "Tech",
        available_quantity: 4,
        image_url:
          "https://down-sg.img.susercontent.com/file/my-11134201-7r98v-lxefum0yf3oq86",
        pages: 420,
        language: "English",
        publisher: "DevBooks",
        release_date: "2023-03-01",
        rating: 4.6,
        total_reviews: 880,
        formats: ["PDF"],
        featured: true,
      },
      {
        id: 12,
        title: "The Science of Mind",
        author: "Dr. Robert King",
        description:
          "The Science of Mind explores how the human brain functions, from basic neural processes to advanced cognitive behavior. It delves into topics like memory, consciousness, and decision-making. This book provides valuable insights into how we think, learn, and perceive the world around us.",
        category: "Science",
        available_quantity: 7,
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Science_of_Mind.jpg",
        pages: 390,
        language: "English",
        publisher: "BrainWorks",
        release_date: "2021-12-11",
        rating: 4.7,
        total_reviews: 930,
        formats: ["PDF", "ePub"],
        featured: true,
      },
    ],
  };
  const allBooks = Books.books;

  const filteredBooks = searchInput.trim()
    ? allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : allBooks;

  return (
    <div className="mt-30 container mx-auto px-2 sm:px-0">
      <div className="flex justify-end">
        <form
          method="GET"
          className="flex flex-col md:flex-row items-center gap-2 w-110"
        >
          <p className="font-bold">Get Your Desired Book</p>
          <input
            type="text"
            name="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search books by title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2   focus:ring-blue-700"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500 h-50 items-center flex justify-center flex-col">
            No books found for {searchInput}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBooksPage;
