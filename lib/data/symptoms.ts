export interface Symptom {
  id: string
  name: string
  category: string
  description: string
}

export const symptomCategories = [
  "General",
  "Respiratory",
  "Digestive",
  "Skin",
  "Musculoskeletal",
  "Neurological",
  "Cardiovascular",
  "Urinary",
  "Eye & Ear",
  "Mental Health",
] as const

export type SymptomCategory = (typeof symptomCategories)[number]

export const symptoms: Symptom[] = [
  // General
  { id: "fever", name: "Fever", category: "General", description: "Elevated body temperature above 38C (100.4F)" },
  { id: "fatigue", name: "Fatigue", category: "General", description: "Persistent tiredness and lack of energy" },
  { id: "weight_loss", name: "Weight Loss", category: "General", description: "Unintentional weight reduction" },
  { id: "weight_gain", name: "Weight Gain", category: "General", description: "Unintentional weight increase" },
  { id: "chills", name: "Chills", category: "General", description: "Feeling of coldness with shivering" },
  { id: "night_sweats", name: "Night Sweats", category: "General", description: "Excessive sweating during sleep" },
  { id: "malaise", name: "General Malaise", category: "General", description: "Overall feeling of discomfort or unease" },
  { id: "swollen_lymph", name: "Swollen Lymph Nodes", category: "General", description: "Enlarged lymph glands" },
  { id: "dehydration", name: "Dehydration", category: "General", description: "Insufficient body fluid levels" },
  { id: "loss_of_appetite", name: "Loss of Appetite", category: "General", description: "Reduced desire to eat" },

  // Respiratory
  { id: "cough", name: "Cough", category: "Respiratory", description: "Persistent coughing" },
  { id: "shortness_of_breath", name: "Shortness of Breath", category: "Respiratory", description: "Difficulty breathing or feeling breathless" },
  { id: "sore_throat", name: "Sore Throat", category: "Respiratory", description: "Pain or irritation in the throat" },
  { id: "runny_nose", name: "Runny Nose", category: "Respiratory", description: "Nasal discharge" },
  { id: "nasal_congestion", name: "Nasal Congestion", category: "Respiratory", description: "Blocked or stuffy nose" },
  { id: "sneezing", name: "Sneezing", category: "Respiratory", description: "Frequent involuntary sneezing" },
  { id: "wheezing", name: "Wheezing", category: "Respiratory", description: "Whistling sound when breathing" },
  { id: "chest_tightness", name: "Chest Tightness", category: "Respiratory", description: "Feeling of pressure in the chest" },
  { id: "bloody_sputum", name: "Bloody Sputum", category: "Respiratory", description: "Blood in mucus when coughing" },
  { id: "hoarseness", name: "Hoarseness", category: "Respiratory", description: "Abnormal voice changes" },

  // Digestive
  { id: "nausea", name: "Nausea", category: "Digestive", description: "Feeling of sickness with urge to vomit" },
  { id: "vomiting", name: "Vomiting", category: "Digestive", description: "Forceful expulsion of stomach contents" },
  { id: "diarrhea", name: "Diarrhea", category: "Digestive", description: "Loose or watery stools" },
  { id: "constipation", name: "Constipation", category: "Digestive", description: "Difficulty passing stools" },
  { id: "abdominal_pain", name: "Abdominal Pain", category: "Digestive", description: "Pain in the stomach area" },
  { id: "bloating", name: "Bloating", category: "Digestive", description: "Feeling of fullness or swelling in abdomen" },
  { id: "heartburn", name: "Heartburn", category: "Digestive", description: "Burning sensation in chest after eating" },
  { id: "bloody_stool", name: "Bloody Stool", category: "Digestive", description: "Blood in stool" },
  { id: "jaundice", name: "Jaundice", category: "Digestive", description: "Yellowing of skin and eyes" },
  { id: "excessive_thirst", name: "Excessive Thirst", category: "Digestive", description: "Abnormally increased thirst" },

  // Skin
  { id: "rash", name: "Skin Rash", category: "Skin", description: "Red, irritated, or inflamed skin" },
  { id: "itching", name: "Itching", category: "Skin", description: "Persistent urge to scratch" },
  { id: "skin_lesions", name: "Skin Lesions", category: "Skin", description: "Abnormal areas on the skin" },
  { id: "bruising", name: "Easy Bruising", category: "Skin", description: "Bruises appearing easily" },
  { id: "dry_skin", name: "Dry Skin", category: "Skin", description: "Rough, flaky, or cracked skin" },
  { id: "skin_discoloration", name: "Skin Discoloration", category: "Skin", description: "Changes in skin color" },
  { id: "swelling", name: "Swelling", category: "Skin", description: "Abnormal enlargement of body parts" },
  { id: "hair_loss", name: "Hair Loss", category: "Skin", description: "Thinning or loss of hair" },
  { id: "excessive_sweating", name: "Excessive Sweating", category: "Skin", description: "Abnormally increased perspiration" },
  { id: "wound_slow_healing", name: "Slow Wound Healing", category: "Skin", description: "Wounds take longer than normal to heal" },

  // Musculoskeletal
  { id: "joint_pain", name: "Joint Pain", category: "Musculoskeletal", description: "Pain in one or more joints" },
  { id: "muscle_pain", name: "Muscle Pain", category: "Musculoskeletal", description: "Pain or aches in muscles" },
  { id: "back_pain", name: "Back Pain", category: "Musculoskeletal", description: "Pain in the back region" },
  { id: "stiffness", name: "Stiffness", category: "Musculoskeletal", description: "Difficulty moving joints or muscles" },
  { id: "muscle_weakness", name: "Muscle Weakness", category: "Musculoskeletal", description: "Reduced strength in muscles" },
  { id: "joint_swelling", name: "Joint Swelling", category: "Musculoskeletal", description: "Swollen or inflamed joints" },
  { id: "neck_pain", name: "Neck Pain", category: "Musculoskeletal", description: "Pain in the neck area" },
  { id: "muscle_cramps", name: "Muscle Cramps", category: "Musculoskeletal", description: "Sudden, involuntary muscle contractions" },

  // Neurological
  { id: "headache", name: "Headache", category: "Neurological", description: "Pain in the head or upper neck" },
  { id: "dizziness", name: "Dizziness", category: "Neurological", description: "Feeling lightheaded or unsteady" },
  { id: "numbness", name: "Numbness", category: "Neurological", description: "Loss of sensation in body parts" },
  { id: "tingling", name: "Tingling", category: "Neurological", description: "Pins and needles sensation" },
  { id: "confusion", name: "Confusion", category: "Neurological", description: "Difficulty thinking clearly" },
  { id: "memory_loss", name: "Memory Loss", category: "Neurological", description: "Difficulty remembering things" },
  { id: "tremors", name: "Tremors", category: "Neurological", description: "Involuntary shaking movements" },
  { id: "seizures", name: "Seizures", category: "Neurological", description: "Sudden uncontrolled electrical brain activity" },
  { id: "loss_of_balance", name: "Loss of Balance", category: "Neurological", description: "Difficulty maintaining balance" },
  { id: "blurred_vision", name: "Blurred Vision", category: "Neurological", description: "Unclear or hazy vision" },

  // Cardiovascular
  { id: "chest_pain", name: "Chest Pain", category: "Cardiovascular", description: "Pain or discomfort in the chest" },
  { id: "palpitations", name: "Palpitations", category: "Cardiovascular", description: "Irregular or rapid heartbeat" },
  { id: "high_blood_pressure", name: "High Blood Pressure", category: "Cardiovascular", description: "Elevated blood pressure readings" },
  { id: "leg_swelling", name: "Leg Swelling", category: "Cardiovascular", description: "Swelling in the legs" },
  { id: "cold_extremities", name: "Cold Extremities", category: "Cardiovascular", description: "Unusually cold hands and feet" },

  // Urinary
  { id: "frequent_urination", name: "Frequent Urination", category: "Urinary", description: "Urinating more often than normal" },
  { id: "painful_urination", name: "Painful Urination", category: "Urinary", description: "Pain or burning during urination" },
  { id: "dark_urine", name: "Dark Urine", category: "Urinary", description: "Abnormally dark-colored urine" },
  { id: "blood_in_urine", name: "Blood in Urine", category: "Urinary", description: "Presence of blood in urine" },

  // Eye & Ear
  { id: "eye_redness", name: "Eye Redness", category: "Eye & Ear", description: "Red or bloodshot eyes" },
  { id: "eye_pain", name: "Eye Pain", category: "Eye & Ear", description: "Pain in or around the eyes" },
  { id: "ear_pain", name: "Ear Pain", category: "Eye & Ear", description: "Pain in the ear" },
  { id: "hearing_loss", name: "Hearing Loss", category: "Eye & Ear", description: "Reduced ability to hear" },
  { id: "tinnitus", name: "Tinnitus", category: "Eye & Ear", description: "Ringing or buzzing in the ears" },

  // Mental Health
  { id: "anxiety", name: "Anxiety", category: "Mental Health", description: "Persistent worry or unease" },
  { id: "depression", name: "Depression", category: "Mental Health", description: "Persistent sadness or loss of interest" },
  { id: "insomnia", name: "Insomnia", category: "Mental Health", description: "Difficulty falling or staying asleep" },
  { id: "irritability", name: "Irritability", category: "Mental Health", description: "Easily annoyed or agitated" },
  { id: "mood_swings", name: "Mood Swings", category: "Mental Health", description: "Rapid changes in emotional state" },
]
