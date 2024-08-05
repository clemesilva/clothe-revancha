function CategoryItem() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://m.media-amazon.com/images/I/815pg7PlAsL._AC_UY1000_.jpg",
    },
    {
      id: 2,
      title: "Jacket",
      imageUrl:
        "https://www.truerevo.com/cdn/shop/files/1-DSC_9149.jpg?v=1687334143",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://mypelix.com/cdn/shop/products/H8bda14e071094b5b9b9e26adc614d02cK_800x.jpg?v=1682047077",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://media.newyorker.com/photos/5d323dcb58d95300082987d3/master/pass/SundayReading-Primary.jpg",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://i.pinimg.com/550x/77/bc/8c/77bc8cf40854df7ce849dbb41fead843.jpg",
    },
  ];
  let categorie1 = categories.slice(0, 3);
  console.log(categorie1);
  let categorie2 = categories.slice(3, 6);
  console.log(categorie1);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {categorie1.map(({ id, title, imageUrl }) => (
          <div
            className="relative bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden m-4 w-80 h-96 transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg max-w-xs text-center">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p className="text-gray-700">Shop now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {categorie2.map(({ id, title, imageUrl }) => (
          <div
            className="relative bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden m-4 w-96 h-96 transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg max-w-xs text-center">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p className="text-gray-700">Shop now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default CategoryItem;
