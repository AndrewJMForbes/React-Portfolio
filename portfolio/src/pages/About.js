import family1 from "../images/FamilyNew.jpg";
import family2 from "../images/family.jpg";

function About() {
  return (
    <div>
      <h1 className="page-title">About</h1>

      <div className="aboutContainer">
        <img className="family" src={family1} alt="something" />

        <div className="about">
          <p>
            My name is Andrew Forbes I am a proud Husband and father. I've been
            working on websites for about 5 months up until now I've been
            working a manual labor job for more than half my life but when it
            comes to expressing my creative side I try and open up to new
            experiences. I've dabbled in things from altering Magic the
            Gathering playing cards to drawing anime characters on shoes for my
            wife and I and I DO NOT consider myself a professional in either of
            those areas but I have done it for fun. I've maid vinyl decals, made
            shirts with heat transfer vinyl, and even dabbled in sublimation
            printing. This page is aimed towards what I can do as a Web
            Developer so I thought I would add some of my other creative hobbies
            using HTML and CSS to showcase what I can do on a webpage. I just
            love to express myself creatively regardless of the outlet and I
            love learning new things that's one of the main reasons I'm pursuing
            Web development because it is an ever changing entity.
          </p>
        </div>
        <img className="family2" src={family2} alt="something" />
      </div>
    </div>
  );
}

export default About;
