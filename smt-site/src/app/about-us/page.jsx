

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <p className="about-text">
          SMT - Solution Management Team specializes in computer equipment mounting.
          We sell, install, and provide maintenance for Humanscale, Capsa, Ergotron
          and other articulating wall arm mounts, desk mounts, monitor mounts, flat
          screen mounts, ceiling mounts, TV mounts, CPU holders, CPU lock boxes,
          laptop mounts and many custom mounts.
        
          SMT deployment team will provide free site survey, install demo unit, and
          will complete your need on-time and on budget while meeting all healthcare
          ergonomic and infection control guidelines.
         
          As an authorized reseller and certified installer for many ergonomic
          products, we provide warranties on our installation and maintenance for
          our products.
        </p>

        <img
          src="/about_img.jpg"
          alt="SMT Solution Management Team"
          className="about-image"
        />
      </div>
      <div className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
            Our mission is to provide high-quality, ergonomic solutions for computer<br></br>
            equipment mounting. We are committed to delivering exceptional service<br></br>
            and support to our clients in healthcare, education, and corporate environments.
        </p>
      </div>
    </section>
    
  );
}