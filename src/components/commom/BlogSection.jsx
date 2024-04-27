import React from 'react'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      name: "Post name Lorem Ipsum",
      image: '/public/images/blog/b1.png',
      type: 'Dicas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis varius, convallis justo nec, pharetra felis.',
      link: '/post/dicas-1',
    },
    {
      id: 2,
      name: "Post name Lorem Ipsum",
      image: '/public/images/blog/b2.png',
      type: 'Notícias',
      description: 'Praesent fermentum quam et est fermentum, vitae luctus arcu interdum. Sed ac feugiat justo. Integer sed euismod sapien.',
      link: '/post/noticias-1',
    },
    {
      id: 3,
      name: "Post name Lorem Ipsum",
      image: '/public/images/blog/b3.png',
      type: 'Tutoriais',
      description: 'Vestibulum ac justo et libero sollicitudin lacinia. Aenean in orci in eros commodo tempus. Vestibulum in dolor nec sem iaculis.',
      link: '/post/tutoriais-1',
    },
    {
      id: 4,
      name: "Post name Lorem Ipsum",
      image: '/public/images/blog/b1.png',
      type: 'Tutoriais',
      description: 'Vestibulum ac justo et libero sollicitudin lacinia. Aenean in orci in eros commodo tempus. Vestibulum in dolor nec sem iaculis.',
      link: '/post/tutoriais-1',
    },
  ]

  return (
    <section className="BlogSection">
      <div className="container">
        <div className="BlogSection__content">
          <div className="BlogSection__text">
            <p className="BlogSection__subtitle">Últimas postagens</p>
            <h2 className="BlogSection__title">Blog</h2>
          </div>
          <button className="BlogSection__view-more">Veja mais</button>
        </div>
        <div className="BlogSection__posts">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.link} className="BlogSection__post">
              <img src={post.image} alt={`Post ${post.id}`} className="BlogSection__post-image" />
              <div className="BlogSection__post-info">
                <p className="BlogSection__post-type">{post.type}</p>
                <p className="BlogSection__post-name">{post.name}</p>
                <p className="BlogSection__post-description">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
