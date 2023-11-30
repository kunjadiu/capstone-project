import { useEffect } from "react";
import React  from "react";
import img1 from "../images/Mario and Adrian A.jpg";
import img2 from "../images/Mario and Adrian b.jpg";
function About() {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <div
      class="container  justify-content-center aboutSectionCSS"
      style={{ paddingTop: "1rem", fontFamily: "karla" }}
    >
      <div>
        <span style={{ fontSize: "3.5rem", color: "#f4ce14" }}>
          Little Lemon
        </span>
        <br />
        <span style={{ fontSize: "2.15rem", color: "#495e57" }}>Chicago</span>
        <br />
        <p
          class="span-content"
          style={{
            fontSize: "1.5rem",
            wordWrap: "break-word",
            wordBreak: "break-word",
            overflowWrap: 'break-word'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
          leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
          Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
          blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
          vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
          lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
          consequat. In dictum ligula in elit euismod malesuada. Curabitur
          varius augue id tempus ultricies. Mauris suscipit porta odio, et
          pretium nibh scelerisque ut.
        </p>
      </div>
      <div class="parent container d-flex justify-content-center">
        <img src={img1} alt=" Mario and Adrian"class="image1"/>
        <img src={img2} alt=" Mario and Adrian"class="image2"/>
      </div>
    </div>
  );
}

export default About;
