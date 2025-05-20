import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Flame,
  Building,
  History,
  Award,
  Shield,
  Wrench,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    msge: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.msge,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      alert('¡Mensaje enviado correctamente! 🎉');
      setFormData({
        nombre: "",
        email: "",
        msge: ""
      });
    } catch (err) {
      console.error(err);
      alert('Error al enviar el mensaje. Por favor, inténtelo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.png" alt="PLS" className="h-32 mb-4" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Nosotros
              </a>
              {/* <a
                href="#historia"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Historia
              </a> */}
              <a
                href="#servicios"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#inicio"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a
                  href="#historia"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Historia
                </a>
                <a
                  href="#servicios"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container mx-auto px-4 h-full flex items-start pt-64">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experiencia en Liquidación de Siniestros
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Mas de 50 años de reconocida experiencia en el mercado asegurador
            </p>
            <a
              href="#contacto"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Empresa
            </h2>
            <p className="text-lg text-gray-600 whitespace-pre-line text-left">
              {`Somos una empresa de liquidadores de siniestros, que nace después de la venta del 50% de propiedad de Paredes Liquidadores de Seguros Ltda. (Nuevo Mundo) perteneciente al socio Rogelio Paredes Flores, Liquidador Oficial de Seguros.

Esta nueva empresa, Paredes Liquidadores de Siniestros SPA, está constituida por dos socios: Mauricio Paredes Espinoza, Ingeniero Comercial y Rogelio Paredes Flores, Contador y Liquidador Oficial de Seguros.

Ambos, con una vasta experiencia en el mercado de seguros:

Rogelio, con una trayectoria de más de 50 años en la actividad de los seguros, formando parte de Compañías de Seguros, como Gerente Técnico y a partir de 1987 como Liquidador Oficial de Seguros, trabajando como Liquidador Independiente y posteriormente formando parte del Estudio Faraggi Global Risk S.A. hoy, Charles Taylor, hasta fundar la sociedad precedente a ésta, "Nuevo Mundo", en 2012.

Mauricio, Ingeniero Comercial, con una trayectoria de 30 años integrando las áreas comerciales de Compañías de Seguros hasta el año 2019, oportunidad en que se integra a la empresa "Paredes Liquidadores de Seguros Ltda. (Nuevo Mundo)" haciéndose cargo de la Gerencia de Operaciones de dicha empresa liquidadora.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <History className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-gray-600">
                Más de cuatro décadas de experiencia en el mercado asegurador
                chileno, brindando soluciones efectivas y profesionales.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Profesionalismo</h3>
              <p className="text-gray-600">
                En esta nueva empresa contamos con profesionales altamente
                calificados para otorgar un servicio comprometido con la
                excelencia en cada proceso de liquidación, de acuerdo a las
                necesidades de cada Compañía de Seguros.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Servicio Integral</h3>
              <p className="text-gray-600">
                Entregamos una atención personalizada y seguimiento detallado de
                cada caso, para garantizar la mejor resolución, proveyendo la
                información transparente por medios tecnológicos, a las
                Compañías de Seguros, Corredores y Asegurados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      {/* <section id="historia" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Nuestra Historia
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  Paredes Liquidadores de Seguros (PLS) es una empresa de
                  liquidación de siniestros que nace con el propósito de brindar
                  un servicio altamente especializado en la gestión y resolución
                  de siniestros comerciales e industriales.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  La empresa se constituye bajo la sociedad de Rogelio Paredes
                  Flores, un reconocido Liquidador Oficial de Seguros con una
                  vasta trayectoria en el mercado de liquidaciones de
                  siniestros, consolidada a lo largo de décadas de experiencia
                  en el sector asegurador.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  Además, cuenta con la participación de Mauricio Pardes
                  Espinoza como Gestor Comercial y Operaciones, quien aporta su
                  experiencia en la administración y gestión estratégica de
                  siniestros, fortaleciendo el compromiso de la empresa con la
                  excelencia y la eficiencia en el servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid gap-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Building2 className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Seguros Generales
                </h3>
                <p className="text-gray-600">
                  Liquidación de siniestros en todas las áreas de seguros
                  generales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Building className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Ingeniería y Construcción
                </h3>
                <p className="text-gray-600">
                  Liquidación especializada en proyectos de construcción,
                  maquinaria y equipos industriales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Wrench className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Averías de Maquinaria
                </h3>
                <p className="text-gray-600">
                  Peritajes y evaluación técnica de daños causados a las
                  maquinarias y equipos industriales especializados, aplicando
                  las respectivas técnicas para determinar los valores de
                  reposición a nuevo, valores actuales, depreciaciones técnicas
                  y toda otra gestión inherente a una pronta y justa
                  indemnización.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Flame className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Incendio y Adicionales
                </h3>
                <p className="text-gray-600">
                  Especialistas en siniestros de incendios de establecimientos
                  comerciales, habitacionales, industriales y demás. Experiencia
                  acreditada en siniestros catastróficos, como sismos y riesgos
                  de la naturaleza. Especialistas en liquidaciones de siniestros
                  de perjuicios por paralización de establecimientos
                  comerciales, industriales, empresas frutícolas, etc.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Robos con fuerza y violencia en las personas
                </h3>
                <p className="text-gray-600">
                  Expertís en siniestros de robo con fuerza y violencia en las
                  personas, de casa habitación, establecimientos comerciales,
                  oficinas, edificios en construcción, y otros. Vasta
                  experiencia en liquidaciones de robo con fuerza en
                  establecimientos comerciales y de todo tipo de empresa,
                  abocándonos a una investigación exhaustiva de las causas de
                  los siniestros, como también un análisis contable para
                  determinar cabalmente las pérdidas indemnizables de estos
                  tipos de robos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Contáctanos
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+56 2 2234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contacto@plss.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">
                        Avda. Alonso de Córdoba N° 5870 oficina 1215, piso 12,
                        Las Condes - Santiago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Horario de Atención</p>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounde
d-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    name="msge"
                    value={formData.msge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                >
                  {loading ? "Enviando…" : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="PLS" className="h-12 mb-4" />
              <p className="text-gray-400">
                Mas de 50 años de reconocida experiencia en el mercado
                asegurador.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-400 hover:text-white"
                  >
                    Nosotros
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#historia"
                    className="text-gray-400 hover:text-white"
                  >
                    Historia
                  </a>
                </li> */}
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Horario de Atención
              </h3>
              <p className="text-gray-400">Lunes a Viernes</p>
              <p className="text-gray-400">9:00 - 18:00</p>
              <div className="mt-4">
                <p className="text-gray-400">Emergencias 24/7</p>
                <p className="text-white font-semibold">+56 9 9876 5432</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Paredes Liquidadores de Seguros.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
