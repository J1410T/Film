import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilm } from "../features/Film"
import { v4 as uuidv4 } from "uuid"
import AddMovieForm from "./AddMovieForm"

const FilmsManageMent = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [genre, setGenre] = useState("")
  const [duration, setDuration] = useState("")
  const dispatch = useDispatch()
  const filmList = useSelector(state => state.films.value)
  const [newTitle, setnewTitle] = useState("")
  const [newDescription, setnewDescription] = useState("")

  const handleAddFilm = () => {
    const id = uuidv4()
    const film = {
      id,
      title,
      description,
      videoUrl,
      thumbnailUrl,
      genre,
      duration
    }

    dispatch(addFilm(film))
    console.log("Adding film:", film)
  }

  return (
    <div className="relative h-full w-full">
      <div className="container rounded-md bg-white py-20 px-20 ">
        <h1 className="">Formik CRUD Film</h1>

        <AddMovieForm />
      </div>
    </div>
  )
}

export default FilmsManageMent
