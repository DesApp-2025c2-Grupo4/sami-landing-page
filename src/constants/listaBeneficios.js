import afiliados from '../assets/iconos-beneficios/afiliados.png'
import gestionarAgenda from '../assets/iconos-beneficios/gestionarAgenda.png'
import gestionprestadores from '../assets/iconos-beneficios/gestionprestadores.png'
import reportes from '../assets/iconos-beneficios/reportes.png'
import seguridad from '../assets/iconos-beneficios/seguridad.png'
import busqueda from '../assets/iconos-beneficios/busqueda.png'
export const listaBeneficios = [
  {
    titulo: "Gestión completa de afiliados",
    subtitulo: "Administrá grupos familiares sin errores y con total control",
    listaElementos: [
      "Creá grupos familiares.",
      "Modificá información sin errores.",
      "Administrá bajas y vigencias automáticamente."
    ],
    imagen: afiliados
  },
  {
    titulo: "Administración de prestadores",
    subtitulo: "Organización completa de profesionales y centros médicos",
    listaElementos: [
      "Organizá profesionales.",
      "Gestioná centros médicos.",
      "Administrá especialidades.",
      "Controlá lugares de atención.",
      "Configurá horarios de trabajo."
    ],
    imagen:gestionprestadores
  },
  {
    titulo: "Agendas de turnos inteligentes",
    subtitulo: "Turnos coherentes, validados y fáciles de administrar",
    listaElementos: [
      "Definí duración de los turnos.",
      "Asigná especialidades.",
      "Seleccioná lugares de atención.",
      "Todo validado automáticamente."
    ],
    imagen:gestionarAgenda
  },
  {
    titulo: "Buscadores avanzados",
    subtitulo: "Encontrá cualquier dato en segundos",
    listaElementos: [
      "Buscá afiliados por apellido.",
      "Filtrá por fecha.",
      "Encontrá por credencial.",
      "Buscá prestadores por especialidad.",
      "Filtrá por zona."
    ],
    imagen:busqueda
  },
  {
    titulo: "Reportes automáticos",
    subtitulo: "Información clave disponible en un instante",
    listaElementos: [
      "Altas por período.",
      "Listado de prestadores por especialidad.",
      "Situaciones terapéuticas.",
      "Muchos reportes más."
    ],
    imagen:reportes
  },
  {
    titulo: "Seguridad y trazabilidad",
    subtitulo: "Toda la información queda registrada y protegida",
    listaElementos: [
      "Todo queda guardado y ordenado.",
      "Datos validados automáticamente.",
      "Eliminá errores humanos.",
      "Operá sin papeles."
    ],
    imagen:seguridad
  }
];