// File: pages/about.js
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          About Me
        </h1>

        <p className="description">
          Learn more about my background and skills.
        </p>

        <div className="grid">
          <div className="card">
            <h3>My Background</h3>
            <p>I'm a web developer with experience in React, Next.js, and Node.js.</p>
          </div>

          <div className="card">
            <h3>My Skills</h3>
            <p>JavaScript, React, Next.js, Node.js, HTML, CSS</p>
          </div>
        </div>

        <Link href="/">
          <a className="back">
            &larr; Back to home
          </a>
        </Link>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .back {
          margin-top: 3rem;
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}