import React from "react";

function Testimonials() {
  return (
    <>
      <div
        width="min-content"
        style={{ backgroundColor: "#495e57", marginTop: 5 + "%" }}
      >
        <h1
          class="d-flex justify-content-center"
          style={{
            color: "#f4ce14",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            fontSize: '4rem',
          }}
        >
          Testimonials
        </h1>
        <div class="container">
          <div class="row g-3">
            <div
              class="col-12 col-md-4 col-lg-3 d-flex justify-content-center "
              style={{ paddingBottom: "100px" }}
            >
              <div
                class="card h-100"
                style={{ background: "white", width: 300 }}
              >
                <div
                  class="d-flex justify-content-center"
                  style={{
                    fontSize: 40 + "px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                <div class="d-flex justify-content-center">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    class="card-img-top img-fluid "
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                    }}
                    alt="..."
                  />
                </div>
                <div class="card-body  ">
                  <h5 class="card-title d-flex justify-content-center">
                    Andriana
                  </h5>
                  <p class="card-text d-flex justify-content-center">
                    <i>"Really Good Food and Ambience"</i>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-3 d-flex justify-content-center "
              style={{ paddingBottom: "100px" }}
            >
              <div
                class="card h-100"
                style={{ background: "white", width: 300 }}
              >
                <div
                  class="d-flex justify-content-center"
                  style={{
                    fontSize: 40 + "px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                <div class="d-flex justify-content-center">
                  <img
                    src="https://i.pravatar.cc/150?img=4"
                    class="card-img-top img-fluid "
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                    }}
                    alt="..."
                  />
                </div>
                <div class="card-body  ">
                  <h5 class="card-title d-flex justify-content-center">John</h5>
                  <p class="card-text d-flex justify-content-center">
                    <i>
                      "The food quality and services are top-class. You should
                      try it once."
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-3 d-flex justify-content-center "
              style={{ paddingBottom: "100px" }}
            >
              <div
                class="card h-100"
                style={{ background: "white", width: 300 }}
              >
                <div
                  class="d-flex justify-content-center"
                  style={{
                    fontSize: 40 + "px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                <div class="d-flex justify-content-center">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    class="card-img-top img-fluid "
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                    }}
                    alt="..."
                  />
                </div>
                <div class="card-body  ">
                  <h5 class="card-title d-flex justify-content-center">
                    Steve
                  </h5>
                  <p class="card-text d-flex justify-content-center">
                    <i>"To me, this is one of the best places to dine out. "</i>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-4 col-lg-3 d-flex justify-content-center "
              style={{ paddingBottom: "100px" }}
            >
              <div
                class="card h-100"
                style={{ background: "white", width: 300 }}
              >
                <div
                  class="d-flex justify-content-center"
                  style={{
                    fontSize: 40 + "px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                <div class="d-flex justify-content-center">
                  <img
                    src="https://i.pravatar.cc/150?img=20"
                    class="card-img-top img-fluid "
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                    }}
                    alt="..."
                  />
                </div>
                <div class="card-body  ">
                  <h5 class="card-title d-flex justify-content-center">Pham</h5>
                  <p class="card-text d-flex justify-content-center">
                    <i>
                      "Excellent services, they maintain cleanliness and take
                      care of your need. "
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
