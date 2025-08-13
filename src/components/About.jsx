
import React from 'react';
import founderPhoto from '../assets/mani.jpg';
import snehaPhoto from '../assets/sneha.jpg';


const About = () => (
  <div className="about" style={{padding:'2rem',maxWidth:600,margin:'0 auto',textAlign:'center'}}>
    <h2>About Global Express</h2>
  <img src={founderPhoto} alt="Founder Mani" style={{width:220,height:220,borderRadius:'50%',objectFit:'cover',margin:'1.5rem 0',boxShadow:'0 2px 12px rgba(0,0,0,0.12)'}} />
    <h3>Mani Panchadi</h3>
    <p style={{fontStyle:'italic',color:'#555',margin:'0.2rem 0'}}>Founder / Owner</p>
    <p style={{fontStyle:'italic',color:'#555',margin:'0.2rem 0'}}>Java Full Stack Developer</p>
    <p style={{margin:'0.5rem 0',fontWeight:'bold',color:'#1976d2'}}>Student, GIET University</p>
    <p style={{margin:'0.2rem 0'}}>3rd Year</p>
    <div style={{margin:'2.5rem 0 1.5rem 0'}}>
      <img src={snehaPhoto} alt="Snehalata Pattnaik" style={{width:120,height:120,borderRadius:'50%',objectFit:'cover',margin:'0 0 0.5rem 0',boxShadow:'0 2px 12px rgba(0,0,0,0.12)'}} />
  <h4 style={{margin:'0.2rem 0'}}>Snehalata Pattnaik</h4>
  <p style={{fontStyle:'italic',color:'#555',margin:'0.2rem 0'}}>UI/UX Designer</p>
  <p style={{fontStyle:'italic',color:'#555',margin:'0.2rem 0'}}>Frontend Developer</p>
  <p style={{margin:'0.2rem 0',fontWeight:'bold',color:'#1976d2'}}>Student, GIET University</p>
  <p style={{margin:'0.2rem 0'}}>3rd Year</p>
    </div>
    <p style={{marginTop:'1.5rem'}}>Global Express is a modern digital banking platform offering fast, secure, and convenient banking services worldwide.</p>
  </div>
);

export default About;
