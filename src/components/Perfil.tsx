// Este Perfil no functiona, usa una hoja de estilos a parte "styles.css" que debereis eliminar y hacer en tailwind
// , aunque podeis guiaros con ella, los ts "script.ts" tampoco funcionan, no estan adaptados a React y algunos están mal echos. 
// Además los contenedores necesarios para importar en ellos la información de la base de datos tampoco están creados
// , ni los scripts para conectar con la base de datos.



// import { useTranslation } from 'react-i18next';
import '../styles.css';
import { useState } from 'react';

import { actualizarPerfilSidebar } from '../script';

export default function Perfil() {
    // const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('info');

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };
    return (
        <>
        <main className="main-content">
            <aside className="sidebar">
                <div className="user-profile">
                    <div className="profile-header">
                        <div className="avatar-large"></div>
                        <div className="user-info">
                            <h2>Andrea Rabassa</h2>
                            <p className="email">andrearabassa@sequentia.app</p>
                        </div>
                    </div>
                </div>

                <nav className="profile-nav">
                    <ul>
                        <li
                            data-section="info"
                            className={activeSection === 'info' ? 'active' : ''}
                            onClick={() => handleSectionChange('info')}
                            >
                            <i className="fas fa-user-circle"></i>
                            <span>Tu información</span>
                        </li>
                        <li
                            data-section="situacion"
                            className={activeSection === 'situacion' ? 'active' : ''}
                            onClick={() => handleSectionChange('situacion')}
                            >
                            <i className="fas fa-sun"></i>
                            <span>Situación actual</span>
                        </li>
                        <li
                            data-section="suscripciones"
                            className={activeSection === 'suscripciones' ? 'active' : ''}
                            onClick={() => handleSectionChange('suscripciones')}
                            >
                            <img
                                src="../img/logo-sequentia copy.png"
                                alt="logo sequentia"
                                className="nav-icon"
                            />
                            <span>Suscripciones</span>
                        </li>
                        <li
                            data-section="pagos"
                            className={activeSection === 'pagos' ? 'active' : ''}
                            onClick={() => handleSectionChange('pagos')}
                            >
                            <i className="fas fa-credit-card"></i>
                            <span>Pagos</span>
                        </li>
                        <li
                            data-section="direcciones"
                            className={activeSection === 'direcciones' ? 'active' : ''}
                            onClick={() => handleSectionChange('direcciones')}
                            >
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Direcciones</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            <section className="content-area">
                <div className={`section-content ${activeSection === 'info' ? 'active' : ''}`} id="info">
                    <div className="profile-edit">
                        <div className="profile-photo-section">
                            <div className="profile-photo"></div>
                            <div className="photo-info">
                                <p>Personaliza tu cuenta con una foto. Tu foto de perfil aparecerá en la web y APP de Sequentia y será visible por otros usuarios.</p>
                                <button className="btn-outline">Cambiar foto</button>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-group">
                                <label>Nombre completo</label>
                                <div className="input-row">
                                    <input type="text" placeholder="Andrea" value="Andrea" className="form-input"/>
                                    <input type="text" placeholder="Rabassa" value="Rabassa" className="form-input"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Usuario</label>
                                <input type="text" placeholder="andrea.rabassa" value="andrea.rabassa" className="form-input medium"/>
                            </div>

                            <button className="btn-primary" onClick={actualizarPerfilSidebar}>Guardar</button>
                        </div>

                        <div className="divider"></div>

                        <div className="testament-section">
                            <h2>Gestión del testamento social</h2>
                            <p>Añade aquí el número de teléfono y la dirección de correo electrónico de tres personas de confianza. Estas podrán gestionar todo respecto al testamento social cuando sea necesario, Sequentia se encargará de todo. Puedes cambiarlas en cualquier momento.</p>

                            <div className="contact-form">
                                <div className="contact-person">
                                    <label>Primero</label>
                                    <div className="input-row">
                                        <input type="email" placeholder="Email" className="form-input"/>
                                        <input type="tel" placeholder="Teléfono" className="form-input"/>
                                    </div>
                                </div>

                                <div className="contact-person">
                                    <label>Segundo</label>
                                    <div className="input-row">
                                        <input type="email" placeholder="Email" className="form-input"/>
                                        <input type="tel" placeholder="Teléfono" className="form-input"/>
                                    </div>
                                </div>

                                <div className="contact-person">
                                    <label>Tercero</label>
                                    <div className="input-row">
                                        <input type="email" placeholder="Email" className="form-input"/>
                                        <input type="tel" placeholder="Teléfono" className="form-input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`section-content ${activeSection === 'situacion' ? 'active' : ''}`} id="situacion">
                    <h1>Tu situación actual</h1>
                    <p>Tu situación personal en la actualidad te ayudará a encontrar a otras personas y a sentirte más acompañado.</p>
                    <p>Esta información será pública en tu perfil y otros usuarios podrán verla.</p>

                    <div className="divider"></div>

                    <div className="form-section">
                        <div className="form-group">
                            <label>Género</label>
                            <div className="select-wrapper">
                                <select className="form-select">
                                    <option selected>Femenino</option>
                                    <option>Masculino</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Otra información</label>
                            <input type="text" placeholder="..." className="form-input"/>
                        </div>

                        <div className="form-group">
                            <label>Situación personal</label>
                            <div className="select-wrapper">
                                <select className="form-select">
                                    <option selected>Pérdida padre/madre</option>
                                    <option>Pérdida cónyuge</option>
                                    <option>Pérdida hijo/a</option>
                                    <option>Otra pérdida</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn-primary">Guardar</button>
                    </div>
                </div>

                <div className={`section-content ${activeSection === 'suscripciones' ? 'active' : ''}`} id="suscripciones">
                    <h1>Tus suscripciones</h1>

                    <div className="subscription-cards">
                        <div className="subscription-card">
                            <h3>Esencial</h3>
                            <div className="price">3,99 €/mes</div>
                            <p>Ten acceso a nuestra comunidad de usuarios. Podrás utilizar los mapas y nuestro chat.</p>
                            <button className="btn-secondary">Obtener Esencial</button>
                        </div>

                        <div className="subscription-card">
                            <h3>Premium</h3>
                            <div className="price premium">12,99 €/mes</div>
                            <p>Todo lo del plan <span className="highlight">Esencial</span>, además de acceso a nuestro Testamento social.</p>
                            <button className="btn-outline-gray">Tu plan actual</button>
                        </div>
                    </div>

                    <p className="contact-info">Si tienes cualquier duda acerca de nuestras suscripciones, podrás contactar con nosotros en <a href="mailto:info@sequentia.app">info@sequentia.app</a></p>
                </div>

                <div className={`section-content ${activeSection === 'pagos' ? 'active' : ''}`} id="pagos">
                    <h1>Administra tu información de pago</h1>

                    <h2>Transacciones <span className="subtitle">- Últimos 3 meses</span></h2>

                    <div className="transactions-table">
                        <div className="transaction">
                            <div className="date">02/02/2025</div>
                            <div className="plan">Plan Premium</div>
                            <div className="card">VISA ** 1234</div>
                            <div className="amount">12,99 €</div>
                        </div>
                        <div className="transaction">
                            <div className="date">03/01/2025</div>
                            <div className="plan">Plan Premium</div>
                            <div className="card">VISA ** 1234</div>
                            <div className="amount">12,99 €</div>
                        </div>
                        <div className="transaction">
                            <div className="date">02/12/2024</div>
                            <div className="plan">Plan Premium</div>
                            <div className="card">VISA ** 1234</div>
                            <div className="amount">12,99 €</div>
                        </div>
                    </div>

                    <h2>Métodos de pago</h2>

                    <div className="payment-methods">
                        <div className="add-payment">
                            <div className="add-icon">+</div>
                            <p>Añadir nuevo método de pago</p>
                        </div>

                        <div className="card-display">
                            <div className="card-content">
                                <div className="card-brand">VISA</div>
                                <div className="card-number">•••• •••• •••• 1234</div>
                                <div className="card-expiry">12/26</div>
                                <div className="card-holder">ANDREA RABASSA</div>
                            </div>
                            <div className="card-actions">
                                <button className="btn-text">Editar tarjeta</button>
                                <button className="btn-text danger">Eliminar tarjeta</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`section-content ${activeSection === 'direcciones' ? 'active' : ''}`} id="direcciones">
                    <h1>Dirección</h1>
                    <p>Tu dirección servirá para encontrar personas en situaciones similares a la tuya en tu zona mediante el mapa.</p>
                    <p>Esta información será pública en tu perfil y otros usuarios podrán verla.</p>

                    <h2>Dirección</h2>
                    <div className="form-section">
                        <div className="form-group">
                            <label>País</label>
                            <div className="select-wrapper">
                                <select className="form-select">
                                    <option selected>España</option>
                                    <option>Francia</option>
                                    <option>Portugal</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Provincia</label>
                            <input type="text" placeholder="Barcelona" value="Barcelona" className="form-input"/>
                        </div>

                        <div className="form-group">
                            <label>Ciudad</label>
                            <input type="text" placeholder="Hospitalet de Llobregat" value="Hospitalet de Llobregat" className="form-input"/>
                        </div>

                        <div className="form-group">
                            <label>Código postal</label>
                            <input type="text" placeholder="08903" value="08903" className="form-input"/>
                        </div>

                        <button className="btn-primary">Guardar</button>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
} 

// import '../styles.css';
// import { useState } from 'react';
// import { actualizarPerfilSidebar } from '../script';

// type Section = 'info' | 'situacion' | 'suscripciones' | 'pagos' | 'direcciones';

// export default function Perfil() {
//   const [activeSection, setActiveSection] = useState<Section>('info');

//   const handleSectionChange = (section: Section) => {
//     setActiveSection(section);
//   };

//   return (
//     <main className="main-content">
//       <aside className="sidebar">
//         <div className="user-profile">
//           <div className="profile-header">
//             <div className="avatar-large"></div>
//             <div className="user-info">
//               <h2>Andrea Rabassa</h2>
//               <p className="email">andrearabassa@sequentia.app</p>
//             </div>
//           </div>
//         </div>

//         <nav className="profile-nav">
//           <ul>
//             <li
//               className={activeSection === 'info' ? 'active' : ''}
//               onClick={() => handleSectionChange('info')}
//             >
//               <i className="fas fa-user-circle"></i>
//               <span>Tu información</span>
//             </li>
//             <li
//               className={activeSection === 'situacion' ? 'active' : ''}
//               onClick={() => handleSectionChange('situacion')}
//             >
//               <i className="fas fa-sun"></i>
//               <span>Situación actual</span>
//             </li>
//             <li
//               className={activeSection === 'suscripciones' ? 'active' : ''}
//               onClick={() => handleSectionChange('suscripciones')}
//             >
//               <img
//                 src="../img/logo-sequentia copy.png"
//                 alt="logo sequentia"
//                 className="nav-icon"
//               />
//               <span>Suscripciones</span>
//             </li>
//             <li
//               className={activeSection === 'pagos' ? 'active' : ''}
//               onClick={() => handleSectionChange('pagos')}
//             >
//               <i className="fas fa-credit-card"></i>
//               <span>Pagos</span>
//             </li>
//             <li
//               className={activeSection === 'direcciones' ? 'active' : ''}
//               onClick={() => handleSectionChange('direcciones')}
//             >
//               <i className="fas fa-map-marker-alt"></i>
//               <span>Direcciones</span>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <section className="content-area">
//         {/* Aquí renderizamos solo la sección activa */}
//         {activeSection === 'info' && (
//           <div className="section-content active" id="info">
//             {/* contenido de "Tu información" */}
//             <h1>Información de perfil</h1>
//             <button className="btn-primary" onClick={actualizarPerfilSidebar}>
//               Guardar
//             </button>
//           </div>
//         )}

//         {activeSection === 'situacion' && (
//           <div className="section-content active" id="situacion">
//             {/* contenido de situación */}
//             <h1>Tu situación actual</h1>
//           </div>
//         )}

//         {activeSection === 'suscripciones' && (
//           <div className="section-content active" id="suscripciones">
//             {/* contenido de suscripciones */}
//             <h1>Tus suscripciones</h1>
//           </div>
//         )}

//         {activeSection === 'pagos' && (
//           <div className="section-content active" id="pagos">
//             {/* contenido de pagos */}
//             <h1>Información de pago</h1>
//           </div>
//         )}

//         {activeSection === 'direcciones' && (
//           <div className="section-content active" id="direcciones">
//             {/* contenido de direcciones */}
//             <h1>Dirección</h1>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

