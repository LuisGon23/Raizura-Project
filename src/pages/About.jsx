import React, { useState } from 'react';

export const About = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    empresa: '',
    proyecto: '',
    detalles: '',
    acepta: false
  });

  const exitos = [
    { titulo: 'El preso', album: 'Fruko el grande', year: '1975', portada: '/fruko-preso.jpg' },
    { titulo: 'Cachondea', album: 'Exitos', year: '2012', portada: '/cachondea-fruko.jpg' },
    { titulo: 'El ausente', album: 'Fruko el bueno: "ayunando"', year: '1973', portada: '/el-ausente-fruko.jpg' },
    { titulo: 'Los charcos', album: 'Fruko el grande', year: '1975', portada: '/los-charcos-fruko.jpg' },
  ];

  return (
    <main className="bg-black text-white">
      <section className="py-5 px-4" style={{ backgroundColor: '#111' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Éxitos</h2>
          <div className="row g-4 justify-content-center">
            {exitos.map((exito, i) => (
              <div className="col-6 col-md-3 text-center" key={i}>
                <p className="small text-secondary mb-2">Extraído de Spotify</p>
                <div className="bg-dark rounded-3 position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ height: '180px' }}>
                  <img 
                    src={exito.portada} 
                    alt={exito.titulo} 
                    className="w-100 h-100 object-fit-cover shadow" 
                    style={{ opacity: '0.8' }} 
                  />

                  <div 
                    className="rounded-circle bg-danger d-flex align-items-center justify-content-center position-absolute" 
                    style={{ width: '45px', height: '45px', bottom: '10px', right: '10px', cursor: 'pointer', zIndex: 2 }} // <-- zIndex: 2
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="fw-bold mb-0">{exito.titulo}</p>
                  <p className="small text-secondary mb-0">{exito.album}</p>
                  <p className="small text-secondary">{exito.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-2 mt-4">
            <span className="rounded-circle bg-secondary" style={{ width: '10px', height: '10px' }}></span>
            <span className="rounded-circle bg-danger" style={{ width: '10px', height: '10px' }}></span>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-black">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="text-center mb-5 mx-auto text-secondary" style={{ maxWidth: '600px' }}>
            ¿Quieres ser parte de esta historia? Completa el formulario y deja que tu voz, 
            tus recuerdos y tu ritmo se unan al legado de Fruko y sus Tesos.
          </p>

          <h5 className="fw-bold mb-4 text-uppercase italic">Indica</h5>
          <div className="row g-3">
            {[
              { id: 'nombre', placeholder: 'Nombre completo', type: 'text' },
              { id: 'correo', placeholder: 'Correo', type: 'email' },
              { id: 'empresa', placeholder: 'Tu empresa', type: 'text' },
              { id: 'proyecto', placeholder: 'Tu proyecto', type: 'text' }
            ].map((field) => (
              <div className="col-md-6" key={field.id}>
                <input
                  type={field.type}
                  className="form-control bg-transparent text-white border-secondary py-2"
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                />
              </div>
            ))}
            
            <div className="col-12 mt-4">
              <label className="fw-bold mb-3 d-block">Detalles</label>
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkAcepta"
                    checked={formData.acepta}
                    onChange={e => setFormData({ ...formData, acepta: e.target.checked })}
                  />
                  <label className="form-check-label small text-secondary" htmlFor="checkAcepta">
                    Acepto recibir comunicaciones de Raizura
                  </label>
                </div>
                <button className="btn btn-secondary px-5 fw-bold text-white shadow-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-dark py-5 px-4 border-top">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Contactanos</h2>
          
          <div className="row g-4 py-4 border-top border-bottom">
            {[
              { nombre: 'Santiago Rodriguez:', correo: 'santi.rrplay@gmail.com', tel: '320465417' },
              { nombre: 'Luis Gonzalez:', correo: 'gonzalezmluis08@gmail.com', tel: '35248741' },
              { nombre: 'Ingrid Hernandez:', correo: 'ingridjaramillo848@gmail.com', tel: '3124023109' },
            ].map((contacto, i) => (
              <div className="col-12 col-md-4" key={i}>
                <p className="fw-bold mb-1">{contacto.nombre}</p>
                <p className="mb-1">{contacto.correo}</p>
                <p className="mb-0">Telefono: {contacto.tel}</p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="fw-bold mb-0">Calle 44 # 34-50 Inter 289</p>
          </div>
        </div>
      </section>
    </main>
  );
};