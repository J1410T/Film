import React, { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Streaming = () => {
  const { id } = useParams()
  // const filmId = parseInt(id!, 10);
  const [film, setFilm] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch(
          "https://653f44e49e8bd3be29e0237d.mockapi.io/Film"
        )
        const data = await response.json()
        const foundFilm = data.find(obj => obj.id === id)
        setFilm(foundFilm)
      } catch (error) {
        console.error("Error fetching film data:", error)
      }
    }

    fetchFilmData()
    // }, [filmId]);
  }, [id])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error)
      })
    }
  }, [film])

  if (!film) {
    return <div>Film not found</div>
  }

  return (
    <div className="container mx-2 ">
      <h1 className="text-4xl text-white mb-8">
        <i className="text-zinc-300">You are watching:</i> {film.title}
      </h1>
      <div className="relative ">
        <video
          ref={videoRef}
          poster={film.thumbnailUrl}
          className="autoPlay w-full object-cover transition duration-500"
          controls
        >
          <source src={film.videoUrl} type="video/mp4" />
        </video>
      </div>
      <h2 className="text-2xl text-white">
        <i>Genre: </i>
        {film.genre}
      </h2>
      <h3 className="text-xl text-zinc-400">
        <i>Description: </i>
        {film.description}
      </h3>
    </div>
  )
}

export default Streaming