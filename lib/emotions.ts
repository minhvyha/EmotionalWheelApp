// File: src/lib/emotions.ts

export interface RelatedWord {
  word: string
  definition: string
  example?: string
}

export const emotionsData = {
  joy: {
    name: "Joy",
    description: "A feeling of great pleasure or happiness",
    color: "from-amber-100/70 to-yellow-50/70 border-yellow-200/50 text-amber-700",
    related: [
      {
        word: "Content",
        definition: "Satisfied with what one has; not wanting more",
        example: "She felt content with her life choices.",
      },
      {
        word: "Optimistic",
        definition: "Hopeful and confident about the future",
        example: "He remained optimistic despite setbacks.",
      },
      {
        word: "Admired",
        definition: "Regarded with respect and approval",
        example: "She was admired for her courage.",
      },
      {
        word: "Cheerful",
        definition: "Noticeably happy and optimistic",
        example: "His cheerful attitude lifted everyone's spirits.",
      },
      {
        word: "Elated",
        definition: "Extremely happy and excited, often because something has happened or been achieved",
        example: "He was elated by the news that he had won a full scholarship.",
      },
      { word: "Delighted", definition: "Feeling or showing great pleasure", example: "I'm delighted to meet you." },
      { word: "Loved", definition: "Held dear; cherished", example: "She felt loved and supported by her family." },
      {
        word: "Confident",
        definition: "Feeling or showing confidence in oneself",
        example: "She was confident in her abilities.",
      },
    ],
  },
  sad: {
    name: "Sad",
    description: "A feeling of sorrow or unhappiness",
    color: "from-blue-100/70 to-indigo-50/70 border-blue-200/50 text-blue-600",
    related: [
      {
        word: "Defeated",
        definition: "Having been beaten in a battle or contest",
        example: "She felt defeated after losing the championship.",
      },
      {
        word: "Ashamed",
        definition: "Embarrassed or guilty because of one's actions",
        example: "He was ashamed of his behavior.",
      },
      {
        word: "Dejected",
        definition: "Sad and depressed; dispirited",
        example: "She looked dejected after the rejection.",
      },
      {
        word: "Disappointed",
        definition: "Sad or displeased because expectations were not met",
        example: "I was disappointed by the results.",
      },
      {
        word: "Depressed",
        definition: "In a state of general unhappiness or despondency",
        example: "He felt depressed for weeks.",
      },
      {
        word: "Exhausted",
        definition: "Drained of energy or vitality; extremely tired",
        example: "She was exhausted after the long journey.",
      },
      {
        word: "Lonely",
        definition: "Sad because one lacks friends or company",
        example: "He felt lonely in the new city.",
      },
      {
        word: "Hopeless",
        definition: "Feeling or causing despair about something",
        example: "The situation seemed hopeless.",
      },
    ],
  },
  angry: {
    name: "Angry",
    description: "A feeling of strong annoyance, displeasure, or hostility",
    color: "from-red-100/70 to-orange-50/70 border-red-200/50 text-red-600",
    related: [
      {
        word: "Irritated",
        definition: "Showing or feeling slight anger; annoyed",
        example: "She was irritated by the constant noise.",
      },
      { word: "Mad", definition: "Very angry", example: "He was mad about being lied to." },
      {
        word: "Offended",
        definition: "Resentful or annoyed, typically as a result of a perceived insult",
        example: "She was offended by his rude comment.",
      },
      {
        word: "Frustrated",
        definition: "Feeling or expressing distress and annoyance",
        example: "He felt frustrated with the lack of progress.",
      },
      {
        word: "Outraged",
        definition: "Feeling shocked and angry",
        example: "The community was outraged by the decision.",
      },
      { word: "Annoyed", definition: "Slightly angry; irritated", example: "She was annoyed by the interruption." },
      {
        word: "Defensive",
        definition: "Anxious to protect oneself from criticism or attack",
        example: "He became defensive when questioned.",
      },
      {
        word: "Resentful",
        definition: "Feeling or expressing bitterness at having been treated unfairly",
        example: "She felt resentful about the unequal treatment.",
      },
    ],
  },
  scared: {
    name: "Scared",
    description: "A feeling of fear, fright, or panic",
    color: "from-purple-100/70 to-violet-50/70 border-purple-200/50 text-purple-600",
    related: [
      {
        word: "Alarmed",
        definition: "Feeling sudden fear or concern",
        example: "She was alarmed by the sudden noise.",
      },
      { word: "Afraid", definition: "Feeling fear or anxiety", example: "He was afraid of the dark." },
      {
        word: "Insecure",
        definition: "Not confident or assured; uncertain and anxious",
        example: "She felt insecure about her abilities.",
      },
      {
        word: "Doubtful",
        definition: "Feeling uncertain about something",
        example: "He was doubtful about the plan's success.",
      },
      {
        word: "Intimidated",
        definition: "Frightened or overawed",
        example: "She felt intimidated by the competition.",
      },
      { word: "Startled", definition: "Feeling sudden shock or alarm", example: "He was startled by the loud bang." },
      { word: "Anxious", definition: "Experiencing worry or nervousness", example: "She felt anxious about the exam." },
      { word: "Nervous", definition: "Easily agitated or alarmed", example: "He was nervous before the presentation." },
    ],
  },
  disgusted: {
    name: "Disgusted",
    description: "A feeling of revulsion or strong disapproval",
    color: "from-green-100/70 to-emerald-50/70 border-green-300/50 text-green-700",
    related: [
      { word: "Repulsed", definition: "Filled with disgust or aversion", example: "She was repulsed by the smell." },
      { word: "Appalled", definition: "Greatly dismayed or horrified", example: "He was appalled by the conditions." },
      {
        word: "Uncomfortable",
        definition: "Causing or feeling slight pain or physical discomfort",
        example: "The situation made her uncomfortable.",
      },
      {
        word: "Nauseated",
        definition: "Affected with nausea; feeling inclined to vomit",
        example: "The motion made him feel nauseated.",
      },
      { word: "Grossed out", definition: "Disgusted or repulsed", example: "She was grossed out by the mess." },
      { word: "Sickened", definition: "Affected with nausea or disgust", example: "He was sickened by the violence." },
      {
        word: "Disturbed",
        definition: "Having had the normal pattern disrupted; troubled",
        example: "She was disturbed by the news.",
      },
      {
        word: "Disapproval",
        definition: "Possession or expression of an unfavorable opinion",
        example: "He showed clear disapproval of the decision.",
      },
    ],
  },
  surprised: {
    name: "Surprised",
    description: "A feeling of mild astonishment or shock",
    color: "from-orange-50/70 to-amber-50/70 border-orange-200/50 text-orange-600",
    related: [
      { word: "Shocked", definition: "Surprised and upset", example: "She was shocked by the news." },
      {
        word: "Stunned",
        definition: "So shocked that one is temporarily unable to react",
        example: "He was stunned into silence.",
      },
      { word: "Amazed", definition: "Greatly surprised; astonished", example: "I was amazed by her talent." },
      { word: "Floored", definition: "Shocked or overwhelmed", example: "He was floored by the unexpected gift." },
      {
        word: "Disoriented",
        definition: "Confused and lacking direction",
        example: "She felt disoriented in the unfamiliar place.",
      },
      { word: "Staggered", definition: "Deeply shocked; astonished", example: "He was staggered by the cost." },
      {
        word: "Intrigued",
        definition: "Aroused the curiosity or interest of",
        example: "She was intrigued by the mystery.",
      },
      {
        word: "Astonished",
        definition: "Greatly surprised or impressed",
        example: "They were astonished by the view.",
      },
    ],
  },
  contempt: {
    name: "Contempt",
    description: "A feeling of dislike or disrespect for someone or something",
    color: "from-pink-100/70 to-rose-50/70 border-pink-300/50 text-pink-600",
    related: [
      {
        word: "Disdainful",
        definition: "Showing contempt or lack of respect",
        example: "She gave him a disdainful look.",
      },
      {
        word: "Alienated",
        definition: "Experiencing or inducing feelings of isolation",
        example: "He felt alienated from his peers.",
      },
      {
        word: "Dismissal",
        definition: "The act of treating something as unworthy of consideration",
        example: "His dismissal of her ideas was hurtful.",
      },
      {
        word: "Condescending",
        definition: "Acting superior to others",
        example: "His condescending tone annoyed everyone.",
      },
      {
        word: "Judgemental",
        definition: "Having or displaying an excessively critical point of view",
        example: "She was judgemental about others' choices.",
      },
      {
        word: "Scornful",
        definition: "Feeling or expressing contempt or derision",
        example: "He was scornful of their efforts.",
      },
      {
        word: "Critical",
        definition: "Expressing adverse or disapproving comments",
        example: "She was critical of the plan.",
      },
      {
        word: "Cynical",
        definition: "Distrusting or disparaging the motives of others",
        example: "He had a cynical view of politics.",
      },
    ],
  },
} as const

export type EmotionKey = keyof typeof emotionsData

export const emotions: Array<{ key: EmotionKey; name: string; color: string }> = [
  { key: "joy", name: "Joy", color: "from-amber-100/70 to-yellow-50/70 border-yellow-200/50 text-amber-700" },
  { key: "sad", name: "Sad", color: "from-blue-100/70 to-indigo-50/70 border-blue-200/50 text-blue-600" },
  { key: "angry", name: "Angry", color: "from-red-100/70 to-orange-50/70 border-red-200/50 text-red-600" },
  { key: "scared", name: "Scared", color: "from-purple-100/70 to-violet-50/70 border-purple-200/50 text-purple-600" },
  {
    key: "disgusted",
    name: "Disgusted",
    color: "from-green-100/70 to-emerald-50/70 border-green-300/50 text-green-700",
  },
  {
    key: "surprised",
    name: "Surprised",
    color: "from-orange-50/70 to-amber-50/70 border-orange-200/50 text-orange-600",
  },
  { key: "contempt", name: "Contempt", color: "from-pink-100/70 to-rose-50/70 border-pink-300/50 text-pink-600" },
]


