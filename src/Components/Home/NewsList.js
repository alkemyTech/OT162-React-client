import Card from '../Cards/Card'

const NewsList = ({ news = [] }) => {
  return (
    <div>
      <h1 style={{ fontFamily: ['Work Sans', 'sans-serif'] }}>Novedades</h1>
      <div className="list-container">
        {news.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.name}
            description={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsList
