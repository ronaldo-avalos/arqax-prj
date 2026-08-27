const base = import.meta.env.BASE_URL;

export type Shot = {
  slug: string;
  caption: string;
  alt: string;
  widths: [number, number];
  size: [number, number];
  /** Ocupa las dos columnas de la retícula */
  full?: boolean;
  /** Normaliza el encuadre (recorte al centro) para que la fila cuadre */
  ratio?: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Tipología corta para tarjetas y fichas (primer valor de meta) */
  type: string;
  copy: string;
  meta: [string, string][];
  hero: Shot;
  gallery: Shot[];
};

// Las galerías se arman por pares del mismo formato para que cada fila
// cuadre sin recortar; los pares dispares se normalizan con `ratio`.
// Confirmar con el cliente: ubicación, superficie, año y alcance real de cada proyecto
export const projects: Project[] = [
  {
    slug: "papi-steak",
    name: "Papi Steak",
    type: "Hospitalidad · Restaurante",
    copy: "Un steakhouse resuelto como un salón nocturno. El terciopelo, el latón y el cortinaje envuelven el comedor mientras los candiles de flecos bajan la escala del techo y concentran la luz sobre cada mesa. El mobiliario a medida ordena banquetas y reservados en un recorrido continuo.",
    meta: [
      ["Tipología", "Hospitalidad · Restaurante"],
      ["Alcance", "Diseño, proyecto ejecutivo, obra y mobiliario"],
      ["Servicios", "Interiorismo, fabricación e instalación"],
    ],
    hero: {
      slug: "salon-principal",
      caption: "Salón principal",
      alt: "Comedor principal de Papi Steak con candiles de flecos y muro floral iluminado",
      widths: [1200, 1800],
      size: [1800, 1200],
    },
    gallery: [
      {
        slug: "banquetas",
        caption: "Banquetas y comedor",
        alt: "Hilera de banquetas de terciopelo rojo con mesas vestidas",
        widths: [1200, 1800],
        size: [1800, 1009],
        full: true,
      },
      {
        slug: "reservado-floral",
        caption: "Reservado con muro floral",
        alt: "Reservado con muro floral y banqueta de terciopelo rojo",
        widths: [700, 1100],
        size: [1100, 1382],
      },
      {
        slug: "candil-espejo",
        caption: "Candil y espejo",
        alt: "Candil de flecos sobre mesas vestidas frente a un muro espejado",
        widths: [700, 1100],
        size: [1100, 1355],
      },
      {
        slug: "servicio-mesa",
        caption: "Servicio de mesa",
        alt: "Detalle del servicio de mesa sobre cubierta laqueada con canto de latón",
        widths: [700, 1100],
        size: [1100, 1375],
        ratio: "4 / 5",
      },
      {
        slug: "cortinaje-espejo",
        caption: "Cortinaje y espejo de latón",
        alt: "Cortinaje de terciopelo con espejo de latón y mesa vestida",
        widths: [700, 1100],
        size: [1100, 1375],
        ratio: "4 / 5",
      },
    ],
  },
  {
    slug: "smart-bamboo",
    name: "Smart Bamboo",
    type: "Retail · Tienda",
    copy: "Una tienda concebida como una experiencia de descanso. Los volúmenes curvos y los nichos iluminados ordenan el recorrido y ponen el producto en el centro, mientras la luz perimetral define cada zona y da continuidad al espacio, de la vitrina a la última área de prueba.",
    meta: [
      ["Tipología", "Retail · Tienda"],
      ["Alcance", "Diseño, proyecto ejecutivo, obra y mobiliario"],
      ["Servicios", "Arquitectura comercial, interiorismo y fabricación"],
    ],
    hero: {
      slug: "fachada-acceso",
      caption: "Fachada y acceso principal",
      alt: "Fachada en esquina de Smart Bamboo con los dos rótulos luminosos y la vitrina iluminada desde el pasillo del centro comercial",
      widths: [1200, 1672],
      size: [1672, 1254],
    },
    gallery: [
      {
        slug: "fachada-frontal",
        caption: "Vitrina principal",
        alt: "Vitrina frontal de Smart Bamboo con nichos iluminados y exhibición de textiles",
        widths: [1200, 1672],
        size: [1672, 941],
        full: true,
      },
      {
        slug: "zona-descanso",
        caption: "Área de exhibición y descanso",
        alt: "Interior de Smart Bamboo con camas de exhibición y luz perimetral",
        widths: [900, 1500],
        size: [1500, 844],
      },
      {
        slug: "muro-marca",
        caption: "Muro de marca y zona de prueba",
        alt: "Muro de marca con iconografía, sillones de masaje y cama de prueba",
        widths: [900, 1500],
        size: [1500, 844],
      },
      {
        slug: "dormitorio-nicho",
        caption: "Nicho de descanso",
        alt: "Cama enmarcada por un nicho curvo con luz perimetral",
        widths: [700, 1100],
        size: [1100, 1956],
      },
      {
        slug: "exhibicion",
        caption: "Mobiliario a medida",
        alt: "Mueble curvo a medida con exhibición de textiles",
        widths: [700, 1100],
        size: [1100, 1956],
      },
      {
        slug: "camas-vitrina",
        caption: "Vitrina interior",
        alt: "Camas de exhibición junto al cristal de la vitrina",
        widths: [900, 1500],
        size: [1500, 844],
      },
      {
        slug: "fachada-esquina",
        caption: "Acceso en esquina",
        alt: "Fachada en esquina de Smart Bamboo iluminada de noche",
        widths: [900, 1500],
        size: [1500, 844],
      },
    ],
  },
];

export const shotSrc = (project: string, shot: Shot, i: number) =>
  `${base}projects/${project}/${shot.slug}-${shot.widths[i]}.webp`;

export const shotSrcset = (project: string, shot: Shot) =>
  shot.widths
    .map((w) => `${base}projects/${project}/${shot.slug}-${w}.webp ${w}w`)
    .join(", ");

export const projectUrl = (project: Project) =>
  `${base}proyectos/${project.slug}/`;
