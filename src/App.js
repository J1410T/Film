import React, { useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Protected from "./components/Protected"
import Billboard from "./components/Billboard"
import Streaming from "./components/Streaming"
import Footer from "./components/Footer"
import MovieList from "./components/MovieList"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import News from "./components/News"
import FilmsManageMent from "./components/FilmsManagement"
import { AuthContextProvider } from "./context/AuthContext"
import Signin from "./components/Signin"
import About from "./components/About"

const App = () => {
  const [APIdata, setAPIdata] = useState([])
  const [randomFilm, setRandomFilm] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://653f44e49e8bd3be29e0237d.mockapi.io/Film"
        )
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json()
        setAPIdata(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    M.AutoInit()
  }, [])

  useEffect(() => {
    getRandomFilm()
  }, [APIdata])

  useEffect(() => {
    // Initialize Materialize parallax component after rendering the component
    const parallaxElems = document.querySelectorAll(".parallax")
    M.Parallax.init(parallaxElems)
  }, [location])

  const getRandomFilm = () => {
    if (APIdata.length > 0) {
      const randomIndex = Math.floor(Math.random() * APIdata.length)
      const film = APIdata[randomIndex]
      setRandomFilm(film)
    }
  }

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {randomFilm && <Billboard film={randomFilm} />}
                <div className="my-6 lg:my-20 ">
                  <MovieList data={APIdata} title="All films" />
                </div>
                <div className="parallax-container hidden lg:flex ">
                  <div className="parallax">
                    <img src="./images/Girl.jpg" alt="" />
                  </div>
                </div>
                <div className="my-6 lg:my-20">
                  <MovieList data={APIdata} title="New films" />
                </div>
                <div className="parallax-container hidden lg:flex">
                  <div className="parallax">
                    <img src="./images/Gia.jpg" alt="" />
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/streaming/:id"
            element={
              <Protected>
                <div className="py-24 lg:py-24">
                  <Streaming />
                </div>
              </Protected>
            }
          />
          <Route
            path="/news"
            element={
              <div className="pt-28">
                <News />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-28">
                <About />
              </div>
            }
          />
          <Route
            path="/filmsManagement"
            element={
              <Protected>
                <div className="pt-20">
                  <FilmsManageMent />
                </div>
              </Protected>
            }
          />
          <Route
            path="/signin"
            element={
              <div className="pt-20">
                <Signin />
              </div>
            }
          />
        </Routes>
        <div className="lg:pt-18">
          <Footer />
        </div>
      </AuthContextProvider>
    </>
  )
}

export default App
