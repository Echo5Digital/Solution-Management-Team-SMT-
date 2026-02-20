const COMPANY_NAME = "SMT- Solution Management Team";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>
          {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </div>
    </footer>
  );
}
