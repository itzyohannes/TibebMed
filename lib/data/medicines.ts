export interface TraditionalMedicine {
  id: string
  localName: string
  scientificName: string
  englishName: string
  plantType: string
  partUsed: string
  preparationMethod: string
  traditionalUsage: string
  diseases: string[] // disease IDs
  safetyNotes: string
  region: string
  imageDescription: string
}

export const traditionalMedicines: TraditionalMedicine[] = [
  {
    id: "damakese",
    localName: "Damakese",
    scientificName: "Ocimum lamiifolium",
    englishName: "Ethiopian Basil",
    plantType: "Herb",
    partUsed: "Leaves",
    preparationMethod: "Fresh leaves are crushed and the juice is inhaled or applied to the forehead. Can also be boiled into a tea.",
    traditionalUsage: "Widely used to treat fever, headache, common cold, and flu symptoms. One of the most commonly used medicinal plants in Ethiopian traditional medicine.",
    diseases: ["common_cold", "influenza", "malaria", "headache", "bronchitis"],
    safetyNotes: "Generally considered safe for short-term use. Avoid excessive consumption during pregnancy. Not suitable for children under 2 years without supervision.",
    region: "Throughout Ethiopia, especially highlands",
    imageDescription: "Green leafy herb with aromatic leaves"
  },
  {
    id: "endod",
    localName: "Endod",
    scientificName: "Phytolacca dodecandra",
    englishName: "African Soapberry",
    plantType: "Shrub",
    partUsed: "Berries, Leaves",
    preparationMethod: "Berries are dried and ground into powder. The powder is mixed with water for washing or taken in small controlled doses.",
    traditionalUsage: "Traditionally used for intestinal parasites, skin infections, and as a natural soap. Also used for stomach ailments.",
    diseases: ["gastroenteritis", "eczema", "gastritis"],
    safetyNotes: "CAUTION: Can be toxic in large doses. Must be prepared carefully. Not for internal use without expert guidance. Keep away from children. Do not use during pregnancy.",
    region: "Highland regions of Ethiopia",
    imageDescription: "Shrub with clusters of red-purple berries"
  },
  {
    id: "kosso",
    localName: "Kosso",
    scientificName: "Hagenia abyssinica",
    englishName: "African Redwood / Kosso Tree",
    plantType: "Tree",
    partUsed: "Flowers (female)",
    preparationMethod: "Dried female flowers are ground and mixed with water or honey to create a drink. Typically consumed in a single dose.",
    traditionalUsage: "One of the most famous Ethiopian traditional medicines. Primarily used as a powerful vermifuge (anti-tapeworm treatment). Also used for stomach problems.",
    diseases: ["gastroenteritis", "gastritis"],
    safetyNotes: "Can cause nausea, vomiting, and diarrhea as side effects. Not recommended for pregnant women, elderly, or children under 6. Use only under guidance of traditional healer.",
    region: "Ethiopian highlands, 2000-3000m altitude",
    imageDescription: "Large tree with reddish-pink flower clusters"
  },
  {
    id: "nech_sar",
    localName: "Nech Sar (Tena Adam)",
    scientificName: "Ruta chalepensis",
    englishName: "Fringed Rue",
    plantType: "Herb",
    partUsed: "Leaves, Seeds",
    preparationMethod: "Leaves are brewed into a strong tea, often mixed with coffee or honey. Seeds can be chewed directly or ground.",
    traditionalUsage: "Used for stomach pain, headache, common cold, and as a general tonic. Very popular in Ethiopian households as a daily health drink.",
    diseases: ["common_cold", "gastritis", "headache", "migraine", "influenza"],
    safetyNotes: "Safe in moderate amounts as tea. Large doses can cause photosensitivity. STRICTLY avoid during pregnancy as it may cause uterine contractions. Not for children under 5.",
    region: "Throughout Ethiopia",
    imageDescription: "Small herb with yellow-green compound leaves"
  },
  {
    id: "garlic_nech_shinkurt",
    localName: "Nech Shinkurt",
    scientificName: "Allium sativum",
    englishName: "Garlic",
    plantType: "Bulb",
    partUsed: "Bulb",
    preparationMethod: "Raw cloves chewed directly, or crushed and mixed with honey. Can also be boiled in water for tea or added to food during cooking.",
    traditionalUsage: "Used extensively for treating common cold, flu, hypertension, and boosting immunity. Ethiopian traditional healers recommend it for respiratory infections and blood pressure management.",
    diseases: ["common_cold", "influenza", "hypertension", "bronchitis", "asthma"],
    safetyNotes: "Generally safe. May interact with blood-thinning medications. Excessive consumption may cause digestive discomfort. Avoid large medicinal doses before surgery.",
    region: "Throughout Ethiopia",
    imageDescription: "White garlic bulb with papery skin"
  },
  {
    id: "ginger_zingibil",
    localName: "Zingibil",
    scientificName: "Zingiber officinale",
    englishName: "Ginger",
    plantType: "Rhizome",
    partUsed: "Root (Rhizome)",
    preparationMethod: "Fresh root is grated and boiled to make tea. Can be mixed with honey and lemon. Also chewed raw or dried and ground into powder.",
    traditionalUsage: "Widely used for nausea, stomach pain, cold symptoms, sore throat, and digestive issues. A staple in Ethiopian traditional medicine for respiratory and digestive complaints.",
    diseases: ["gastritis", "gastroenteritis", "common_cold", "influenza", "nausea", "bronchitis"],
    safetyNotes: "Generally safe in food and tea amounts. May lower blood sugar, so diabetics should monitor levels. Large doses may cause heartburn. Use cautiously during pregnancy.",
    region: "Throughout Ethiopia, especially Kaffa region",
    imageDescription: "Knobbly brown root with yellow interior"
  },
  {
    id: "moringa",
    localName: "Shiferaw",
    scientificName: "Moringa oleifera",
    englishName: "Moringa / Drumstick Tree",
    plantType: "Tree",
    partUsed: "Leaves, Seeds, Bark",
    preparationMethod: "Leaves dried and made into tea or powder. Seeds pressed for oil. Fresh leaves added to soups and stews. Bark can be boiled for medicinal decoction.",
    traditionalUsage: "Used as a nutritional supplement for anemia, malnutrition, and general weakness. Also used for diabetes management, inflammation, and boosting the immune system.",
    diseases: ["anemia", "diabetes_type2", "arthritis", "hypertension"],
    safetyNotes: "Leaves are safe for most people. Bark and root extracts should be avoided during pregnancy. Seeds should be consumed in limited quantities. May lower blood pressure and blood sugar.",
    region: "Southern Ethiopia, Rift Valley",
    imageDescription: "Slender tree with small oval green leaves"
  },
  {
    id: "gesho",
    localName: "Gesho",
    scientificName: "Rhamnus prinoides",
    englishName: "Gesho / Buckthorn",
    plantType: "Shrub",
    partUsed: "Leaves, Stems",
    preparationMethod: "Leaves and stems are dried and used in traditional brewing (tella, tej). For medicinal use, leaves are boiled into tea or crushed for poultice.",
    traditionalUsage: "Used traditionally for liver problems, digestive issues, and skin conditions. Also has antimicrobial properties used for treating infections.",
    diseases: ["hepatitis", "gastritis", "eczema"],
    safetyNotes: "Safe in normal food/beverage amounts. Medicinal doses should be moderate. Not recommended for pregnant or breastfeeding women in large quantities.",
    region: "Ethiopian highlands",
    imageDescription: "Shrub with dark green glossy leaves"
  },
  {
    id: "nigella_tikur_azmud",
    localName: "Tikur Azmud",
    scientificName: "Nigella sativa",
    englishName: "Black Seed / Black Cumin",
    plantType: "Herb (annual)",
    partUsed: "Seeds",
    preparationMethod: "Seeds ground into powder and mixed with honey. Also pressed for oil. Can be brewed into tea or added to food.",
    traditionalUsage: "Considered a cure-all in Ethiopian and broader East African traditional medicine. Used for asthma, allergies, diabetes, digestive problems, and immune system support.",
    diseases: ["asthma", "allergic_rhinitis", "diabetes_type2", "gastritis", "bronchitis"],
    safetyNotes: "Generally safe in food amounts. May lower blood sugar and blood pressure, so monitor if on medication. Avoid large medicinal doses during pregnancy.",
    region: "Throughout Ethiopia",
    imageDescription: "Small black angular seeds from a flowering plant"
  },
  {
    id: "fenugreek_abish",
    localName: "Abish",
    scientificName: "Trigonella foenum-graecum",
    englishName: "Fenugreek",
    plantType: "Herb (annual)",
    partUsed: "Seeds, Leaves",
    preparationMethod: "Seeds soaked overnight and eaten in the morning. Can be ground into powder and mixed with water or honey. Also sprouted or cooked into paste.",
    traditionalUsage: "Used for diabetes management, digestive problems, appetite stimulation, and as a galactagogue (to increase breast milk). Also used for joint pain and inflammation.",
    diseases: ["diabetes_type2", "gastritis", "arthritis", "anemia"],
    safetyNotes: "Safe in food amounts. May lower blood sugar, so diabetics should monitor carefully. Can cause uterine contractions - avoid during pregnancy. May cause allergic reactions in some people.",
    region: "Throughout Ethiopia",
    imageDescription: "Small golden-brown seeds with a maple syrup aroma"
  },
  {
    id: "eucalyptus_nech_bahrzaf",
    localName: "Nech Bahrzaf",
    scientificName: "Eucalyptus globulus",
    englishName: "Eucalyptus",
    plantType: "Tree",
    partUsed: "Leaves",
    preparationMethod: "Leaves are boiled in water and the steam is inhaled. Also used to prepare tea or oil extract applied to chest and temples.",
    traditionalUsage: "Primary remedy for respiratory problems including cold, flu, sinusitis, and bronchitis. The steam inhalation helps clear nasal congestion. Also used for headaches and muscle pain.",
    diseases: ["common_cold", "influenza", "bronchitis", "asthma", "allergic_rhinitis", "pneumonia"],
    safetyNotes: "Steam inhalation is generally safe. Do not ingest eucalyptus oil. Keep away from face of infants and small children. External application should be diluted.",
    region: "Throughout Ethiopia, widely planted",
    imageDescription: "Tall tree with long silvery-green aromatic leaves"
  },
  {
    id: "flaxseed_telba",
    localName: "Telba",
    scientificName: "Linum usitatissimum",
    englishName: "Flaxseed / Linseed",
    plantType: "Herb (annual)",
    partUsed: "Seeds",
    preparationMethod: "Seeds soaked in water to form a gel-like drink. Also ground and mixed with honey or water. Commonly consumed as a traditional porridge.",
    traditionalUsage: "Used for digestive problems, constipation, and gastritis. The mucilaginous texture soothes the stomach lining. Also used for cough relief and as a nutritional supplement.",
    diseases: ["gastritis", "gastroenteritis", "bronchitis", "hypertension"],
    safetyNotes: "Safe in normal food amounts. Ensure adequate water intake. May interact with medications due to fiber content. Store properly to prevent rancidity.",
    region: "Ethiopian highlands",
    imageDescription: "Small brown glossy seeds"
  },
  {
    id: "aloe_vera_eret",
    localName: "Eret",
    scientificName: "Aloe vera",
    englishName: "Aloe Vera",
    plantType: "Succulent",
    partUsed: "Leaves (gel and latex)",
    preparationMethod: "Fresh leaf gel is applied directly to skin. For internal use, gel is extracted and mixed with water or honey. Latex is used carefully as a purgative.",
    traditionalUsage: "Used externally for burns, skin rashes, eczema, and wound healing. Internally used for constipation, diabetes management, and liver problems.",
    diseases: ["eczema", "diabetes_type2", "hepatitis", "gastritis"],
    safetyNotes: "Topical gel is safe for most people. Internal use of aloe latex is a strong laxative - use very cautiously. Do not use internally during pregnancy. May lower blood sugar.",
    region: "Throughout Ethiopia, especially lowlands",
    imageDescription: "Thick green succulent with spiny-edged leaves"
  },
  {
    id: "turmeric_ird",
    localName: "Ird",
    scientificName: "Curcuma longa",
    englishName: "Turmeric",
    plantType: "Rhizome",
    partUsed: "Root (Rhizome)",
    preparationMethod: "Root is dried and ground to powder. Mixed with warm milk or water, or with honey. Also applied as paste for skin conditions.",
    traditionalUsage: "Used as an anti-inflammatory for joint pain, arthritis, and muscle aches. Also used for digestive problems, liver health, and skin conditions. Growing in popularity for immune support.",
    diseases: ["arthritis", "gastritis", "hepatitis", "eczema"],
    safetyNotes: "Safe in food amounts. High medicinal doses may cause digestive issues. May interact with blood thinners. Use cautiously if you have gallbladder issues.",
    region: "Southern Ethiopia",
    imageDescription: "Orange-yellow root with earthy appearance"
  },
  {
    id: "honey_mar",
    localName: "Mar",
    scientificName: "Various bee species",
    englishName: "Ethiopian Honey",
    plantType: "Bee product",
    partUsed: "Honey",
    preparationMethod: "Raw honey consumed directly by the spoonful. Mixed with warm water or herbal teas. Applied topically to wounds. Used as a base for many traditional medicine preparations.",
    traditionalUsage: "Ethiopian honey, especially from Tigray and Amhara regions, is used for treating coughs, sore throats, wound healing, and general health. It serves as a carrier for many herbal medicines and is central to Tej (honey wine).",
    diseases: ["common_cold", "influenza", "bronchitis", "gastritis", "eczema"],
    safetyNotes: "Do not give raw honey to infants under 1 year. Diabetics should use with caution due to sugar content. Ensure honey is from a reliable source to avoid contamination.",
    region: "Throughout Ethiopia, especially Tigray, Amhara",
    imageDescription: "Golden amber honey in a traditional Ethiopian container"
  },
  {
    id: "thyme_tosign",
    localName: "Tosign",
    scientificName: "Thymus schimperi",
    englishName: "Ethiopian Thyme",
    plantType: "Herb",
    partUsed: "Leaves, Stems",
    preparationMethod: "Dried leaves brewed into tea, often with honey. Fresh leaves can be chewed. Also used as steam inhalation with hot water.",
    traditionalUsage: "Used for respiratory infections, cough, sore throat, and digestive complaints. Ethiopian thyme is highly valued for its antimicrobial properties. Also used for oral health.",
    diseases: ["common_cold", "influenza", "bronchitis", "sore_throat", "gastritis"],
    safetyNotes: "Safe in culinary and tea amounts. Essential oil should not be ingested. Use cautiously during pregnancy. May interact with blood-thinning medications.",
    region: "Ethiopian highlands",
    imageDescription: "Small aromatic herb with tiny leaves and purple flowers"
  },
]
