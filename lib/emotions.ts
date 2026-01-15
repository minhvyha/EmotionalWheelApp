// File: src/lib/emotions.ts

export interface RelatedWord {
  word: string;
  definition: string;
  example?: string;
}

export const emotionsData = {
  joy: {
    name: "Joy",
    description: "A feeling of great pleasure or happiness",
    color: "bg-[#FFCD87]/20 shadow-[0px_4px_4px_0px_#B97C1B]! text-[#B3692C]",
    largeColor:
      "bg-[#FFEF87]/20 text-[#B9A41B]! shadow-[0px_4px_4px_0px_#D6C972]!",
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
        word: "Elated",
        definition:
          "Extremely happy and excited, often because something has happened or been achieved",
        example:
          "He was elated by the news that he had won a full scholarship.",
      },
      {
        word: "Loved",
        definition: "Held dear; cherished",
        example: "She felt loved and supported by her family.",
      },

      {
        word: "Confident",
        definition: "Feeling or showing confidence in oneself",
        example: "She was confident in her abilities.",
      },

      {
        word: "Delighted",
        definition: "Feeling or showing great pleasure",
        example: "I'm delighted to meet you.",
      },
      {
        word: "Cheerful",
        definition: "Noticeably happy and optimistic",
        example: "His cheerful attitude lifted everyone's spirits.",
      },
      {
        word: "Admired",
        definition: "Regarded with respect and approval",
        example: "She was admired for her courage.",
      },
    ],
  },
  sad: {
    name: "Sad",
    description: "A feeling of sorrow or unhappiness",
    color: "bg-[#A0C3FF]/20 shadow-[0px_4px_4px_0px_#809CFF80]! text-[#5479FF]",
    largeColor:
      "bg-[#87BFFF]/20 text-[#1B7AB9]! shadow-[0px_4px_4px_0px_#1B7AB980]!",
    related: [
      {
        word: "Defeated",
        definition: "Having been beaten in a battle or contest",
        example: "She felt defeated after losing the championship.",
      },

      {
        word: "Dejected",
        definition: "Sad and depressed; dispirited",
        example: "She looked dejected after the rejection.",
      },
      {
        word: "Depressed",
        definition: "In a state of general unhappiness or despondency",
        example: "He felt depressed for weeks.",
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

      {
        word: "Exhausted",
        definition: "Drained of energy or vitality; extremely tired",
        example: "She was exhausted after the long journey.",
      },
      {
        word: "Disappointed",
        definition: "Sad or displeased because expectations were not met",
        example: "I was disappointed by the results.",
      },
      {
        word: "Ashamed",
        definition: "Embarrassed or guilty because of one's actions",
        example: "He was ashamed of his behavior.",
      },
    ],
  },
  angry: {
    name: "Angry",
    description: "A feeling of strong annoyance, displeasure, or hostility",
    color: "bg-[#FFD1B3]/20 shadow-[0px_4px_4px_0px_#FF730080]! text-[#DE8347]",
    largeColor:
      "bg-[#FF8787]/20! text-[#FF0000]! shadow-[0px_4px_4px_0px_#FF000080]!",
    related: [
      {
        word: "Irritated",
        definition: "Showing or feeling slight anger; annoyed",
        example: "She was irritated by the constant noise.",
      },

      {
        word: "Offended",
        definition:
          "Resentful or annoyed, typically as a result of a perceived insult",
        example: "She was offended by his rude comment.",
      },

      {
        word: "Outraged",
        definition: "Feeling shocked and angry",
        example: "The community was outraged by the decision.",
      },

      {
        word: "Defensive",
        definition: "Anxious to protect oneself from criticism or attack",
        example: "He became defensive when questioned.",
      },
      {
        word: "Resentful",
        definition:
          "Feeling or expressing bitterness at having been treated unfairly",
        example: "She felt resentful about the unequal treatment.",
      },
      {
        word: "Annoyed",
        definition: "Slightly angry; irritated",
        example: "She was annoyed by the interruption.",
      },
      {
        word: "Frustrated",
        definition: "Feeling or expressing distress and annoyance",
        example: "He felt frustrated with the lack of progress.",
      },
      {
        word: "Mad",
        definition: "Very angry",
        example: "He was mad about being lied to.",
      },
    ],
  },
  scared: {
    name: "Scared",
    description: "A feeling of fear, fright, or panic",
    color: "bg-[#B9B3FF]/20 shadow-[0px_4px_4px_0px_#845FFF80]! text-[#AB47DE]",
    largeColor:
      "bg-[#E587FF]/20! text-[#971BB9]! shadow-[0px_4px_4px_0px_#A84CC180]!",
    related: [
      {
        word: "Alarmed",
        definition: "Feeling sudden fear or concern",
        example: "She was alarmed by the sudden noise.",
      },

      {
        word: "Insecure",
        definition: "Not confident or assured; uncertain and anxious",
        example: "She felt insecure about her abilities.",
      },

      {
        word: "Intimidated",
        definition: "Frightened or overawed",
        example: "She felt intimidated by the competition.",
      },

      {
        word: "Anxious",
        definition: "Experiencing worry or nervousness",
        example: "She felt anxious about the exam.",
      },
      {
        word: "Nervous",
        definition: "Easily agitated or alarmed",
        example: "He was nervous before the presentation.",
      },
      {
        word: "Startled",
        definition: "Feeling sudden shock or alarm",
        example: "He was startled by the loud bang.",
      },
      {
        word: "Doubtful",
        definition: "Feeling uncertain about something",
        example: "He was doubtful about the plan's success.",
      },
      {
        word: "Afraid",
        definition: "Feeling fear or anxiety",
        example: "He was afraid of the dark.",
      },
    ],
  },
  disgusted: {
    name: "Disgusted",
    description: "A feeling of revulsion or strong disapproval",
    color: "bg-[#CAFFB3]/20 shadow-[0px_4px_4px_0px_#6FD83280]! text-[#78B038]",
    largeColor:
      "bg-[#87FF99]/20! text-[#1BB93D]! shadow-[0px_4px_4px_0px_#45D65B80]!",
    related: [
      {
        word: "Repulsed",
        definition: "Filled with disgust or aversion",
        example: "She was repulsed by the smell.",
      },

      {
        word: "Uncomfortable",
        definition: "Causing or feeling slight pain or physical discomfort",
        example: "The situation made her uncomfortable.",
      },

      {
        word: "Grossed out",
        definition: "Disgusted or repulsed",
        example: "She was grossed out by the mess.",
      },

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
      {
        word: "Sickened",
        definition: "Affected with nausea or disgust",
        example: "He was sickened by the violence.",
      },
      {
        word: "Nauseated",
        definition: "Affected with nausea; feeling inclined to vomit",
        example: "The motion made him feel nauseated.",
      },
      {
        word: "Appalled",
        definition: "Greatly dismayed or horrified",
        example: "He was appalled by the conditions.",
      },
    ],
  },
  surprised: {
    name: "Surprised",
    description: "A feeling of mild astonishment or shock",
    color: "bg-[#FFA16B]/20 shadow-[0px_4px_4px_0px_#FFAD6A80]! text-[#B05838]",
    largeColor:
      "bg-[#FFD187]/20! text-[#B97C1B]! shadow-[0px_4px_4px_0px_#B97C1B80]!",
    related: [
      {
        word: "Shocked",
        definition: "Surprised and upset",
        example: "She was shocked by the news.",
      },

      {
        word: "Amazed",
        definition: "Greatly surprised; astonished",
        example: "I was amazed by her talent.",
      },

      {
        word: "Disoriented",
        definition: "Confused and lacking direction",
        example: "She felt disoriented in the unfamiliar place.",
      },

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
      {
        word: "Staggered",
        definition: "Deeply shocked; astonished",
        example: "He was staggered by the cost.",
      },
      {
        word: "Floored",
        definition: "Shocked or overwhelmed",
        example: "He was floored by the unexpected gift.",
      },
      {
        word: "Stunned",
        definition: "So shocked that one is temporarily unable to react",
        example: "He was stunned into silence.",
      },
    ],
  },
  contempt: {
    name: "Contempt",
    description: "A feeling of dislike or disrespect for someone or something",
    color: "bg-[#FF6BA8]/20 shadow-[0px_4px_4px_0px_#FF6AB280]! text-[#B03882]",
    largeColor:
      "bg-[#FF87ED]/20! text-[#B91B8F]! shadow-[0px_4px_4px_0px_#C733B080]!",
    related: [
      {
        word: "Disdainful",
        definition: "Showing contempt or lack of respect",
        example: "She gave him a disdainful look.",
      },

      {
        word: "Dismissal",
        definition:
          "The act of treating something as unworthy of consideration",
        example: "His dismissal of her ideas was hurtful.",
      },

      {
        word: "Judgemental",
        definition:
          "Having or displaying an excessively critical point of view",
        example: "She was judgemental about others' choices.",
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
      {
        word: "Scornful",
        definition: "Feeling or expressing contempt or derision",
        example: "He was scornful of their efforts.",
      },
      {
        word: "Condescending",
        definition: "Acting superior to others",
        example: "His condescending tone annoyed everyone.",
      },
      {
        word: "Alienated",
        definition: "Experiencing or inducing feelings of isolation",
        example: "He felt alienated from his peers.",
      },
    ],
  },
} as const;

export type EmotionKey = keyof typeof emotionsData;

export const emotions: Array<{ key: EmotionKey; name: string; color: string }> =
  [
    {
      key: "joy",
      name: "Joy",
      color:
        "bg-[#FFEF87]/20  text-[#B9A41B] shadow-[0px_4px_4px_0px_#D6C972]!",
    },
    {
      key: "sad",
      name: "Sad",
      color:
        "bg-[#87BFFF]/20  text-[#1B7AB9] shadow-[0px_4px_4px_0px_#1B7AB980]!",
    },
    {
      key: "angry",
      name: "Angry",
      color:
        "bg-[#FF8787]/20  text-[#B91B1B] shadow-[0px_4px_4px_0px_#FF353580]!",
    },
    {
      key: "scared",
      name: "Scared",
      color:
        "bg-[#E587FF]/20  text-[#971BB9] shadow-[0px_4px_4px_0px_#A84CC180]!",
    },
    {
      key: "disgusted",
      name: "Disgusted",
      color:
        "bg-[#87FF99]/20  text-[#1BB93D] shadow-[0px_4px_4px_0px_#45D65B80]!",
    },
    {
      key: "surprised",
      name: "Surprised",
      color:
        "bg-[#FFD187]/20  text-[#B97C1B] shadow-[0px_4px_4px_0px_#B97C1B80]!",
    },
    {
      key: "contempt",
      name: "Contempt",
      color:
        "bg-[#FF87ED]/20  text-[#B91B8F] shadow-[0px_4px_4px_0px_#C733B080]!",
    },
  ];
