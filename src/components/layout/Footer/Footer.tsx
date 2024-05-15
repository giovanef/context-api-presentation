'use client';

import { useDebug } from "@/contexts/debug";

const Footer = () => {
  const debug = useDebug();

  if (debug) {
    console.log("🚀 ~ Footer renderizou")
  }

  return (
    <footer>
      MadeiraMadeira Comércio Eletrônico S/A
    </footer>
  );
}
 
export default Footer;