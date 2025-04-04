export default function Esquelas() {
    return (
        <>
            <main>
                <div className="ml-10 mt-32">
                    <section className="text-left mb-8">
                        <h2 className="text-sky-950 text-lg font-semibold">HOMENAJES QUE PERDURAN EN EL TIEMPO</h2>
                        <h3 className="text-3xl font-bold text-black">Esquelas</h3>
                        <p className="mt-4 text-black text-justify mr-10">
                            En Sequentia, te ayudamos a mantener vivos los recuerdos de tus seres queridos de una forma sencilla y especial.
                            Un esquela es mucho más que un anuncio. Es una forma de informar, recordar y rendir homenaje a quienes ya no están con nosotros.
                            En Sequentia, llevamos esta tradicón al mundo digital, creando un espacio donde cada recuerdo puede.
                        </p>
                    </section>
                </div>

                <section className="flex justify-start gap-6 min-h-24">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col ml-10 " >
                        <img src="img/pexels-photo-5910801.jpeg" alt="Comunicando" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">Comunicar</h4>
                            <hr />
                            <p className="text-black mt-2 text-left ">Publicar esquelas de forma gratuita para comunicar un fallecimiento,
                                recordar aniversarios o simplemente rendir un homenaje especial.
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>Próximamente...</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col">
                        <img src="img/pexels-mart-production-7329675.jpg" alt="Notificarte" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">Notificarte</h4>
                            <hr />
                            <p className="text-black mt-2 text-left">Consultar esquelas sin necesidad de registrarte,
                                porque creemos que la información y los recuerdos deben ser accesibles para todos.
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>Próximamente...</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col mr-10">
                        <img src="img/pexels-olenka-sergienko-11116435.jpg" alt="Acompañar" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">Acompañar</h4>
                            <hr />
                            <p className="text-black mt-2 text-left">Enviar flores digitales o naturales y otros servicios,
                                para mostrar tu cariño y apoyo de manera especial.
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>Próximamente...</button>
                        </div>
                    </div>
                </section>
                <div className="ml-10 mt-12">
                    <section className="text-left mb-8">
                        <p className="mt-4 text-black text-justify mr-10">
                            Para publicar una esquela, solo necesitas registrarte como usuario. Es un proceso rápido y sencillo que te permitirá compartir
                            de manerta inmediata y efectiva tus mensajes con quienes más importan.
                        </p>

                        <p className="mt-4 text-black text-justify mr-10">
                            <b>Porque cada memoria cuenta</b>, en Sequentia modernizamos la manera de recordar.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
} 