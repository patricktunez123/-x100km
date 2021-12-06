import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="top_left">
          <p className="app_whiteColor_text app_700_w text-center text_32">
            QUATTRORUOTE
          </p>
          <span className="app_muted_text text_16">Sitemap | </span>
          <span className="app_muted_text text_16">Contatti | </span>
          <span className="app_muted_text text_16">Redazione</span>
        </div>
        <div className="top_right">
          <AiOutlineYoutube className="icon" />
          <FaFacebookF className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiOutlineInstagram className="icon" />
          <AiOutlineYoutube className="icon" />
        </div>
      </div>
      <div className="footer_bottom">
        <p className="text_14 app_muted_text text-center">
          Editoriale Domus SpA Via G. Mazzocchi, 1/3 20089 Rozzano (Mi) - Codice
          fiscale, partita IVA e iscrizione al Registro delle Imprese di Milano
          n. 07835550158 R.E.A. di Milano n. 1186124 - Capitale sociale versato
          € 5.000.000,00 - Tutti i diritti riservati - All rights reserved -
          Informativa Privacy - Informativa Cookie completa - Lic. SIAE n.
          4653/I/908
        </p>
      </div>
    </div>
  );
};

export default Footer;
