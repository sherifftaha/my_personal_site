import { profile } from "../data";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col gap-2 py-8 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        {profile.name} · {profile.role}
      </p>
      <p>Odoo is a trademark of Odoo S.A. This is an independent site.</p>
    </div>
  </footer>
);

export default Footer;
