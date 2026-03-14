"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

import logo from "../../public/LOGO_ESQUINA.png";
import facebook from "../../public/facebook_preto.png";
import insta from "../../public/instagram_preto.png";
import facebookWhite from "../../public/facebook_branco.png";
import instaWhite from "../../public/instagram_branco.png";
import backgroundPaper from "../../public/FOTOS/backgroundPaper.png";
import riscos from "../../public/FOTOS/3riscos.png";
import x_icon from "../../public/FOTOS/x_icon.webp";

import { useLanguage } from "@/context/ContentContext";

export default function Home() {
  const { language, setLanguage, isLoading, content, sliderImages } =
    useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [closeNav, setCloseNav] = useState(false);
  const sobreTitleRef = useRef(null);
  const menuTitleRef = useRef(null);
  const contactosTitleRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages]);

  const handleCloseNav = () => {
    setCloseNav(!closeNav);
  };

  useEffect(() => {
    if (closeNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [closeNav]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          A carregar conteúdos...
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.geral}>
      <nav className={styles.navTlmFixa}>
        <button onClick={handleCloseNav} className={styles.closeBtn}>
          <Image
            src={riscos}
            alt={language === "pt" ? "Abrir menu" : "Open menu"}
            width={35}
            height={35}
            className={styles.iconNavTlm}
          />
        </button>
        <Image
          width={150}
          height={80}
          alt="Cervejaria Esquina Steakhouse - Logo"
          src={logo}
          className={styles.logo}
        />
      </nav>

      {closeNav && (
        <nav className={styles.navTlm}>
          <button onClick={handleCloseNav} className={styles.closeBtn}>
            <Image
              src={x_icon}
              alt={language === "pt" ? "Fechar menu" : "Close menu"}
              width={35}
              height={35}
              className={styles.iconNavTlm}
            />
          </button>
          <Image
            width={150}
            height={80}
            alt="Cervejaria Esquina Steakhouse - Logo"
            src={logo}
            className={styles.logo}
          />
          <ul className={styles.topicosCentrais}>
            <li
              onClick={() => {
                setCloseNav(false); // Close the navigation
                scrollToRef(sobreTitleRef); // Scroll to the 'Sobre' section
              }}
            >
              {content.sobreNosTitle}
            </li>
            <li
              onClick={() => {
                setCloseNav(false);
                scrollToRef(menuTitleRef);
              }}
            >
              {content.menuTitle}
            </li>
            <li
              onClick={() => {
                setCloseNav(false);
                scrollToRef(contactosTitleRef);
              }}
            >
              {content.contactosTitle}
            </li>
          </ul>
          <div className={styles.topicosDireita}>
            <div className={styles.socialsImgs}>
              <a target="_blank" href={content.contacts_facebook}>
                <Image
                  src={facebookWhite}
                  width={35}
                  height={35}
                  alt="Facebook - Cervejaria Esquina Steakhouse"
                  className={styles.socialImg}
                />
              </a>
              <a target="_blank" href={content.contacts_insta}>
                <Image
                  src={instaWhite}
                  width={35}
                  height={35}
                  alt="Instagram - Cervejaria Esquina Steakhouse"
                  className={styles.socialImg}
                />
              </a>
            </div>
            <div className={styles.navBarDireita}>
              <div className={styles.linguas}>
                <Link
                  href="/"
                  className={language === "pt" ? styles.langActive : ""}
                  onClick={() => setCloseNav(false)}
                >
                  PT
                </Link>
                <span className={styles.langDivider}>|</span>
                <Link
                  href="/en"
                  className={language === "en" ? styles.langActive : ""}
                  onClick={() => setCloseNav(false)}
                >
                  EN
                </Link>
              </div>
              <button
                onClick={() => {
                  setCloseNav(false); // Close the navigation
                  scrollToRef(contactosTitleRef); // Scroll to the 'Sobre' section
                }}
                className={styles.reservarBtn}
              >
                {content.bookTitle}
              </button>
            </div>
          </div>
        </nav>
      )}
      <div style={{ height: 105 }}></div>
      <nav className={styles.navBar}>
        <h1 className="visually-hidden">{content.siteTitle}</h1>
        <Image
          width={150}
          height={80}
          alt="Cervejaria Esquina Steakhouse - Logo"
          src={logo}
          className={styles.logo}
        />
        <ul className={styles.topicosCentrais}>
          <li onClick={() => scrollToRef(sobreTitleRef)}>
            {content.sobreNosTitle}
          </li>
          <li onClick={() => scrollToRef(menuTitleRef)}>{content.menuTitle}</li>
          <li onClick={() => scrollToRef(contactosTitleRef)}>
            {content.contactosTitle}
          </li>
        </ul>
        <div className={styles.topicosDireita}>
          <div className={styles.socialsImgs}>
            <a target="_blank" href={content.contacts_facebook}>
              <Image
                src={facebookWhite}
                width={35}
                height={35}
                alt="Facebook - Cervejaria Esquina Steakhouse"
                className={styles.socialImg}
              />
            </a>
            <a target="_blank" href={content.contacts_insta}>
              <Image
                src={instaWhite}
                width={35}
                height={35}
                alt="Instagram - Cervejaria Esquina Steakhouse"
                className={styles.socialImg}
                style={{ marginLeft: -7 }}
              />
            </a>
          </div>
          <div className={styles.navBarDireita}>
            <div className={styles.linguas}>
              <Link
                href="/"
                className={language === "pt" ? styles.langActive : ""}
              >
                PT
              </Link>
              <span className={styles.langDivider}>|</span>
              <Link
                href="/en"
                className={language === "en" ? styles.langActive : ""}
              >
                EN
              </Link>
            </div>
            <button
              onClick={() => scrollToRef(contactosTitleRef)}
              className={styles.reservarBtn}
            >
              {content.bookTitle}
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.geral}>
        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${
                  index === currentSlide ? styles.carouselItemActive : ""
                }`}
              >
                <Image
                  src={img}
                  alt={language === "pt" ? `Carrossel Cervejaria Esquina - Carne maturada Açores, slide ${index + 1}` : `Cervejaria Esquina steakhouse carousel - Matured meat Azores, slide ${index + 1}`}
                  width={2000} // Adjust to fit the container size
                  height={2000} // Adjust to maintain aspect ratio
                  layout="responsive" // This makes the image responsive
                  className={styles.carrouselImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.carouselDots}>
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.dotActive : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <section ref={sobreTitleRef} className={styles.sobreNos}>
        <h2 className="visually-hidden">{content.sobreNosTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.sobreNosTitle} - Cervejaria Esquina Steakhouse`}
            width={140}
            height={70}
            src={content.sobre_titleImage}
            className={styles.title}
          />
        </div>

        <p className={styles.desc}>{content.sobre_description}</p>
        <div className={styles.sobreImgs}>
          <div className={styles.sobreImgContainer}>
            <Image
              src={content.sobre_image1}
              width={300}
              height={300}
              alt={language === "pt" ? "Ambiente Cervejaria Esquina - Ponta Delgada" : "Cervejaria Esquina steakhouse interior - Ponta Delgada"}
              className={styles.sobreImg1}
            />
          </div>
          <div className={styles.sobreImgContainer2}>
            <Image
              src={content.sobre_image2}
              width={600}
              height={300}
              alt={language === "pt" ? "Steakhouse Ponta Delgada - Espaço acolhedor" : "Steakhouse Ponta Delgada - Cozy dining space"}
              className={styles.sobreImg2}
            />
          </div>
        </div>

        <div className={styles.sobreVideo}>
          <iframe
            width="560"
            style={{ width: "100%", height: "100%" }}
            height="315"
            src={content.sobre_video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        className={styles.criacao}
      >
        <h2 className="visually-hidden">{content.criacaoTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.criacaoTitle} - Carne Ramo Grande Açores`}
            width={140}
            height={70}
            src={content.criacao_titleImage}
            className={styles.title}
          />
        </div>

        <div className={styles.criacaoContainer}>
          <div className={styles.esqCriacao}>
            <div className={styles.criacaoImg1Container}>
              <Image
                src={content.criacao_image1}
                width={400}
                height={300}
                alt={language === "pt" ? "Gado Ramo Grande - Pastagens Açores" : "Ramo Grande cattle - Azores pastures"}
                className={styles.criacaoImg1}
              />
            </div>
            <p>{content.criacao_description}</p>
          </div>
          <div className={styles.dirCriacao}>
            <div className={styles.criacaoImg2Container}>
              <Image
                src={content.criacao_selo}
                width={150}
                height={150}
                alt={language === "pt" ? "Selo qualidade Cervejaria Esquina - Carne superior" : "Cervejaria Esquina quality seal - Premium meat"}
                className={styles.maturacaoImg4}
              />
              <Image
                src={content.criacao_image2}
                width={400}
                height={500}
                alt={language === "pt" ? "Carne maturada - Raça Ramo Grande Açores" : "Matured meat - Ramo Grande breed Azores"}
                className={styles.criacaoImg2}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.maturacao}>
        <h2 className="visually-hidden">{content.maturacaoTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.maturacaoTitle} - Carne maturada Cervejaria Esquina`}
            width={140}
            height={70}
            src={content.maturacao_titleImage}
            className={styles.title}
          />
        </div>
        <div className={styles.maturacaoContainer}>
          <div className={styles.maturacaoEsq}>
            <div className={styles.maturacaoImgContainer1}>
              <Image
                src={content.maturacao_image1}
                width={300}
                height={400}
                alt={language === "pt" ? "Processo maturação carne - Cervejaria Esquina" : "Meat maturation process - Cervejaria Esquina"}
                className={styles.maturacaoImg1}
              />
            </div>
          </div>
          <div className={styles.maturacaoDireita}>
            <div className={styles.maturacaoImgs}>
              <div className={styles.maturacaoImgContainer}>
                <Image
                  src={content.maturacao_image2}
                  width={150}
                  height={150}
                  alt={language === "pt" ? "Carne maturada - Textura e sabor" : "Matured meat - Texture and flavor"}
                  className={styles.maturacaoImg2}
                />
              </div>
              <div className={styles.maturacaoImgContainer}>
                <Image
                  src={content.maturacao_image3}
                  width={150}
                  height={150}
                  alt={language === "pt" ? "Qualidade superior - Carne Açores" : "Superior quality - Azores meat"}
                  className={styles.maturacaoImg3}
                />
              </div>
            </div>
            <p className={styles.desc}>{content.maturacao_description}</p>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        className={styles.corte}
      >
        <h2 className="visually-hidden">{content.corteTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.corteTitle} - T-bone, ribeye, picanha Cervejaria Esquina`}
            width={140}
            height={70}
            src={content.corte_titleImage}
            className={styles.title}
          />
        </div>
        <div className={styles.cortesImgs}>
          <div className={styles.cortesImgContainer1}>
            <Image
              src={content.corte_image1}
              width={450}
              height={300}
              alt={language === "pt" ? "Cortes premium - Carne maturada steakhouse" : "Premium cuts - Matured meat steakhouse"}
              className={styles.corteImg1}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={content.corte_image2}
              width={250}
              height={300}
              alt={language === "pt" ? "Bife qualidade superior - Açores" : "Superior quality steak - Azores"}
              className={styles.corteImg2}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={content.corte_image3}
              width={250}
              height={300}
              alt={language === "pt" ? "Cortes especiais - Cervejaria Esquina" : "Special cuts - Cervejaria Esquina"}
              className={styles.corteImg3}
            />
          </div>
        </div>
        <p style={{ color: "#000" }} className={styles.desc}>
          {content.corte_description}
        </p>
      </section>

      <section ref={menuTitleRef} className={styles.menu}>
        <h2 className="visually-hidden">{content.menuTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.menuTitle} - Petiscos e carne maturada Cervejaria Esquina`}
            width={140}
            height={70}
            src={content.menu_titleImage}
            className={styles.title}
          />
        </div>

        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer}>
            <Image
              src={content.menu_image1}
              width={350}
              height={200}
              alt={language === "pt" ? "Petiscos tradicionais - Camarão e pão de alho" : "Traditional snacks - Shrimp and garlic bread"}
              className={styles.menuImg1}
            />
          </div>
          <div className={styles.menuImgContainer}>
            <Image
              src={content.menu_image2}
              width={350}
              height={200}
              alt={language === "pt" ? "Pregos e cerveja açoriana - Cervejaria Esquina" : "Pregos and Azorean beer - Cervejaria Esquina"}
              className={styles.menuImg2}
            />
          </div>
        </div>
        <p className={styles.desc}>{content.menu_description}</p>
        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer4}>
            <Image
              src={content.menu_image3}
              width={350}
              height={200}
              alt={language === "pt" ? "Carne maturada Ramo Grande - Ementa" : "Ramo Grande matured meat - Menu"}
              className={styles.menuImg3}
            />
          </div>
          <div className={styles.menuImgContainer4}>
            <Image
              src={content.menu_image4}
              width={350}
              height={200}
              alt={language === "pt" ? "Pratos steakhouse Ponta Delgada" : "Steakhouse dishes Ponta Delgada"}
              className={styles.menuImg4}
            />
          </div>
        </div>
        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer5}>
            <Image
              src={content.menu_image5}
              width={350}
              height={350}
              alt={language === "pt" ? "Garrafeira vinhos portugueses - Cervejaria Esquina" : "Portuguese wine cellar - Cervejaria Esquina"}
              className={styles.menuImg5}
            />
          </div>
          <p className={styles.desc}>{content.menu_description2}</p>
        </div>
        <div className={styles.menuImg6}>
          <div className={styles.menuImgContainer6}>
            <Image
              src={content.menu_image6}
              width={700}
              height={350}
              alt={language === "pt" ? "Vinhos e boa comida - Cervejaria Esquina Steakhouse" : "Wines and fine dining - Cervejaria Esquina Steakhouse"}
              className={styles.menuImg6}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        ref={contactosTitleRef}
        className={styles.contactos}
      >
        <h2 className="visually-hidden">{content.contactosTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.contactosTitle} - Cervejaria Esquina Ponta Delgada`}
            width={140}
            height={70}
            src={content.contacts_image}
            className={styles.titleContactos}
            style={{ scale: 1 }}
          />
        </div>

        <div className={styles.contactosMain}>
          <div className={styles.contactosContainer}>
            <div className={styles.contactosTexts1}>
              <p className={styles.contactosText}>
                {content.contacts_location_street}
              </p>
              <p className={styles.contactosText}>
                {" "}
                {content.contacts_location_postcode}
              </p>
              <p className={styles.contactosText}>
                {" "}
                {content.contacts_location_region}
              </p>
            </div>
            <div className={styles.contactosTexts2}>
              <p style={{ fontSize: 35 }} className={styles.contactosText}>
                {content.contacts_phone}
              </p>
              <p style={{ fontSize: 18 }} className={styles.contactosText}>
                {content.contactosPhoneDesc}
              </p>
              <p className={styles.contactosText}>{content.contacts_email}</p>
            </div>
            <div className={styles.socialsImgs}>
              <a target="_blank" href={content.contacts_facebook}>
                <Image
                  src={facebook}
                  width={45}
                  height={45}
                  alt="Facebook - Cervejaria Esquina Steakhouse"
                  className={styles.socialImg}
                />
              </a>
              <a target="_blank" href={content.contacts_insta}>
                <Image
                  src={insta}
                  width={45}
                  height={45}
                  alt="Instagram - Cervejaria Esquina Steakhouse"
                  className={styles.socialImg}
                />
              </a>
            </div>
          </div>
          <div className={styles.iframe}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.170436776802!2d-25.67678192349405!3d37.739145571994314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb432ab7e64c5d55%3A0x3fca610e4cf060af!2sCervejaria%20Esquina!5e0!3m2!1spt-PT!2spt!4v1715948936021!5m2!1spt-PT!2spt"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.horario}>
        <h2 className="visually-hidden">{content.hoursTitle}</h2>
        <div className={styles.titleContent}>
          <Image
            alt={`${content.hoursTitle} - Cervejaria Esquina Ponta Delgada`}
            width={200}
            height={70}
            src={content.hours_image}
            className={styles.title}
          />
        </div>
        <br />
        <p className={styles.horarioText}>{content.hours_1}</p>
        <p className={styles.horarioText}>{content.hours_2}</p>
        <p className={styles.horarioText}>{content.hours_3}</p>
      </section>

      <div
        style={{
          paddingBottom: 35,
        }}
        className={styles.politica}
      >
        <p className={styles.politicaText1}>
          <a
            style={{ marginRight: 10 }}
            target="_blank"
            href={
              language == "pt"
                ? "https://firebasestorage.googleapis.com/v0/b/cervejaria-esquina.appspot.com/o/RGPD_ESQUINA_STEAKHOUSE_PT.pdf?alt=media&token=a5679aff-3b37-4f21-9cbc-46ddfc6ae06f"
                : "https://firebasestorage.googleapis.com/v0/b/cervejaria-esquina.appspot.com/o/RGPD_ESQUINA_STEAKHOUSE_EN.pdf?alt=media&token=eab988be-f9a8-42e9-a205-0f328c3304f3"
            }
          >
            {content.politicaPrivacy}
          </a>
          |
          <a
            style={{ marginLeft: 10 }}
            target="_blank"
            href="https://www.livroreclamacoes.pt/Inicio/"
          >
            {content.complaintsBook}
          </a>
        </p>
        <p className={styles.politicaText2}>{content.politicaRights}</p>
      </div>
    </div>
  );
}
