"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const biography =
  "Min-jae Han developed his cinematic voice between Seoul’s independent film scene and Berlin’s experimental cinema community. After creating a series of acclaimed short films recognised at international festivals including the Berlinale, he moved into commercial filmmaking with a focus on emotion, atmosphere and visual precision. His work blends rich colour, human performances and a refined sense of composition, creating films that feel cinematic, authentic and deeply connected to the world of each brand.";

const directors = [
  {
    name: "Min-jae Han",
    image: "/images/nowness-16_9-thumb.jpg",
    href: "/",
  },
  {
    name: "Amara Okafor",
    image: "/images/adidas-16_9-thumb-v2.jpg",
  },
  {
    name: "Elena Voss",
    image: "/images/artois-16_9-thumb.jpg",
  },
  {
    name: "Gabriel Stone",
    image: "/images/ugg-16_9-thumb.jpg",
  },
  {
    name: "Hana Mori",
    image: "/images/nike-16_9-thumb.jpg",
  },
  {
    name: "Isaac Vale",
    image: "/images/gucci-16_9-thumb.jpg",
  },
  {
    name: "Leila Rahman",
    image: "/images/evisu-16_9-thumb.jpg",
  },
];

export default function DirectorMenu() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(directors[0].image);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setAtBottom(nearBottom);
    };

    checkPosition();
    window.addEventListener("scroll", checkPosition);

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  const handleScroll = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section")
    );

    const nextSection = sections.find(
      (section) => section.getBoundingClientRect().top > 80
    );

    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bottom-navigation">
        <button
          type="button"
          className="directors-button"
          onClick={() => setOpen(true)}
        >
          Profile
        </button>

        <button
          type="button"
          className="scroll-button"
          aria-label={atBottom ? "Scroll to top" : "Scroll down"}
          onClick={handleScroll}
        >
          {atBottom ? "↑" : "↓"}
        </button>
      </div>

      {open && (
        <div className="directors-panel">
          <button
            type="button"
            className="directors-close"
            aria-label="Close profile"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <div className="directors-heading">
            <p>All In</p>
            <h2>Profile</h2>
          </div>

          <section className="directors-bio">
            <h3>Biography</h3>
            <p>{biography}</p>
          </section>

          <div className="directors-content">
            <div className="directors-list">
              <h3>Directors</h3>

              {directors.map((director) => (
                <div
                  className="director-entry"
                  key={director.name}
                  onMouseEnter={() => setActiveImage(director.image)}
                  onFocus={() => setActiveImage(director.image)}
                >
                  <Image
                    src={director.image}
                    alt=""
                    width={320}
                    height={180}
                    className="director-mobile-image"
                  />

                  {director.href ? (
                    <Link href={director.href} onClick={() => setOpen(false)}>
                      {director.name}
                    </Link>
                  ) : (
                    <span>{director.name}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="director-preview">
              <Image
                src={activeImage}
                alt="Selected director preview"
                width={1200}
                height={675}
                className="director-preview-image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}