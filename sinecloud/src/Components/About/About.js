import React, { useEffect } from "react";
import "./About.css";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about_container">
      <h1>Would you like to get to know us?</h1>
      <section className="about-container__content">
        <section className="about-container__content-subsection">
          <h2>Who are we</h2>
          <p className="about-container__content-subsection-p">
            Well, the "we" is a bit misleading... "We" refers to people who are
            not satisfied with the current state of music distribution and the
            music they almost get forced upon them. So if you feel similar,
            welcome to the "we"! But, as you might know, somehow this little
            thing has had to be built — and that was done by an individual who
            once decided to take on the challenges of coding and web
            development. Sinecloud is a practice project, but since the builder,
            let's call this person "Builder" from now on, was kind of proud of
            what was achieved after one year of practicing, the decision was
            made to publish this small project. So, with that being said,
            Builder hopes you'll enjoy what's offered here. I'll try to keep on
            developing and implement some new features, like actually being able
            to create an account, and also optimize existing features. But I
            promise that from time to time, new, exciting radio stations will be
            added to the feed. If you know some, holla at me down below!
          </p>
        </section>
        <section className="about-container__content-subsection">
          <h2>Why are we</h2>
          <p>
            Oh my god that's such a philosophical question! Music's got tons of
            faces, but most of them get buried in the crowd. Thanks to those
            big-shot music platforms with their fancy algorithms that seem to
            cozy up to the big labels, so many rad artists and tunes get drowned
            out. This makes musical diversity sound like some old-school myth
            for most mainstream listeners. Finding a track that truly vibes
            differently? Tough gig. Enter sinecloud. This is our little corner
            of the web for all the sound junkies and synth enthusiasts to geek
            out and share their beats. With this, we can at least try to escape
            the numbness of the cultural industry and make Adorno proud.
          </p>
        </section>
      </section>
    </div>
  );
};
