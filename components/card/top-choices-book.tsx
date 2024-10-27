import Image from "next/image";

const data =
[
  {
    src: "/books/1.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    src: "/books/2.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    src: "/books/3.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    src: "/books/4.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    src: "/books/5.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    src: "/books/6.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  }
]

const TopChoicesBook = () => {
  return (
    <>
      <div className="text-2xl tracking-tight font-medium pb-2">
          Top choices
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {
            data.map((item, index) => (
              <div key={index} className="relative space-y-2">
                <Image
                  src={item.src}
                  alt="book"
                  layout="responsive"
                  width={150}
                  height={200}
                  className="rounded-lg"
                />
                <div className="items-center space-y-1">
                  <div className="text-sm font-medium">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {item.author}
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </>
  )
}

export default TopChoicesBook;
