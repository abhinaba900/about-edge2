import React from "react";
import ReactPlayer from "react-player";
import image from "../Image/Canteen.png";
function AllComponent() {
  return (
    <div>
      <div className="container">
        <div className="top-section">
          <p className="routes">Home | About Us | About Edge</p>
          <div className="heading-section">
            <h3 className="heading-text">
              <span id="about"> About</span> <span id="edge">EDGE</span>
            </h3>
          </div>
        </div>
        <div className="body-container">
          <div className="by-the-experts-section">
            <div className="by-the-experts-first-section">
              <h4>By the experts. </h4>
              <h4>For the professional.</h4>
              <article>
                AtlasEdge offers executive and professional education aimed at
                the industry, by the industry, and for the industry. We aim to
                bridge the gap between traditional education and the
                ever-evolving demands of the professional landscape.
              </article>
              <article>
                We recognise the need for ‘workforce-ready’ education. Our
                vision and pedagogy are geared to address the demands of the
                industry and the needs of professionals at various stages in
                their careers. Our upskilling programs are designed in
                partnership with and mentored by senior corporate executives and
                experienced educators
              </article>
            </div>
            <div className="by-the-experts-second-section">
              <article>
                AtlasEdge offers a unique educational experience that goes
                beyond traditional classrooms. We are located at the heart of
                the central business district in Mumbai. This ensures our
                program participants are not just near the business hub but are
                an integral part of it. The proximity to industry professionals
                is more than a convenience; it's a philosophy ingrained in our
                approach to education.
              </article>
              <article>
                Our programs are tailor-made to promote upgrading, offering a
                well-rounded blend of learning opportunities, networking,
                community engagement, and peer learning. This allows our
                participants to gain additional skills beyond their primary
                degree, creating an ‘edge’ for themselves.
              </article>
              <article>
                At AtlasEdge, we aim to equip participants with practical
                insights, real case studies, and guidance from industry experts,
                enabling them to apply their skills directly in real-world
                scenarios. Additionally, we prioritise comprehensive career
                planning and provide robust support, empowering individuals to
                excel in today's competitive professional landscape through
                upskilling initiatives.
              </article>
            </div>
          </div>
          <div className="video-player">
            <ReactPlayer
              width="auto"
              height="41.25em"
              url="https://youtu.be/3hScMLH7B4o?feature=shared"
              controls={true}
            />
          </div>
          <div className="comment-section">
            <div className="comment">
              <div className="data-text">
                <span id="expert-name">E</span>
                <span id="expert">Expert EDGE</span>
              </div>
              <div className="data-text">
                <span id="expert-name">D</span>
                <span id="expert">Delivery EDGE</span>
              </div>
              <div className="data-text">
                <span id="expert-name">G</span>
                <span id="expert">Geographical EDGE</span>
              </div>
              <div className="data-text">
                <span id="expert-name">E</span>
                <span id="expert">Employability EDGE</span>
              </div>
            </div>
            <div className="image-section">
              <img src={image} alt="image-section" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllComponent;
