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
        <iframe width="560" height="315"
          poster={film.thumbnailUrl}
          src={film.videoUrl}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
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
