
import { ReadingData, ReadingType } from '../types';

export const readings: ReadingData[] = [
  {
    id: ReadingType.FUENTEOVEJUNA,
    title: "Fuenteovejuna",
    author: "Lope de Vega",
    imageUrl: "https://picsum.photos/seed/drama/800/400",
    color: "indigo",
    summary: "Fuenteovejuna es una obra teatral barroca que aborda el honor colectivo y la rebelión popular contra la tiranía. Tras el abuso sistemático del Comendador, el pueblo se une como un solo cuerpo moral para impartir justicia, culminando con el perdón de los Reyes Católicos que restablecen el orden social.",
    keyPoints: [
      "Laurencia: Representa la rebelión colectiva y la dignidad femenina.",
      "El Comendador: Símbolo de la tiranía y el mal poder.",
      "Oposición Binaria: Buen poder (Reyes) vs Mal poder (Comendador).",
      "Honor vs Honra: El honor es la virtud interna; la honra es la reputación social.",
      "Pueblo Unido: El verdadero protagonista que actúa como un solo cuerpo."
    ],
    quiz: [
      {
        question: "¿Qué personaje representa la voz de la rebeldía colectiva tras ser agraviada?",
        options: ["Pascuala", "Laurencia", "Jacinta", "Mengo"],
        correctAnswer: "Laurencia"
      },
      {
        question: "¿Cuál es la principal oposición moral en la obra?",
        options: ["Ricos vs Pobres", "Amor vs Odio", "Buen poder vs Mal poder", "Guerra vs Paz"],
        correctAnswer: "Buen poder vs Mal poder"
      },
      {
        question: "¿Quiénes representan la justicia suprema al final de la obra?",
        options: ["El Comendador", "Laurencia y Frondoso", "Los Reyes Católicos", "Mengo y Esteban"],
        correctAnswer: "Los Reyes Católicos"
      }
    ]
  },
  {
    id: ReadingType.LAZARILLO,
    title: "El Lazarillo de Tormes",
    author: "Anónimo",
    imageUrl: "https://picsum.photos/seed/picar/800/400",
    color: "amber",
    summary: "Novela picaresca fundacional escrita de forma epistolar. Narra la evolución de Lázaro, un niño que sirve a diversos amos (ciego, clérigo, escudero...) para sobrevivir en una sociedad estamental marcada por el hambre, la hipocresía y la desigualdad social. Al final, Lázaro sacrifica su honra por estabilidad económica.",
    keyPoints: [
      "Supervivencia: El tema central que obliga a Lázaro a usar su astucia.",
      "Crítica a la Iglesia: Representada por el clérigo avaro y el buldero estafador.",
      "Ser vs Parecer: El escudero simula una riqueza que no posee.",
      "Evolución del Pícaro: De la inocencia inicial a la malicia y resignación final.",
      "Sociedad Estamental: Crítica social a la estructura rígida de la época."
    ],
    quiz: [
      {
        question: "¿Cuál fue el primer amo de Lázaro que le enseñó a ser astuto?",
        options: ["El Clérigo", "El Ciego", "El Escudero", "El Buldero"],
        correctAnswer: "El Ciego"
      },
      {
        question: "¿Qué amo fingía ser noble y rico pero en realidad era pobre?",
        options: ["El Fraile", "El Arcipreste", "El Escudero", "El Capellán"],
        correctAnswer: "El Escudero"
      },
      {
        question: "¿En qué formato literario está escrito el Lazarillo?",
        options: ["Poético", "Teatral", "Epistolar", "Ensayo"],
        correctAnswer: "Epistolar"
      }
    ]
  },
  {
    id: ReadingType.ESPANOL_ESCONDE,
    title: "Lo que el español esconde",
    author: "Ensayo Lingüístico",
    imageUrl: "https://picsum.photos/seed/lang/800/400",
    color: "emerald",
    summary: "Este ensayo explora la unidad y diversidad de la lengua española. Analiza cómo el idioma evoluciona a través del contacto con otras lenguas, la cultura popular (reguetón, series) y las variaciones diatópicas entre España y América, defendiendo que el español es un organismo vivo en constante cambio.",
    keyPoints: [
      "Unidad en la Diversidad: El español es uno pero con múltiples formas válidas.",
      "Lengua Viva: El idioma evoluciona constantemente; los 'vulgarismos' de hoy son normas mañana.",
      "Variación Diatópica: Diferencias léxicas y gramaticales (voseo, loísmo/laísmo).",
      "Influencia de la Cultura Popular: El reguetón y las redes sociales como vehículos de neologismos.",
      "Etimología: El estudio del origen de las palabras revela conceptos abstractos vinculados a lo físico."
    ],
    quiz: [
      {
        question: "¿Cuál es el tema central del ensayo sobre el español?",
        options: ["La pureza del idioma", "La unidad en la diversidad", "La gramática estática", "La historia del latín"],
        correctAnswer: "La unidad en la diversidad"
      },
      {
        question: "¿De dónde proviene etimológicamente la palabra 'escrúpulo'?",
        options: ["De un libro", "De una piedra en el zapato", "De un sentimiento", "De un rito antiguo"],
        correctAnswer: "De una piedra en el zapato"
      },
      {
        question: "¿Qué factor se menciona como difusor de neologismos y 'joyas lingüísticas'?",
        options: ["Los diccionarios", "La RAE", "El reguetón y redes sociales", "La gramática antigua"],
        correctAnswer: "El reguetón y redes sociales"
      }
    ]
  }
];
