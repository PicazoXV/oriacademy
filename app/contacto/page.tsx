// src/app/contacto/page.tsx

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { input } from "@/components/input";
import { textarea } from "@/components/textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 123 456 789",
    link: "tel:+34123456789",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@oriacademy.com",
    link: "mailto:info@oriacademy.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Calle Innovación 123, Madrid, España",
    link: "https://maps.google.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+34 123 456 789",
    link: "https://wa.me/34123456789",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos aquí para responder todas tus preguntas
            <br />
            y ayudarte a comenzar tu aventura en programación.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cyan-50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5DD4C1] to-[#4AC4B1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </div>
                          <div className="text-gray-600">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-[#5DD4C1] to-[#3AB4A1] text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} />
                  <h4 className="text-xl font-bold">Horario de Atención</h4>
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <p>Lunes a Viernes: 9:00 - 20:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </Card>

              <Card className="p-6 bg-cyan-50 border-2 border-[#5DD4C1]">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Necesitas ayuda inmediata?
                </h4>
                <p className="text-gray-600 mb-4">
                  Nuestro equipo está disponible para resolver tus dudas por
                  teléfono o WhatsApp.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-full">
                  <Phone size={18} className="mr-2" />
                  Llamar Ahora
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border-gray-300 focus:border-[#5DD4C1] focus:ring-[#5DD4C1]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border-gray-300 focus:border-[#5DD4C1] focus:ring-[#5DD4C1]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+34 123 456 789"
                    className="w-full rounded-xl border-gray-300 focus:border-[#5DD4C1] focus:ring-[#5DD4C1]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className="w-full rounded-xl border-gray-300 focus:border-[#5DD4C1] focus:ring-[#5DD4C1]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-[#5DD4C1] to-[#4AC4B1] hover:from-[#4AC4B1] hover:to-[#3AB4A1] text-white rounded-xl py-6 text-lg shadow-lg">
                  <Send size={20} className="mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visítanos
            </h2>
            <p className="text-xl text-gray-600">
              Ven a conocer nuestras instalaciones
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-100 to-teal-100 h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4 text-[#5DD4C1]" />
              <p className="text-lg font-semibold text-gray-900">
                Mapa interactivo
              </p>
              <p className="text-sm">Calle Innovación 123, Madrid, España</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#5DD4C1] to-[#3AB4A1]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Agenda tu clase de prueba gratuita hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white hover:bg-gray-100 text-[#5DD4C1] rounded-full px-10 py-7 text-lg shadow-lg">
              Agendar Clase Gratuita
            </Button>
            <Button className="bg-[#3AB4A1] hover:bg-[#2A9481] text-white border-2 border-white rounded-full px-10 py-7 text-lg shadow-lg">
              Descargar Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}