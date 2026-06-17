import VideoTile from "@/components/VideoTile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-site">
      <div className="hero-wrap">

        {/* NAVIGATION */}
        <nav className="site-nav">
          <Link href="/" className="site-logo">
            Min-jae Han
          </Link>

          <div className="nav-links">
           

            <Link href="/films">
              Films
            </Link>

           
          </div>
        </nav>

        {/* FEATURED PROJECT */}
        <section className="hero-image">
          <VideoTile
            title="Gucci"
            subtitle="Campaign Film"
            image="/images/gucci-16_9-thumb.jpg"
            hoverVideo="/videos/gucci-16_9-preview.mp4"
            filmVideo="/videos/gucci-16_9-video.mp4"
          />
        </section>

        {/* BIO SECTION */}
        <section className="bio-section">
          <div className="bio-colour">
            <h2>Min-jae Han</h2>
            <p>
              Min-jae Han developed his cinematic voice between Seoul’s independent film
              scene and Berlin’s experimental cinema community. After creating a series
              of acclaimed short films recognised at international festivals including
              the Berlinale, he moved into commercial filmmaking with a focus on emotion,
              atmosphere and visual precision. His work blends rich colour, human
              performances and a refined sense of composition, creating films that feel
              cinematic, authentic and deeply connected to the world of each brand.
            </p>
          </div>

          <div className="bio-contact">
            <h3>Contact</h3>

            <div className="contact-group">
              <span>Email</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>

            <div className="contact-group">
              <span>Commercial Agent</span>
              <a href="mailto:commercial@example.com">commercial@example.com</a>
            </div>

            <div className="contact-group">
              <span>Film Agent</span>
              <a href="mailto:film@example.com">film@example.com</a>
            </div>
          </div>

          <div className="bio-image">
            <div className="bio-image-frame">
              <Image
                src="/images/bio-portrait2.jpg"
                alt="Portrait"
                width={1600}
                height={900}
                className="image-fill"
              />
            </div>
          </div>
        </section>

        {/* PROJECT GRID */}
        <section className="media-grid">
          <VideoTile
            title="Adidas"
            subtitle="Campaign Film"
            image="/images/adidas-16_9-thumb-v2.jpg"
            hoverVideo="/videos/adidas-16_9-preview.mp4"
            filmVideo="/videos/adidas-16_9-video.mp4"
          />

          <VideoTile
            title="Nowness"
            subtitle="Campaign Film"
            image="/images/nowness-16_9-thumb.jpg"
            hoverVideo="/videos/nowness-16_9-preview.mp4"
            filmVideo="/videos/nowness-16_9-video.mp4"
          />

          <VideoTile
            title="Nike & Palace"
            subtitle="Campaign Film"
            image="/images/nike-16_9-thumb.jpg"
            hoverVideo="/videos/nike-16_9-preview.mp4"
            filmVideo="/videos/nike-16_9-video.mp4"
          />
        </section>

        {/* SECOND VIDEO GRID */}
        <section className="media-grid-two">
          <VideoTile
            title="Artois"
            subtitle="Campaign Film"
            image="/images/artois-16_9-thumb.jpg"
            hoverVideo="/videos/artois-16_9-preview.mp4"
            filmVideo="/videos/artois-16_9-video.mp4"
          />

          <VideoTile
            title="UGG"
            subtitle="Campaign Film"
            image="/images/ugg-16_9-thumb.jpg"
            hoverVideo="/videos/ugg-16_9-preview.mp4"
            filmVideo="/videos/ugg-16_9-video.mp4"
          />
        </section>

        {/* EVISU FEATURED PROJECT */}
        <section className="hero-image">
          <VideoTile
            title="Evisu"
            subtitle="Campaign Film"
            image="/images/evisu-16_9-thumb.jpg"
            hoverVideo="/videos/evisu-16_9-preview.mp4"
            filmVideo="/videos/evisu-16_9-video.mp4"
          />
        </section>

      </div>
    </main>
  );
}