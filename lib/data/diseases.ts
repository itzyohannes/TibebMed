export interface Disease {
  id: string
  name: string
  description: string
  symptoms: string[] // symptom IDs with weights
  symptomWeights: Record<string, number> // symptom ID -> weight (0-1)
  severity: "mild" | "moderate" | "severe"
  commonAge: string
  explanation: string
}

export const diseases: Disease[] = [
  {
    id: "common_cold",
    name: "Common Cold",
    description: "A viral infection of the upper respiratory tract.",
    symptoms: ["cough", "sore_throat", "runny_nose", "nasal_congestion", "sneezing", "headache", "fatigue", "fever", "muscle_pain", "chills"],
    symptomWeights: { cough: 0.9, sore_throat: 0.85, runny_nose: 0.95, nasal_congestion: 0.9, sneezing: 0.85, headache: 0.6, fatigue: 0.5, fever: 0.4, muscle_pain: 0.3, chills: 0.3 },
    severity: "mild",
    commonAge: "All ages",
    explanation: "The common cold is caused by various viruses, most commonly rhinoviruses. It typically resolves within 7-10 days. Rest, hydration, and symptom management are the primary treatments."
  },
  {
    id: "influenza",
    name: "Influenza (Flu)",
    description: "A contagious respiratory illness caused by influenza viruses.",
    symptoms: ["fever", "cough", "muscle_pain", "fatigue", "headache", "chills", "sore_throat", "runny_nose", "nausea", "vomiting", "joint_pain", "night_sweats"],
    symptomWeights: { fever: 0.95, cough: 0.85, muscle_pain: 0.9, fatigue: 0.9, headache: 0.8, chills: 0.85, sore_throat: 0.6, runny_nose: 0.4, nausea: 0.3, vomiting: 0.2, joint_pain: 0.7, night_sweats: 0.5 },
    severity: "moderate",
    commonAge: "All ages",
    explanation: "Influenza is more severe than the common cold, with sudden onset of high fever, body aches, and extreme fatigue. It can lead to serious complications in young children, elderly, and immunocompromised individuals."
  },
  {
    id: "malaria",
    name: "Malaria",
    description: "A mosquito-borne parasitic disease common in tropical regions.",
    symptoms: ["fever", "chills", "headache", "muscle_pain", "fatigue", "nausea", "vomiting", "night_sweats", "joint_pain", "loss_of_appetite", "jaundice", "diarrhea"],
    symptomWeights: { fever: 0.95, chills: 0.95, headache: 0.85, muscle_pain: 0.7, fatigue: 0.8, nausea: 0.6, vomiting: 0.5, night_sweats: 0.75, joint_pain: 0.5, loss_of_appetite: 0.6, jaundice: 0.3, diarrhea: 0.3 },
    severity: "severe",
    commonAge: "All ages, especially children under 5",
    explanation: "Malaria is caused by Plasmodium parasites transmitted through infected Anopheles mosquito bites. It is prevalent in Ethiopia, particularly in lowland areas. Early diagnosis and treatment are critical."
  },
  {
    id: "typhoid",
    name: "Typhoid Fever",
    description: "A bacterial infection caused by Salmonella typhi.",
    symptoms: ["fever", "headache", "abdominal_pain", "fatigue", "loss_of_appetite", "diarrhea", "constipation", "rash", "muscle_pain", "nausea", "bloating", "chills"],
    symptomWeights: { fever: 0.95, headache: 0.8, abdominal_pain: 0.85, fatigue: 0.75, loss_of_appetite: 0.8, diarrhea: 0.6, constipation: 0.5, rash: 0.4, muscle_pain: 0.5, nausea: 0.5, bloating: 0.5, chills: 0.6 },
    severity: "severe",
    commonAge: "All ages",
    explanation: "Typhoid fever spreads through contaminated food and water. It causes sustained high fever that gradually increases over several days. Without treatment, it can lead to serious intestinal complications."
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    description: "An infection that inflames the air sacs in one or both lungs.",
    symptoms: ["cough", "fever", "shortness_of_breath", "chest_pain", "fatigue", "chills", "nausea", "vomiting", "bloody_sputum", "muscle_pain", "wheezing", "chest_tightness"],
    symptomWeights: { cough: 0.95, fever: 0.9, shortness_of_breath: 0.85, chest_pain: 0.8, fatigue: 0.7, chills: 0.75, nausea: 0.3, vomiting: 0.2, bloody_sputum: 0.5, muscle_pain: 0.4, wheezing: 0.5, chest_tightness: 0.7 },
    severity: "severe",
    commonAge: "Children under 5 and adults over 65",
    explanation: "Pneumonia can be caused by bacteria, viruses, or fungi. It fills the lung air sacs with fluid, making breathing difficult. It is a leading cause of death in children under 5 worldwide."
  },
  {
    id: "gastritis",
    name: "Gastritis",
    description: "Inflammation of the stomach lining.",
    symptoms: ["abdominal_pain", "nausea", "vomiting", "bloating", "loss_of_appetite", "heartburn", "fatigue", "bloody_stool", "excessive_thirst"],
    symptomWeights: { abdominal_pain: 0.95, nausea: 0.85, vomiting: 0.7, bloating: 0.8, loss_of_appetite: 0.75, heartburn: 0.9, fatigue: 0.3, bloody_stool: 0.2, excessive_thirst: 0.3 },
    severity: "mild",
    commonAge: "Adults 20-60",
    explanation: "Gastritis occurs when the stomach lining becomes inflamed due to bacterial infection, regular use of pain relievers, or excessive alcohol consumption. It may cause gnawing or burning stomach pain."
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    description: "A bacterial infection that primarily affects the lungs.",
    symptoms: ["cough", "bloody_sputum", "fever", "night_sweats", "weight_loss", "fatigue", "chest_pain", "shortness_of_breath", "loss_of_appetite", "chills", "muscle_weakness"],
    symptomWeights: { cough: 0.95, bloody_sputum: 0.8, fever: 0.7, night_sweats: 0.85, weight_loss: 0.9, fatigue: 0.8, chest_pain: 0.6, shortness_of_breath: 0.5, loss_of_appetite: 0.75, chills: 0.5, muscle_weakness: 0.4 },
    severity: "severe",
    commonAge: "All ages",
    explanation: "TB is caused by Mycobacterium tuberculosis and spreads through airborne droplets. It is a significant health concern in Ethiopia. A persistent cough lasting more than 2 weeks, night sweats, and weight loss are hallmark signs."
  },
  {
    id: "diabetes_type2",
    name: "Type 2 Diabetes",
    description: "A chronic condition affecting how the body processes blood sugar.",
    symptoms: ["excessive_thirst", "frequent_urination", "fatigue", "blurred_vision", "weight_loss", "wound_slow_healing", "numbness", "tingling", "dry_skin", "loss_of_appetite", "irritability"],
    symptomWeights: { excessive_thirst: 0.95, frequent_urination: 0.95, fatigue: 0.8, blurred_vision: 0.7, weight_loss: 0.6, wound_slow_healing: 0.85, numbness: 0.6, tingling: 0.6, dry_skin: 0.4, loss_of_appetite: 0.3, irritability: 0.4 },
    severity: "moderate",
    commonAge: "Adults over 40",
    explanation: "Type 2 diabetes develops when the body becomes resistant to insulin or the pancreas does not produce enough insulin. It leads to high blood sugar levels that can damage organs over time."
  },
  {
    id: "hypertension",
    name: "Hypertension (High Blood Pressure)",
    description: "A condition where blood pressure is consistently too high.",
    symptoms: ["headache", "dizziness", "blurred_vision", "chest_pain", "shortness_of_breath", "palpitations", "fatigue", "nausea", "high_blood_pressure", "anxiety", "nose_bleed"],
    symptomWeights: { headache: 0.8, dizziness: 0.75, blurred_vision: 0.6, chest_pain: 0.5, shortness_of_breath: 0.5, palpitations: 0.7, fatigue: 0.5, nausea: 0.3, high_blood_pressure: 0.99, anxiety: 0.4 },
    severity: "moderate",
    commonAge: "Adults over 35",
    explanation: "Hypertension is often called the 'silent killer' because it frequently has no symptoms. When symptoms do appear, they may include headaches, dizziness, and blurred vision. Long-term uncontrolled hypertension damages the heart, kidneys, and brain."
  },
  {
    id: "urinary_tract_infection",
    name: "Urinary Tract Infection (UTI)",
    description: "An infection in any part of the urinary system.",
    symptoms: ["painful_urination", "frequent_urination", "dark_urine", "blood_in_urine", "abdominal_pain", "fever", "back_pain", "nausea", "chills", "fatigue"],
    symptomWeights: { painful_urination: 0.95, frequent_urination: 0.9, dark_urine: 0.7, blood_in_urine: 0.6, abdominal_pain: 0.65, fever: 0.5, back_pain: 0.5, nausea: 0.3, chills: 0.3, fatigue: 0.3 },
    severity: "mild",
    commonAge: "Women of all ages, men over 50",
    explanation: "UTIs occur when bacteria enter the urinary tract. They are much more common in women. Symptoms include a strong urge to urinate, burning sensation, and cloudy or dark urine."
  },
  {
    id: "asthma",
    name: "Asthma",
    description: "A chronic condition that affects the airways in the lungs.",
    symptoms: ["wheezing", "shortness_of_breath", "chest_tightness", "cough", "fatigue", "anxiety", "insomnia"],
    symptomWeights: { wheezing: 0.95, shortness_of_breath: 0.9, chest_tightness: 0.85, cough: 0.8, fatigue: 0.4, anxiety: 0.3, insomnia: 0.3 },
    severity: "moderate",
    commonAge: "Children and young adults",
    explanation: "Asthma causes the airways to narrow, swell, and produce extra mucus. This makes breathing difficult and triggers coughing, wheezing, and shortness of breath. Triggers include allergens, cold air, exercise, and stress."
  },
  {
    id: "arthritis",
    name: "Arthritis",
    description: "Inflammation of one or more joints causing pain and stiffness.",
    symptoms: ["joint_pain", "joint_swelling", "stiffness", "muscle_pain", "fatigue", "muscle_weakness", "loss_of_appetite", "fever", "numbness", "swelling"],
    symptomWeights: { joint_pain: 0.95, joint_swelling: 0.9, stiffness: 0.85, muscle_pain: 0.6, fatigue: 0.5, muscle_weakness: 0.5, loss_of_appetite: 0.2, fever: 0.2, numbness: 0.3, swelling: 0.7 },
    severity: "moderate",
    commonAge: "Adults over 40",
    explanation: "Arthritis involves inflammation of the joints. The most common types are osteoarthritis (wear and tear) and rheumatoid arthritis (autoimmune). Symptoms typically worsen with age."
  },
  {
    id: "migraine",
    name: "Migraine",
    description: "A neurological condition causing intense, debilitating headaches.",
    symptoms: ["headache", "nausea", "vomiting", "blurred_vision", "dizziness", "sensitivity_to_light", "fatigue", "numbness", "tingling", "mood_swings", "loss_of_appetite", "neck_pain"],
    symptomWeights: { headache: 0.99, nausea: 0.8, vomiting: 0.5, blurred_vision: 0.6, dizziness: 0.5, fatigue: 0.5, numbness: 0.3, tingling: 0.3, mood_swings: 0.3, loss_of_appetite: 0.4, neck_pain: 0.5 },
    severity: "moderate",
    commonAge: "Adults 20-50",
    explanation: "Migraines cause severe throbbing pain, usually on one side of the head. They can be preceded by aura (visual disturbances) and accompanied by nausea, vomiting, and extreme sensitivity to light and sound."
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description: "A chronic skin condition causing inflamed, itchy skin.",
    symptoms: ["itching", "rash", "dry_skin", "skin_lesions", "skin_discoloration", "swelling", "insomnia", "irritability"],
    symptomWeights: { itching: 0.95, rash: 0.9, dry_skin: 0.85, skin_lesions: 0.7, skin_discoloration: 0.6, swelling: 0.4, insomnia: 0.3, irritability: 0.3 },
    severity: "mild",
    commonAge: "Children, may persist into adulthood",
    explanation: "Eczema causes the skin to become red, itchy, and inflamed. It often appears in patches on the hands, feet, face, and behind the knees. It is linked to immune system overactivity."
  },
  {
    id: "hepatitis",
    name: "Hepatitis",
    description: "Inflammation of the liver, often caused by viral infection.",
    symptoms: ["jaundice", "fatigue", "abdominal_pain", "nausea", "vomiting", "loss_of_appetite", "dark_urine", "fever", "joint_pain", "itching", "weight_loss"],
    symptomWeights: { jaundice: 0.95, fatigue: 0.85, abdominal_pain: 0.8, nausea: 0.7, vomiting: 0.5, loss_of_appetite: 0.8, dark_urine: 0.75, fever: 0.5, joint_pain: 0.4, itching: 0.4, weight_loss: 0.5 },
    severity: "severe",
    commonAge: "All ages",
    explanation: "Hepatitis causes liver inflammation and can be acute or chronic. The most common types are Hepatitis A, B, and C. Jaundice (yellowing of skin and eyes) and dark urine are distinctive signs."
  },
  {
    id: "anemia",
    name: "Anemia",
    description: "A condition where the blood lacks enough healthy red blood cells.",
    symptoms: ["fatigue", "dizziness", "shortness_of_breath", "cold_extremities", "headache", "palpitations", "muscle_weakness", "loss_of_appetite", "skin_discoloration", "brittle_nails"],
    symptomWeights: { fatigue: 0.95, dizziness: 0.8, shortness_of_breath: 0.7, cold_extremities: 0.75, headache: 0.6, palpitations: 0.65, muscle_weakness: 0.7, loss_of_appetite: 0.4, skin_discoloration: 0.5 },
    severity: "moderate",
    commonAge: "Women of childbearing age, children",
    explanation: "Anemia reduces the blood's ability to carry oxygen to the body's tissues. Iron deficiency is the most common cause. It is particularly prevalent in Ethiopia, especially among women and children."
  },
  {
    id: "gastroenteritis",
    name: "Gastroenteritis (Stomach Flu)",
    description: "Inflammation of the stomach and intestines, usually from infection.",
    symptoms: ["diarrhea", "vomiting", "nausea", "abdominal_pain", "fever", "chills", "headache", "muscle_pain", "dehydration", "loss_of_appetite", "fatigue"],
    symptomWeights: { diarrhea: 0.95, vomiting: 0.9, nausea: 0.85, abdominal_pain: 0.8, fever: 0.6, chills: 0.4, headache: 0.4, muscle_pain: 0.3, dehydration: 0.7, loss_of_appetite: 0.7, fatigue: 0.5 },
    severity: "mild",
    commonAge: "All ages, especially children",
    explanation: "Gastroenteritis is commonly caused by viral or bacterial infections through contaminated food or water. It causes watery diarrhea, vomiting, and abdominal cramps. Dehydration is the main concern."
  },
  {
    id: "conjunctivitis",
    name: "Conjunctivitis (Pink Eye)",
    description: "Inflammation of the eye's outer membrane.",
    symptoms: ["eye_redness", "eye_pain", "itching", "blurred_vision", "swelling", "fever", "runny_nose"],
    symptomWeights: { eye_redness: 0.95, eye_pain: 0.7, itching: 0.8, blurred_vision: 0.4, swelling: 0.5, fever: 0.2, runny_nose: 0.3 },
    severity: "mild",
    commonAge: "All ages",
    explanation: "Conjunctivitis causes redness, itching, and discharge from the eye. It can be caused by viruses, bacteria, or allergies. Bacterial and viral forms are highly contagious."
  },
  {
    id: "bronchitis",
    name: "Bronchitis",
    description: "Inflammation of the bronchial tubes that carry air to the lungs.",
    symptoms: ["cough", "fatigue", "shortness_of_breath", "chest_tightness", "wheezing", "sore_throat", "fever", "chills", "muscle_pain", "headache", "hoarseness"],
    symptomWeights: { cough: 0.95, fatigue: 0.7, shortness_of_breath: 0.6, chest_tightness: 0.7, wheezing: 0.6, sore_throat: 0.5, fever: 0.4, chills: 0.3, muscle_pain: 0.3, headache: 0.3, hoarseness: 0.5 },
    severity: "moderate",
    commonAge: "All ages",
    explanation: "Bronchitis often develops from a cold or respiratory infection. The cough may produce mucus and can last for weeks. Chronic bronchitis is a more serious condition often linked to smoking."
  },
  {
    id: "allergic_rhinitis",
    name: "Allergic Rhinitis (Hay Fever)",
    description: "An allergic response causing sneezing, runny nose, and itchy eyes.",
    symptoms: ["sneezing", "runny_nose", "nasal_congestion", "itching", "eye_redness", "headache", "fatigue", "sore_throat", "cough", "ear_pain"],
    symptomWeights: { sneezing: 0.95, runny_nose: 0.9, nasal_congestion: 0.85, itching: 0.7, eye_redness: 0.6, headache: 0.4, fatigue: 0.3, sore_throat: 0.3, cough: 0.3, ear_pain: 0.2 },
    severity: "mild",
    commonAge: "All ages",
    explanation: "Allergic rhinitis occurs when the immune system overreacts to airborne allergens like pollen, dust mites, or animal dander. Symptoms mimic a cold but are caused by an allergic response."
  },
]
