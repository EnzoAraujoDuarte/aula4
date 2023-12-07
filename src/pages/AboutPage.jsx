import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Sobre nós</h1>
        <hr />
        <p className="lead text-center">
          blblablablablalbal
          
        </p>

        <h2 className="text-center py-4">nossos produtos</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">produto1</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">produto2</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">produto3</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">produto4</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage