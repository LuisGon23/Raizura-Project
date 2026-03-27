import React from 'react'

export const Home = () => {

  const personajes = [
    { nombre: 'Raizura', img: '/raizura.jpg' },
    { nombre: 'La abuela', img: '/abuela.jpg' },
    { nombre: 'Fruko', img: '/fruko.jpg' },
    { nombre: 'Reportera', img: '/reportera.jpg' },
    { nombre: 'Constructores', img: '/constructores.jpg' },
    { nombre: 'Ciudadanos', img: '/ciudadanos.jpg' }
  ];

  return (
    <main>

      {/* HERO */}
      <section
        className="vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/Mesa de trabajo 1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container position-relative text-center" style={{ zIndex: 2, top: '20%' }}>
          <a
            href="#comic"
            className="btn btn-lg border-2 fw-bold px-4 py-2"
            style={{ backgroundColor: '#d1d1d19a', color: 'black' }}
          >
            Entra al cómic
          </a>
        </div>
      </section>

      <section className='text-center py-5'>
        <p style={{ fontSize: '1.25rem', color: '#555', fontWeight: 'bold' }}>¡Baja para descubrir más del proyecto!</p>
        <div style={{ fontSize: '2.2rem' }}>
          <i className="bi bi-arrow-down-circle"></i>
        </div>
      </section>

      {/* PERSONAJES */}
      <section className='py-5 px-4 text-center'>
        <h2 className='fw-bold mb-5 px-3'>¡Conoce a quienes dan vida a esta historia!</h2>
        <p className='text-muted mb-5 mx-auto' style={{ maxWidth: '600px' }}>
Cada personaje guarda un secreto, una motivación y un vínculo con el legado de Fruko y sus Tesos. Haz clic sobre ellos y descubre cómo su voz, sus gestos y sus recuerdos construyen el eco de la música que no muere.        </p>

        <div className='row g-4 justify-content-center'>
          {personajes.map((p, i) => (
            <div className='col-6 col-md-4' key={i}>
              <div
                className='position-relative rounded-3 shadow-sm overflow-hidden'
                style={{ height: '520px', cursor: 'pointer' }}
              >
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100 text-start">
                  <span className='badge bg-dark bg-opacity-75 fw-bold py-2 px-3'>
                    {p.nombre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ESCENARIOS */}
      <section className='py-5 px-4'>
        <div className="container">
          <h2 className='fw-bold text-center mb-5'>
            ¡Atrévete a recorrer los escenarios donde la música revive!
          </h2>
          <p className='text-muted text-center mb-5 mx-auto' style={{ maxWidth: '700px' }}>
Desde la ciudad iluminada por hologramas hasta el museo olvidado de Fruko y sus Tesos, cada lugar esconde un secreto que transforma la historia. Haz clic en los escenarios y descubre cómo los pasillos, los instrumentos y la plaza central cobran vida en esta experiencia transmedia.          </p>

          {/* Casa de Raizura */}
          <div className='row align-items-center mb-5 g-4'>
            <div className='col-md-6'>
              <h4 className='fw-bold'>Casa de Raizura</h4>
              <p className='text-muted'>Un lugar donde comienza el eco de la historia. En la intimidad de su hogar, Raizura escucha de su abuela la frase que despierta toda su aventura: “en nuestra familia corre un ritmo especial, uno que hace mover hasta las piedras”. Desde esta revelación, la casa se convierte en el punto de partida de su búsqueda, el espacio donde lo cotidiano se mezcla con la nostalgia y el misterio.</p>
              <a href='#' className='btn text-white px-4' style={{ backgroundColor: '#c0392b', borderRadius: '20px' }}>
                Ver escenario
              </a>
            </div>
            <div className='col-md-6'>
              <div className="position-relative overflow-hidden rounded-3 shadow" style={{ height: '260px' }}>
                <img src="/Gemini_Generated_Image_983m4i983m4i983m.png" alt="Casa" className="w-100 h-100 object-fit-cover" />
                <small className='position-absolute bottom-0 end-0 p-2 text-white-50 bg-dark bg-opacity-25'>Extraído de gemini</small>
              </div>
            </div>
          </div>

          {/* Ciudad */}
          <div className='row align-items-center mb-5 g-4 flex-md-row-reverse'>
            <div className='col-md-6'>
              <h4 className='fw-bold'>Ciudad</h4>
              <p className='text-muted'>En el año 2185, la Ciudad brilla con hologramas y pantallas flotantes, pero ha olvidado el calor de la música en vivo. Entre su ruido y modernidad, la memoria cultural se desvanece bajo el concreto.
                En la Plaza Central, todo cambia: Raizura toca un viejo piano y su melodía despierta a la comunidad. Lo que empieza como curiosidad se convierte en baile, aplausos y celebración colectiva. La Plaza se transforma en el escenario donde la tradición revive y el legado de la música regresa al pueblo.</p>
              <a href='#' className='btn text-white px-4' style={{ backgroundColor: '#c0392b', borderRadius: '20px' }}>
                Ver escenario
              </a>
            </div>
            <div className='col-md-6'>
              <div className="position-relative overflow-hidden rounded-3 shadow" style={{ height: '260px' }}>
                <img src="/Gemini_Generated_Image_4r82s4r82s4r82s4.png" alt="Ciudad" className="w-100 h-100 object-fit-cover" />
                <small className='position-absolute bottom-0 end-0 p-2 text-white-50 bg-dark bg-opacity-25'>Extraído de gemini</small>
              </div>
            </div>
          </div>

          {/* Museo */}
          <div className='row align-items-center mb-5 g-4'>
            <div className='col-md-6'>
              <h4 className='fw-bold'>Museo</h4>
              <p className='text-muted'>Entre la modernidad de la ciudad sobrevive el antiguo Museo de Fruko y sus Tesos, a punto de ser demolido. Sus vitrinas guardan instrumentos, fotos y trajes que cuentan una época donde la música unía a la gente.
                Allí, Raizura encuentra un piano que despierta al fantasma de Fruko y con él, el eco de un legado destinado a no morir.</p>
              <a href='#' className='btn text-white px-4' style={{ backgroundColor: '#c0392b', borderRadius: '20px' }}>
                Ver escenario
              </a>
            </div>
            <div className='col-md-6'>
              <div className="position-relative overflow-hidden rounded-3 shadow" style={{ height: '260px' }}>
                <img src="/Gemini_Generated_Image_fdfwl5fdfwl5fdfw.png" alt="Museo" className="w-100 h-100 object-fit-cover" />
                <small className='position-absolute bottom-0 end-0 p-2 text-white-50 bg-dark bg-opacity-25'>Extraído de gemini</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-center py-5'>
        <h4 className='fw-bold'>¡Dale play a la historia que también se baila!</h4>
        <p className='text-muted mx-auto' style={{ maxWidth: '650px' }}>
Haz clic en uno de los grandes éxitos de Fruko y sus Tesos y deja que la música te lleve por los caminos de Raizura y su cómic interactivo transmedia. Cada canción abre una puerta distinta a la narrativa… ¡descubre cómo el ritmo también cuenta la historia!        </p>
      </section>

    </main>
  )
}