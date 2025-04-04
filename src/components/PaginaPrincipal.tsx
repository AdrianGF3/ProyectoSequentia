export default function PaginaPrincipal() {
    return (
        <>
            <main className="overflow-x-hidden dark:text-black dark:bg-gray-200">

                <section className="flex justify-end bg-cover bg-center" style={{ backgroundImage: "url('img/FondoMain.png')" }}>
                    <div className="p-10 md:pt-[8rem] sm:pt-[6rem] md:w-[45%] sm:w-[75%]">
                        <div className="bg-gray-300 p-6 bg-opacity-70 rounded-xl">
                            <h1 className="md:text-xl sm:text-base font-bold text-black">Quién somos</h1>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">Sequentia nace en el mundo digital para transformar el modelo tradicional de publicación y comunicación de decesos, convirtiéndola en algo sencillo, intimo, sin horarios ni condiciones. Al alcance de todos. Decide cómo y qué quieres comunicar y, a la vez, estar informado, quién ve tus publicaciones, quién puede comentar, y elige la mejor forma de acompañar. </p>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">En Sequentia encontrarás una comunidad de personas comprometidas, sensibles, generosas y responsables que valoran compartir, estar presentes y acompañar a las personas que han sufrido una pérdida. </p>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">Descárgate gratis nuestra app en Google Play y Apple Store y no te pierdas ningún detalle.</p>
                            <div className="flex items-center gap-12 justify-center mt-10">
                                <img src="img/play store sin bordes.png" alt="" className="" />
                                <img src="img/app store sin bordes.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-cover bg-center bg-gray-200 pb-10">
                    <section className="mt-5 mx-14">
                        <h2 className="text-[30px] font-semibold text-[#002D43] pt-10">¿CÓMO PODEMOS AYUDARTE?</h2>
                        <h1 className="text-xl font-bold mt-8">Comparte y acompaña a tu ritmo</h1>
                        <p className="mt-8 font-semibold text-base">Cada uno de nosotros tenemos nuestra manera de comunicar las cosas y nuestro tiempo para hacerlo. Tanto si necesitas comunicar, como si quieres acompañar, en Sequentia te cedemos un espacio seguro, cercano e íntimo en el que:</p>
                        <section className="pb-20 mt-14 gap-[2%] space-y-6 md:space-y-0 md:flex-row md:space-x-6 flex flex-col">
                            
                            {/* Primer Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/pexels-cottonbro-4936367.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                    <h1 className="text-xl font-bold mb-2">Comunica de forma sencilla</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">Puedes avisar de forma sencilla de las defunciones, dándote la libertad de comunicar el deceso de una persona con solo una publicación, eligiendo quién lee tus publicaciones y qué información compartes. Las normas las pones tú.</p>
                                </div>
                            </div>

                            {/* Segundo Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/3. estaras siempre informado.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                    <h1 className="text-xl font-bold mb-2">Escoge cómo quieres que te acompañen</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">Puedes escoger cómo quieres que te acompañen los demás, ya sea enviando sus condolencias, flores, imprimiendo tus libros de pésame o la combinación que tú decidas.</p>
                                </div>
                            </div>

                            {/* Tercer Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/pexels-andrea-piacquadio-3768131.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                    <h1 className="text-xl font-bold mb-2">Estarás siempre informado</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">Estarás siempre informado, y podrás acompañar a cada persona de la mejor forma y cuándo lo necesite.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="mt-5 bg-cover bg-center" style={{ backgroundImage: "url('img/shutterstock_140196853.jpg')" }}>
                    <section className="px-14">
                        <h1 className="pt-10 text-xl font-bold">Nuestros servicios en un solo clic</h1>
                        <p className="mt-10 font-semibold text-base">Ahora, puedes informar, estar cerca y acompañar a quién tú decidas, de una forma íntima, sencilla y cercana. ¿Cómo?</p>
                        <section className="pb-40 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            {/* Primer Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/envioflores2.jpg" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">Envío de flores</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">Te facilitamos el envío de flores con un solo click, para que esa persona reciba todo tu apoyo.</p>
                                </div>
                            </div>

                            {/* Segundo Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/cempasuchil.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">Flores Digitales</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">Para estar cerca, también cuando estás lejos, te cedemos un espacio desde el que enviar flores digitales.</p>
                                </div>
                            </div>

                            {/* Tercer Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/font.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">Acompañamiento</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">En Sequentia encontrarás un espacio en el que podrás dejar un mensaje para acompañar, sin prisas, ni condiciones, en cualquier momento, y desde cualquier lugar.</p>
                                </div>
                            </div>

                            {/* Cuarto Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/signature.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">Libro de comentarios</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">Ofrecemos la posibilidad de recoger todos los mensajes recibidos en un libro de comentarios que recibirás cómodamente dónde tú nos digas.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="bg-gray-200 mt-10">
                    <section className="p-10 flex justify-end">
                        <div className="w-[50%]">
                            <img src="img/Group 1.png" alt="justify-center items-center" />
                        </div>
                        <div className="w-[50%]">
                            <h1 className="text-xl font-bold text-[#002D43]">Estará ahí cuando la necesites</h1>
                            <p className="mt-10 font-semibold text-base">Únete a Sequentia y transforma la forma de comunicar y acompañar en los momentos más delicados.</p>
                            <p className="mt-10 font-semibold text-base">Descárgala gratis y disfruta de ventajas como:</p>
                            <ul className="list-disc pl-10">
                                <li className="font-semibold text-base">Comunicación de decesos sin horarios ni límites.</li>
                                <li className="font-semibold text-base">Acompañamiento y pésame sin prisas.</li>
                                <li className="font-semibold text-base" >Información relevante siempre actualizada.</li>
                                <li className="font-semibold text-base">Servicios prácticos como el envío de flores con un solo clic.</li>
                            </ul>
                            <p className="mt-10 font-semibold text-base">Forma parte de una comunidad comprometida y generosa. Porque estar presentes en estos momentos también es importante.</p>
                            <p className="mt-10 font-semibold text-base">¡Descarga Sequentia ahora y acompaña cuando más se necesita!</p>
                            <div className="bg-white rounded-[2vw] p-10 m-10 md:h-[300px] md:w-[700px] flex justify-center items-center sm:w-[450px] md:ml-[0px] sm:-ml-[140px]">
                                <img src="img/SEQUENTIA_ICONO_RGB.jpg" alt="" className="md:h-[180px] sm:h-[120px] rounded-[2vw] shadow-lg"/>
                                <div className="flex flex-col items-center justify-center ml-12">
                                    <h1 className="text-xl font-bold text-[#002D43] mb-4">Sequentia app</h1>
                                    <p></p>
                                    <img src="img/app info.png" alt="" className="" />
                                    <div className="md:flex items-center md:gap-12 justify-center mt-6">
                                        <img src="img/play store.png" alt="" className="" />
                                        <img src="img/app store2.png" alt="" className="sm:mt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
} 