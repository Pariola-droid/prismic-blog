import { COLORS } from '@/utils/colors';
// Hero
import Semaglutide from '../assets/pages/multi-medication/hero/semaglutide.webp';
import Zepbound from '../assets/pages/multi-medication/hero/zepbound.webp';
import GLP1 from '../assets/pages/multi-medication/hero/glp.webp';
import Qsymia from '../assets/pages/multi-medication/hero/qsymia.webp';
import Mounjaro from '../assets/pages/multi-medication/hero/mounjaro.webp';
import Wegovy from '../assets/pages/multi-medication/hero/wegovy.webp';
import Saxenda from '../assets/pages/multi-medication/hero/saxenda.webp';
import Victoza from '../assets/pages/multi-medication/hero/victoza.webp';
import Trulicity from '../assets/pages/multi-medication/hero/trulicity.webp';
import Ozempic from '../assets/pages/multi-medication/hero/ozempic.webp';
import Rybelsus from '../assets/pages/multi-medication/hero/rybelsus.webp';
import Phenetermine from '../assets/pages/multi-medication/hero/phenetermine.webp';
import Contrave from '../assets/pages/multi-medication/hero/contrave.webp';
import Metformin from '../assets/pages/multi-medication/hero/metformin.webp';
import PhenetermineTopiramate from '../assets/pages/multi-medication/hero/phenetermine-topiramate.webp';
import NaltrexoneBupropion from '../assets/pages/multi-medication/hero/naltrexone-bupropion.webp';
//
import BlueBottle from '../assets/common/medication-icon/blue-bottle.svg';
import GreenBottle from '../assets/common/medication-icon/green-bottle.svg';
import MudBottle from '../assets/common/medication-icon/mud-bottle.svg';
import BrownBottle from '../assets/common/medication-icon/brown-bottle.svg';
import BluePen from '../assets/common/medication-icon/blue-pen.svg';
import BrownPen from '../assets/common/medication-icon/brown-pen.svg';
import GreenPen from '../assets/common/medication-icon/green-pen.svg';
import PurplePen from '../assets/common/medication-icon/purple-pen.svg';
import MudPen from '../assets/common/medication-icon/mud-pen.svg';
import PurpleSyringe from '../assets/common/medication-icon/purple-syringe.svg';
import BlueSyringe from '../assets/common/medication-icon/blue-syringe.svg';
import BluePills from '../assets/common/medication-icon/blue-pills.svg';
import GreenPills from '../assets/common/medication-icon/green-pills.svg';
import CreamPills from '../assets/common/medication-icon/cream-pills.svg';
import PurplePills from '../assets/common/medication-icon/purple-pills.svg';
import BrownPills from '../assets/common/medication-icon/brown-pills.svg';

export const medicationData = {
  semaglutide: {
    id: 1,
    bg: COLORS.secondaryLightBlue,
    icon: BluePen,
    name: 'Semaglutide',
    page: 'semaglutide',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Semaglutide',
      description:
        'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.\n\nIf your assessment makes you eligible, we may prescribe you a form of semaglutide to help you lose weight.',
      image: Semaglutide,
    },
    aboutSection: {
      heading: 'What is Semaglutide ?',
      description:
        'Semaglutide is a GLP-1 drug prescribed to individuals who are obese or overweight and have at least one weight-related medical problem, such as high blood pressure, type 2 diabetes, or high cholesterol, for the control of chronic weight.\n\nSemaglutide functions by imitating the actions of glucagon-like peptide-1 (GLP-1), a substance that helps control hunger and blood sugar levels. The U.S. Food and Drug Administration (FDA) approved Semaglutide for weight loss, and it can only be obtained with a prescription.\n\nSemaglutide is a powerful selective GLP-1 receptor agonist and has been demonstrated to lessen appetite and heighten the feeling of fullness in subjects with a high BMI of over 27, with comorbidities such as hypertension or dyslipidemia, or individuals who have obesity (BMI of over 30).',
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Brand Name and Class',
        answer: `Semaglutide is a synthetic peptide that acts like a naturally occurring hormone in the body called GLP-1. Semaglutide works by slowing the stomach from emptying, which helps you feel full after eating.\n\nSemaglutide also slows down the rate at which sugar is absorbed into the bloodstream, which helps keep blood sugar levels under control.\n\nSemaglutide is the active ingredient in Wegovy, Ozempic, and Rybelsus brand-name medicines.`,
      },
      {
        id: 2,
        question: 'How does semaglutide work?',
        answer: `Semaglutide helps you lose weight by reducing your appetite and how much food you eat by acting like GLP-1. Your body naturally produces GLP-1, which interacts with your brain to control your hunger and calorie intake.\n\nAfter meals, GLP-1s trigger the pancreas to generate insulin to lower blood sugar levels. They also interact with brain receptors to reduce appetite. As a result of the chemicals released by these receptors, you feel less hungry. GLP-1s are organic substances, but they don't linger for very long in the human body. Because of this, taking GLP-1s even though your body already makes them—can aid in weight loss.`,
      },
      {
        id: 3,
        question: 'Is Semaglutide effective for weight loss?',
        answer: `Semaglutide is one of the most effective and dependable ways to lose weight quickly and safely.\n\nA previous study of 2,000 obese adults compared people who used semaglutide along with a diet and exercise program to people who made the same lifestyle changes but did not use semaglutide. Half of the participants taking semaglutide lost 15% of their body weight after 68 weeks, and nearly a third lost 20%. Participants who only made lifestyle changes lost 2.4% of their body weight.`,
      },
      {
        id: 4,
        question: 'How much does semaglutide cost?',
        answer:
          'Semaglutide may be an expensive medication, with an out of pocket cost above $1,000.',
      },
      {
        id: 5,
        question: 'How is semaglutide administered?',
        answer: `When taking Ozempic or Wegovy, semaglutide is administered as a once-weekly injection.\n\nWhen taking Rybelsus, semaglutide is administered as a once-daily oral tablet.\n\nHowever, don't expect to need a syringe and needle to administer Ozempic or Wegovy. Everything is pre-packaged in an easy-to-use, nearly painless tool.`,
      },
      {
        id: 6,
        question: 'Understanding your semaglutide dosage',
        answer: `Wegovy is available in five separate dosing strengths. Wegovy is started at 0.25 mg once a week and increased every 4 weeks until the full dose of 2.4 mg is reached.\n\nOzempic is available in three distinct dosing strengths. You begin Ozempic at 0.25 mg once a week and gradually raise the amount every four weeks until you reach the full dose of 1 mg.\n\nRybelsus is also available in three different dosage strengths. Rybelsus is started at 3 mg once daily and gradually increased to 7 mg or 14 mg after 30 days.`,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Semaglutide',
        content:
          'Almost 95% of people who take GLP-1 drugs do not have negative effects, making side effects relatively rare. In individuals who experience side effects, nausea is frequently the most prevalent and usually goes away within the first month of taking the medicine.\n\nWegovy may also cause other adverse effects like flatulence, gastroenteritis, gastroesophageal reflux disease, headaches, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia in type 2 diabetic patients, nausea, vomiting, diarrhea, and constipation.',
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Semaglutide',
        content:
          'If you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), GLP-1 class medicines are not suitable. They are also not advised if you have a history of pancreatitis. Please consult your healthcare provider if you have any concerns regarding your family history or the appropriateness of using a GLP-1 receptor agonist prescription.',
      },
    },
    referenceSection: [
      {
        title: 'UCLA Health',
        description: 'Semaglutide for weight loss - what you need to know',
        link: 'https://www.uclahealth.org/news/semaglutide-weight-loss-what-you-need-know',
      },
      {
        title: 'Novo MedLink',
        description:
          'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
        link: 'https://www.novomedlink.com/semaglutide.html',
      },
    ],
    alternativeSection: {
      description: `The two types of GLP-1 receptor agonists are short-acting formulations, which are taken once or twice a day, and long-acting formulations, which are taken once a week. The type given depends on a variety of factors, including medical history, cost (GLP-1 receptor agonists can be expensive), individual choice, and blood sugar management efficiency.`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Mounjaro',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
        {
          icon: PurplePen,
          name: 'Trulicity',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: MudPen,
          name: 'Victoza',
          bgColor: COLORS.lightMud,
        },
      ],
    },
  },
  zepbound: {
    id: 2,
    bg: COLORS.lightPurple,
    icon: PurplePen,
    name: 'Zepbound',
    page: 'zepbound',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Zepbound',
      description: `Zepbound™ is an injectable prescription medicine used for weight loss in adults with obesity or overweight and who also have weight-related medical problems.\n\nIt contains the active ingredient tirzepatide and works by activating both GIP and GLP-1 receptors to reduce appetite, lower blood sugar levels, and promote weight loss. It is used along with a reduced-calorie diet and increased physical activity.
        `,
      image: Zepbound,
    },
    aboutSection: {
      heading: 'What is Zepbound?',
      description: `Zepbound contains the active ingredient tirzepatide, which is a novel dual GIP and GLP-1 receptor agonist. GIP and GLP-1 are naturally occurring hormones in the body that play a role in regulating blood sugar levels, insulin secretion, and feelings of hunger and fullness.\n\nBy activating both GIP and GLP-1 receptors, tirzepatide helps to stimulate insulin secretion, reduce glucagon secretion (which lowers blood sugar levels), slow down the movement of food from the stomach into the small intestine, and increase satiety. These actions contribute to reduced appetite, decreased caloric intake, and weight loss.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How does the Zepbound work?',
        answer: `Zepbound's dual action on GIP and GLP-1 receptors leads to several beneficial effects for weight management. By stimulating GLP-1 receptors, tirzepatide helps lower blood sugar levels, decrease appetite, and slow down stomach emptying, which results in greater satiety and reduced food intake.\n\nOn the other hand, activation of GIP receptors helps to enhance insulin secretion in response to meals, further aiding in blood sugar control and promoting weight loss. Together, these effects help patients achieve and maintain weight loss goals.
          `,
      },
      {
        id: 2,
        question: 'Is Zepbound safe and effective for weight loss?',
        answer: `In clinical trials, patients using Zepbound 5mg once weekly experienced significant weight loss. Over 72 weeks, patients in this dose group lost an average of 16.1 kg (35.5 lb) when used in combination with diet and exercise. Patients on higher doses of 10mg and 15mg once weekly experienced even greater weight loss. However, it is important to note that individual results may vary.\n\nZepbound has been generally well-tolerated in clinical trials, but like all medications, it can have side effects. The overall safety and effectiveness of Zepbound for weight loss have been established in clinical studies, and your doctor will help you understand if the medication is suitable for your specific circumstances.
          `,
      },
      {
        id: 3,
        question: 'How much does Zepbound cost?',
        answer: `The cost of Zepbound may vary depending on factors such as insurance coverage and the specific pharmacy used. The out-of-pocket cost for Zepbound is approximately $1,059.87 for a pre-filled single-dose pen.\n\nHowever, it is worth noting that there may be savings card programs, patient assistance programs, or other discounts available that can help reduce the cost of the medication. It is advisable to check with your insurance provider, the official Zepbound website, or consult a pharmacist for more information on potential cost-saving options.
          `,
      },
      {
        id: 4,
        question: 'How is the Zepbound taken?',
        answer: `Zepbound is self-administered as a once-weekly injection under the skin (subcutaneous injection) using a pre-filled single-dose pen. The injection can be given into the abdomen, thigh, or upper arm. It is recommended to rotate injection sites to minimize the risk of injection site reactions.\n\nThe medication can be taken at any time of day, preferably around the same time each week, and does not necessarily have to be associated with meals. Before starting Zepbound, your doctor will provide specific instructions on how to properly administer the injections, including techniques for safe injection practices.
          `,
      },
      {
        id: 5,
        question: 'Understanding your Zepbound dosage',
        answer: `The starting dose of Zepbound is 2.5mg injected subcutaneously once a week. Your healthcare provider may increase the dose to 10mg and then potentially up to 15mg based on your response and tolerability.\n\nThe dose adjustment will depend on factors such as your weight loss progress, glycemic control, and the presence of side effects. It is important to follow the prescribed dosage and administration instructions provided by your doctor.\n\nIf you miss a dose, you can take it within 4 days of the missed dose. If more than 4 days have passed, skip the missed dose and continue with your regular dosing schedule. Do not take extra doses to make up for a missed dose.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Zepbound',
        content: `Common side effects of Zepbound may include abdominal pain, constipation, diarrhea, fatigue, injection site reactions (such as redness, swelling, or itching at the injection site), nausea, and vomiting.\n\n
          These side effects are generally mild to moderate and often resolve on their own over time. However, if they persist or worsen, it is important to consult with your healthcare provider. Serious side effects may include signs of an allergic reaction (such as rash, itching, or difficulty breathing) or pancreatitis (severe abdominal pain that lasts several days, nausea, and vomiting).\n\nIn rare cases, Zepbound has been associated with the development of thyroid tumors. If you experience severe stomach problems, eye side effects, signs of a thyroid tumor, gallbladder problems, low blood sugar symptoms, or kidney problems, it is important to contact your doctor immediately.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Zepbound',
        content: `Zepbound should not be used if you are allergic to tirzepatide or any of the other ingredients in the medication. It is also contraindicated in individuals with a personal or family history of medullary thyroid carcinoma (MTC) or multiple endocrine neoplasia type 2 (MEN 2).\n\nInform your healthcare provider about your complete medical history, including any known allergies or previous medical conditions, before starting Zepbound.\n\nPregnant or breastfeeding individuals should discuss the risks and benefits of using Zepbound with their healthcare provider before initiating treatment. It is important to follow the guidance of your doctor and discuss any specific concerns or conditions that may affect your suitability for Zepbound.
          `,
      },
    },
    referenceSection: [
      {
        title: 'Eli Lilly',
        description: 'Zepbound (tirzepatide) Injection for Adults with Obesity',
        link: 'https://www.zepbound.lilly.com/',
      },
      {
        title: 'Food and Drug Administration (.gov)',
        description:
          'FDA Approves New Medication for Chronic Weight Management',
        link: 'https://www.fda.gov/news-events/press-announcements/fda-approves-new-medication-chronic-weight-management',
      },
    ],
    alternativeSection: {
      description: `Zepbound is one of the multiple GLP-1 weight-loss classes of drugs. Other alternatives  include:`,
      items: [
        {
          icon: BluePen,
          name: 'Semaglutide',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: GreenPills,
          name: 'Phentermine',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  'glp-1-medication': {
    id: 3,
    bg: COLORS.cream,
    icon: GreenPills,
    name: 'GLP-1',
    page: 'glp-1-medication',
    heroSection: {
      color: COLORS.lightGrass,
      heading: 'GLP-1 drugs for weight loss',
      description:
        'GLP-1 medications are an effective treatment option for obesity and are recommended for people who qualify for medication-assisted weight loss. GLP-1 drugs are a great choice for weight loss, especially if you have tried other weight loss methods with little to no success.\n\nAt Qilo, we assess you to see if any glucagon-like peptide 1 (GLP-1) drugs are right for you.',
      image: GLP1,
    },
    aboutSection: {
      heading: 'What are GLP-1 Receptor Agonists ?',
      description:
        'Glucagon-like peptide-1 (GLP-1) receptor agonists are a class of medications known as incretin mimetics. They mimic the effects of the naturally occurring incretin hormone GLP-1 in the body known as the incretin hormone. GLP-1 receptor agonists were originally approved for use in patients for the treatment of type 2 diabetes mellitus. It is recommended for type 2 diabetes mellitus patients who have not seen any improvement with medications like metformin or sulfonylureas for blood sugar control. These diabetes drugs are used along with lifestyle therapy and a diet and exercise plan to control blood sugar levels. GLP-1 agonists are under a class of drugs known as incretin mimetics, meaning they mimic incretin - a naturally produced hormone in the body.\n\nGLP-1 is a naturally occurring hormone that is released from the small intestine after eating. When blood sugar levels start to rise after someone eats, these drugs stimulate the body to increase insulin secretion into the bloodstream as well as inhibit glucagon secretion. The extra insulin helps lower blood sugar levels, in turn helping individuals with type 2 diabetes. GLP-1 also slows down the emptying of the stomach so that glucose stays in the stomach longer.',
    },
    frequentQuestions: [
      {
        id: 1,
        question:
          'How do Glucagon-like peptide-1 agonists assist in weight loss?',
        answer: `Glucagon-like peptide 1 receptor agonists (GLP-1RAs) belong to a group of approved anti-obesity medications. They aid weight loss and longer-term maintenance of weight loss, despite being originally approved as diabetes medication.\n\nGLP-1 medications are effective in reducing body weight and have been approved by the Food and Drug Administration (FDA) for the treatment of obesity in patients with a BMI of over 27 with comorbidities or patients with a BMI of over 30 in the United States.\n\nResearch examining the mechanism of action of GLP-1RA therapy for weight loss shows that the drug is linked to decreased appetite and hunger, decreased preference for foods high in energy, altered food reward pathways, decreased food cravings, and improved eating control. GLP-1RAs work with your body's natural GLP-1 receptors to regulate weight loss, and metabolic function, as well as decrease your risk of other diseases. GLP-1s lead the pancreas to produce insulin after meals to bring down blood sugar, but they also bind to receptors in the brain to suppress appetite. These receptors release chemicals that help diminish the desire to eat, reducing your hunger. GLP-1s are natural chemicals but don't last long within the human body. That's why taking GLP-1s can help reduce your weight even though your body already produces its own.\n\nIn several clinical trials, persons with obesity who received GLP-1RA medication experienced more weight loss compared to those who received a placebo. The efficacy is minimized when not accompanied by the benefits of lifestyle change since clinical trials have shown that GLP-1s when taken as indicated with lifestyle changes including a balanced food diet and increased exercise, can give you 15% weight loss in only 12 months when compared to placebo.\n\nAccording to studies, individuals who use specific GLP-1 medications for weight loss also experience improvements in their blood pressure, cholesterol levels, kidney, and liver function, as well as a markedly lower risk of developing heart disease, including heart failure and stroke, and kidney disease.\n\nGLP-1 medications have a moderating effect on metabolism, as well as a positive impact on type 2 diabetes and weight loss. For instance, GLP-1RAs can enhance blood lipid profiles, lower sex hormone levels, increase adiponectin levels, control autophagy, inhibit the creation of liver glucose, lower liver fat content, lower plasma liver enzymes, and treat liver steatosis. They can also be used to prevent and treat metabolic illnesses like PCOS and non-alcoholic fatty liver disease as well as endocrine problems.`,
      },
      {
        id: 2,
        question: 'How are GLP-1 medications administered?',
        answer: `GLP-1 medicines come in both oral and injectable forms.\n\nSeveral GLP-1 medicines are administered by subcutaneous injection using a straightforward pen injector syringe. These GLP-1 drugs are easy to use and can be administered intravenously from the convenience of your home without the presence of a healthcare professional or physician. Short- and long-acting GLP-1 receptor agonists are injected into the fatty tissue just below the skin's surface.\n\nIf a GLP-1 receptor agonist is recommended by your doctor, you will be shown how to administer it via injection into your upper thigh or abdomen. If you are unable to inject the medication yourself, have someone else do it.\n\nRybelsus and other oral GLP-1 medicines are taken every morning.
          You might discuss sticking to oral medications with your doctor if you have reservations about injectable medications.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of GLP-1 medications',
        content: `Almost 95% of people who take GLP-1 drugs do not have negative effects, making side effects relatively rare. In individuals who experience side effects, nausea or indigestion is frequently the most frequent and usually goes away within the first month of taking the medicine.\n\nAdditional typical adverse effects of GLP-1 drugs include flatulence, gastroenteritis, and gastroesophageal reflux disease, as well as nausea, vomiting, diarrhea, and constipation. They can also cause headaches, fatigue, dyspepsia, dizziness, abdominal distention, and eructation. By taking another similar drug at the same time as GLP-1 medications, you run a major risk of hypoglycemia or acute kidney injury.\n\nIf you have a personal or family history of medullary thyroid cancer or type 2 multiple endocrine neoplasia, you shouldn't take GLP-1 class medications (MEN2). They are not suggested if you have ever experienced pancreatitis. Speak with your healthcare provider if you have any concerns about your family history and ability to use a GLP-1 receptor agonist prescription.`,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Semaglutide',
        content:
          'If you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), GLP-1 class medicines are not suitable. They are also not advised if you have a history of pancreatitis. Please consult your healthcare provider if you have any concerns regarding your family history or the appropriateness of using a GLP-1 receptor agonist prescription.',
      },
    },
    referenceSection: [
      {
        title: 'Cleveland Clinic',
        description: 'GLP-1 Agonists',
        link: 'https://my.clevelandclinic.org/health/treatments/13901-glp-1-agonists',
      },
      {
        title: 'Mayo Clinic',
        description: 'GLP-1 agonists: Diabetes drugs and weight loss',
        link: 'https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/expert-answers/byetta/faq-20057955?sscid=11k8_cr29d&',
      },
    ],
    alternativeSection: {
      description: `The two types of GLP-1 receptor agonists are short-acting formulations, which are taken once or twice a day, and long-acting formulations, which are taken once a week. The type given depends on a variety of factors, including medical history, cost (GLP-1 receptor agonists can be expensive), individual choice, and blood sugar management efficiency.`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Mounjaro',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
        {
          icon: PurplePen,
          name: 'Trulicity',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: MudPen,
          name: 'Victoza',
          bgColor: COLORS.lightMud,
        },
      ],
    },
  },
  qsymia: {
    id: 4,
    bg: COLORS.lightMud,
    icon: MudPen,
    name: 'Qsymia',
    page: 'qsymia',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Qsymia',
      description: `Qsymia is a prescription medication designed to aid in weight loss and improve overall health. It combines two active ingredients: phentermine (a stimulant) and topiramate (an anticonvulsant). Together, they work synergistically to suppress appetite, enhance satiety, and promote weight reduction.\n\nQsymia is used along with a reduced-calorie diet and increased physical activity to treat obesity or weight-related medical conditions. It helps reduce hunger, increase satiety, and promote weight loss.
        `,
      image: Qsymia,
    },
    aboutSection: {
      heading: 'What is Qsymia?',
      description: `Qsymia is an FDA-approved medication indicated for chronic weight management in adults with a body mass index (BMI) of 30 or higher (obesity) or a BMI of 27 or higher (overweight) with at least one weight-related comorbidity (such as hypertension, type 2 diabetes, or dyslipidemia).\n
        The combination of phentermine and topiramate addresses multiple aspects of weight loss:\n
        Phentermine: Acts as an appetite suppressant by stimulating the release of norepinephrine, which reduces hunger signals from the brain. It also increases energy expenditure, aiding in calorie deficit.\n
        Topiramate: Modulates neurotransmitters and may lead to decreased food intake and increased feelings of fullness. Additionally, it has antiepileptic properties.
      `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How Does Qsymia Work?',
        answer: `Qsymia works by reducing appetite and increasing feelings of fullness. Phentermine is a drug that affects the central nervous system, reducing feelings of hunger. It also triggers the release of noradrenaline, a hormone that increases the metabolic rate, which can help the body burn calories more efficiently.\n\nTopiramate works by suppressing food cravings and increasing the feeling of fullness by modulating the activity of neurotransmitters in the brain that regulate appetite.\n\nThe combination of phentermine and topiramate results in a synergistic effect that can promote weight loss in eligible individuals.`,
      },
      {
        id: 2,
        question: 'Is Qsymia safe and effective for weight loss?',
        answer: `Clinical trials demonstrate that Qsymia leads to significant weight loss when combined with lifestyle modifications. Patients typically lose around 5-10% of their initial body weight within the first year. Individual responses vary, but consistent adherence yields better outcomes.\n\nQsymia is generally safe when used appropriately. However, it’s essential to monitor patients for adverse effects, including elevated heart rate, mood changes, and cognitive impairment. Regular follow-up visits allow us to address any concerns promptly
          `,
      },
      {
        id: 3,
        question: 'How much does Qsymia cost?',
        answer: `Qsymia can be relatively expensive, with an estimated cost of up to $200 for a 30-day supply. However, the cost may vary depending on insurance coverage and region.
          `,
      },
      {
        id: 4,
        question: 'How is Qsymia taken?',
        answer: `Qsymia is to be taken orally, either with or without food, following your doctor's guidance, typically once daily in the morning. It's crucial to avoid taking the medication late in the day to prevent potential insomnia.\n\nThe capsules should be swallowed whole, and it is essential not to crush or chew them. By adhering to these instructions, you ensure a gradual and controlled release of the drug, minimizing the risk of side effects associated with rapid absorption.
          `,
      },
      {
        id: 5,
        question: 'Understanding your Qsymia dosage',
        answer: `Qsymia is available in different strengths (e.g., 3.75 mg/23 mg, 7.5 mg/46 mg).\n
          The dosage of Qsymia is personalized based on your medical condition and how your body responds to treatment. To mitigate the risk of side effects, your doctor may recommend initiating the medication at a low dose and progressively increasing it.\n\nCarefully follow your doctor's instructions throughout this process, allowing for a tailored approach that optimizes the balance between effectiveness and safety in your unique health journey.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Qsymia',
        content: `As with any medication, Qsymia can potentially cause side effects. Common side effects reported with Qsymia include dry mouth, constipation, insomnia, dizziness, changes in taste, and tingling sensations in the hands and feet.\n\nThese side effects are typically mild and temporary. However, more serious side effects such as increased heart rate, mood changes, or vision problems may occur, and it is crucial that you promptly report any concerning symptoms to your doctor.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Qsymia',
        content: `There are several contraindications for the use of Qsymia. Individuals with glaucoma, hyperthyroidism, uncontrolled high blood pressure, or a history of certain cardiovascular diseases should not take Qsymia.\n\nIt is also contraindicated during pregnancy due to potential risks to the developing fetus. Qsymia should also be used with caution or avoided by individuals with a history of substance abuse or mental health disorders. It is important to disclose your complete medical history to your doctor to ensure Qsymia is suitable for you.
          `,
      },
    },
    referenceSection: [
      {
        title: 'Qsymia',
        description: 'Prescription Weight Loss with Qsymia®',
        link: 'https://qsymia.com/',
      },
      {
        title: 'GoodRx',
        description: `How to Take Qsymia for Weight Loss: Dos And Don'ts`,
        link: 'https://www.goodrx.com/qsymia/what-is',
      },
    ],
    alternativeSection: {
      description: `If Qsymia is not suitable or effective for you, other alternatives include:`,
      items: [
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: PurplePills,
          name: 'Naltrexone-bupropion',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BlueBottle,
          name: 'Contrave',
          bgColor: COLORS.secondaryLightBlue,
        },
      ],
    },
  },
  mounjaro: {
    id: 5,
    bg: COLORS.lightBrown,
    icon: BrownPen,
    name: 'Mounjaro',
    page: 'mounjaro',
    heroSection: {
      color: COLORS.lightMud,
      heading: 'Lose Weight With Mounjaro (Tirzepatide)',
      description:
        'Mounjaro (Tirzepatide) is used in combination with diet and exercise to achieve weight loss if you’re overweight. It is a once-weekly injection for improving blood sugar in adults.\n\nIf your assessment makes you eligible, we may prescribe you a form of mounjaro (tirzepatide) to help you lose weight.',
      image: Mounjaro,
    },
    aboutSection: {
      heading: 'What is Mounjaro ?',
      description:
        'Mounjaro (Tirzepatide) is a synthetic peptide that mimics the action of two incretin hormones involved in blood sugar control which are glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP). This dual mimetic action makes it the first drug of its kind to act on both of those receptors.\n\nMounjaro reduces fasting and postprandial glucose concentrations, food intake, and body weight in patients with type 2 diabetic patients, obesity, or excessive body fat.',
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How Does Mounjaro (Tirzepatide) Work?',
        answer: `Mounjaro (Tirzepatide) is a single molecule that stimulates the two natural incretin hormones; insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors.\n\nGLP-1s stimulate the pancreas to create insulin after meals, which lowers blood sugar levels. They suppress hunger by binding to receptors in the brain that release chemicals which suppress your appetite by stimulating brain locations that regulate food intake. On the other hand, GIP has been demonstrated to reduce your appetite and raise your energy expenditure, resulting in weight loss. The pairing of GIP and GLP-1 agonist may have a greater favorable effect on blood glucose and body weight.\n\nMounjaro (Tirzepatide) aids weight loss by decreasing food intake and slowing the rate at which food travels through your digestive tract (a process known as gastric emptying). This may help you feel filled for longer periods of time, allowing you to eat less food.
          `,
      },
      {
        id: 2,
        question: 'Is Mounjaro effective for weight loss?',
        answer: `'Tirzepatide, the active ingredient in Mounjaro, is a quick, safe, and effective way to lose weight.\n\nIt has been shown in clinical trials to help individuals lose up to 21% of their initial body weight when combined with a reduced-calorie diet and increased physical activity, when compared to participants who took a placebo.\n\nMounjaro (tirzepatide) has numerous advantages, including weight loss and improved control of diabetes symptoms. Weight loss of 20% or more has been demonstrated in clinical trials after a year of treatment with Mounjaro (tirzepatide).\n\nMounjaro (tirzepatide) is projected to be even more effective than GLP-1 alone, making it an appealing option for anyone seeking safe and effective weight loss options.
          `,
      },
      {
        id: 3,
        question: 'How much does Mounjaro cost?',
        answer:
          'Mounjaro (tirzepatide) may be an expensive medication, costing over $1000.',
      },
      {
        id: 4,
        question: 'How is Mounjaro administered?',
        answer: `Mounjaro (tirzepatide) is injected beneath the skin with a standard pen injector syringe. It is injected beneath the skin surface in your stomach, thigh, or upper arm. It is typically administered once weekly, at the same time of day.\n\nMounjaro (tirzepatide) injections are simple to administer and do not require the assistance of a healthcare practitioner or physician.\n\nMounjaro (tirzepatide) should be stored in the refrigerator at temperatures ranging from 36°F to 46°F.\n\nAt Qilo, if your doctor prescribes Mounjaro (tirzepatide), he or she will walk you through the injection process into your belly or upper thigh. If you are unable to inject yourself, someone else can assist you.
          `,
      },
      {
        id: 5,
        question: 'Understanding your MOUNJARO dosage',
        answer: `GLP-1/GIP injectable drugs are provided in a step-up fashion, which means that as you advance through the program, your Qilo healthcare providers will prescribe a greater dose until you reach the complete amount. This reduces the chance of any medication-related negative effects.\n\nMounjaro (tirzepatide) is available in six distinct dosing strengths. Mounjaro (tirzepatide) is started at a dose of 2.5 mg once a week, and your provider can gradually raise the dose every 4 weeks until you reach the maximum dose of 15 mg.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Mounjaro',
        content:
          'The most common side effects described in Mounjaro trials are stomach side effects such as nausea, diarrhea, and loss of appetite. Other side effects of Mounjaro (Tirzepatide) include nausea, constipation, indigestion (heartburn), and stomach (abdominal) pain.',
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Mounjaro',
        content:
          'Mounjaro (tirzepatide) should not be used in people who have a personal or familial history of medullary thyroid cancer or who have Multiple Endocrine Neoplasia type 2.',
      },
    },
    referenceSection: [
      {
        title: 'Mounjaro',
        description: 'Type 2 Diabetes Treatment to Lower A1C',
        link: 'https://www.mounjaro.com/',
      },
      {
        title: 'Cleveland Clinic',
        description: 'How Mounjaro Is Helping People With Obesity Lose Weight',
        link: 'https://health.clevelandclinic.org/mounjaro-for-weight-loss',
      },
    ],
    alternativeSection: {
      description: `Mounjaro (tirzepatide) is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: BluePen,
          name: 'Semaglutide',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: BrownPills,
          name: 'Dulaglutide',
          bgColor: COLORS.lightBrown,
        },
      ],
    },
  },
  ozempic: {
    id: 6,
    bg: COLORS.secondaryLightBlue,
    icon: BluePen,
    name: 'Ozempic',
    page: 'ozempic',
    heroSection: {
      color: COLORS.lightBrown,
      heading: 'Lose Weight With Ozempic',
      description:
        'Ozempic is a glucagon-like peptide-1 (GLP-1) receptor agonist. It is a brand name of semaglutide and is used to treat type 2 diabetes mellitus in adults.\n\nOzempic is combined with a healthy diet, exercise, and lifestyle changes to achieve weight loss in people who are overweight or obese.',
      image: Ozempic,
    },
    aboutSection: {
      heading: 'What is Ozempic ?',
      description: `Ozempic is a GLP-1 drug prescribed to individuals who are obese or overweight and have at least one weight-related medical problem, such as high blood pressure, type 2 diabetes, or high cholesterol, for the control of chronic weight.\n\nOzempic functions by imitating the actions of glucagon-like peptide-1 (GLP-1), a substance that helps control hunger and blood sugar levels. The U.S. Food and Drug Administration (FDA) approved Ozempic for weight loss, and it can only be obtained with a prescription.\n\nOzempic is a powerful selective GLP-1 receptor agonist, and has been demonstrated to lessen appetite and heighten the feeling of fullness in subjects with a high BMI of over 27, with comorbidities such as hypertension or dyslipidemia, or individuals who have obesity (BMI of over 30).
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Generic Name and Class',
        answer: `Semaglutide is the active component in Ozempic. Semaglutide is a synthetic peptide that acts like a naturally occurring hormone in the body called GLP-1.\n\nSemaglutide works by slowing the stomach from emptying, which helps you feel full after eating. It also slows down the rate at which sugar is absorbed into the bloodstream, which helps keep blood sugar levels under control.
          `,
      },
      {
        id: 2,
        question: 'How Does Ozempic Work?',
        answer: `Ozempic helps you lose weight by reducing your appetite and how much food you eat by acting like GLP-1. Your body naturally produces GLP-1, which interacts with your brain to control your hunger and calorie intake.\n\nAfter meals, GLP-1s trigger the pancreas to generate insulin to lower blood sugar levels. They also interact with brain receptors to reduce appetite. As a result of the chemicals released by these receptors, you feel less hungry. GLP-1s are organic substances, but they don't linger for very long in the human body. Because of this, taking GLP-1s—even though your body already makes them—can aid in weight loss.
          `,
      },
      {
        id: 3,
        question: 'Is Ozempic effective for weight loss?',
        answer: `Semaglutide, the active ingredient in Ozempic, is one of the most effective and dependable ways to lose weight quickly and safely.\n\nA previous study of 2,000 obese adults compared people who used semaglutide along with a diet and exercise program to people who made the same lifestyle changes but did not use semaglutide. Half of the participants taking semaglutide lost 15% of their body weight after 68 weeks, and nearly a third lost 20%. Participants who only made lifestyle changes lost 2.4% of their body weight.
          `,
      },
      {
        id: 4,
        question: 'Medical Weight Loss',
        answer:
          'Ozempic is an effective weight loss medication, with patients typically losing 5% or more of their body weight after one year of treatment. This new 2mg dose is expected to be even more effective, making it a promising option for those looking for safe and effective weight management solutions.',
      },
      {
        id: 5,
        question: 'How much does Ozempic cost?',
        answer:
          'Ozempic may be an expensive medication, with an out of pocket cost above $1,000.',
      },
      {
        id: 6,
        question: 'How is Ozempic administered?',
        answer: `Similar to how it is used to treat type 2 diabetes, Ozempic is normally injected subcutaneously once a week when being used for weight loss. It is crucial to adhere to the dosing guidelines given by a healthcare provider because the dosage of Ozempic used for weight reduction may differ from the dosage used for diabetes management.\n\nOzempic is injected under the skin via a simple pen injector syringe. Ozempic can be injected from the comfort of your own home without a healthcare provider or clinician present, and it is simple to use. You should store Ozempic in a refrigerator between 36°F and 46°F.\n\nIf your doctor prescribes Ozempic, he or she will walk you through the process of injecting it into your belly or upper thigh. Someone else can inject the medicine into your upper arm if you are unable to do it yourself.
          `,
      },
      {
        id: 7,
        question: 'Understanding your dosage',
        answer: `GLP-1 injectable drugs are provided in a step-up fashion, which means that as you advance through the program, your Qilo healthcare providers will prescribe a greater dose until you reach the complete amount. This reduces the chance of any medication-related negative effects.\n\nOzempic comes in 3 different dose strengths. You start Ozempic at a dose of 0.25 mg once a week and increase the dose every 4 weeks until you reach the full dose of 1 mg. It's important to follow the dosing schedule as recommended by your healthcare provider.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Ozempic',
        content: `The most common side effect of Ozempic is nausea or indigestion, and it usually resolves within the first month of using the medication. However, the side effects of Ozempic are rare and over 95% of individuals who take these medications do not experience side effects.\n\nOther common side effects of Ozempic medications include nausea, diarrhea, vomiting, constipation, abdominal pain, headache, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia (low blood sugar) in patients with type 2 diabetes, flatulence, gastroenteritis, and gastroesophageal reflux disease. Taking GLP-1 medications may also put you at serious risk of hypoglycemia or acute kidney injury if you are taking another similar medication at the same time.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Ozempic',
        content: `If you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), the GLP-1 class of medicines is not indicated. They are also not recommended if you have had pancreatitis. Speak with your health care provider if you have any concerns about your family history or ability to use a GLP-1 receptor agonist prescription.
          `,
      },
    },
    referenceSection: [
      {
        title: 'Ozempic.com',
        description: 'Ozempic® (semaglutide) injection for Type 2 Diabetes',
        link: 'https://www.ozempic.com/',
      },
      {
        title: 'Diabetes UK',
        description: 'Ozempic and weight loss: the facts behind the headlines',
        link: 'https://www.diabetes.org.uk/about-us/news-and-views/ozempic-and-weight-loss-facts-behind-headlines',
      },
      {
        title: 'Health.com',
        description: 'What Happens to Your Body on Ozempic?',
        link: 'https://www.health.com/side-effects-ozempic-7372444',
      },
    ],
    alternativeSection: {
      description: `Ozempic is one of several weight-loss medications classified as GLP-1. Among the other GLP-1 medicines are:`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: PurplePen,
          name: 'Trulicity',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: MudBottle,
          name: 'Victoza',
          bgColor: COLORS.lightMud,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  wegovy: {
    id: 7,
    bg: '#EEE0FF',
    icon: PurplePen,
    name: 'Wegovy',
    page: 'wegovy',
    heroSection: {
      color: COLORS.secondaryLightBlue,
      heading: 'Lose Weight With Wegovy',
      description: `Wegovy (Semaglutide) is used alongside physical activity and nutritional guidance for chronic weight management.Wegovy (Semaglutide) is a glucagon-like peptide-1 (GLP-1) medication for chronic weight management in adults with or without type 2 diabetes.\n\nWegovy is effective in managing individuals with obesity or overweight with at least one weight-related condition (such as high blood pressure, type 2 diabetes, or high cholesterol), for use in addition to a reduced-calorie diet and increased physical activity.
        `,
      image: Wegovy,
    },
    aboutSection: {
      heading: 'What is Wegovy ?',
      description: `Wegovy is a GLP-1 drug prescribed to individuals who are obese or overweight and have at least one weight-related medical problem, such as high blood pressure, type 2 diabetes, or high cholesterol, for the control of chronic weight.\n\nWegovy functions by imitating the actions of glucagon-like peptide-1 (GLP-1), a substance that helps control hunger and blood sugar levels. The U.S. Food and Drug Administration (FDA) approved Wegovy, and it can only be obtained with a prescription.\n\nWegovy is a powerful selective GLP-1 receptor agonist and has been demonstrated to lessen appetite and heighten the feeling of fullness in subjects with high BMI.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Generic Name and Class',
        answer:
          'The active ingredient in Wegovy is semaglutide. Semaglutide is a synthetic peptide that mimics GLP-1, a naturally occurring hormone in the body. Semaglutide works by slowing stomach emptying, making you feel full after eating. It also decreases the pace at which sugar is absorbed into the bloodstream, which aids in blood sugar regulation.',
      },
      {
        id: 2,
        question: 'How does Wegovy aid weight loss?',
        answer: `Wegovy helps you lose weight by reducing your appetite and how much food you eat by acting like GLP-1.\n\nThe body naturally produces GLP-1, which interacts with your brain to control your hunger and calorie intake. After meals, GLP-1s trigger the pancreas to generate insulin to lower blood sugar levels. They also interact with brain receptors to reduce appetite. As a result of the chemicals released by these receptors, you feel less hungry. GLP-1s are organic substances, but they don't linger for very long in the human body. Because of this, taking GLP-1s—even though your body already makes them—can aid in weight loss.
          `,
      },
      {
        id: 3,
        question: 'Is Wegovy effective for weight loss?',
        answer: `Clinical trials have demonstrated that Wegovy (semaglutide) can help adults who are obese or overweight and have at least one weight-related health problem lose weight. In a clinical experiment with more than 1,900 participants, after 68 weeks of treatment, those who took semaglutide lost an average of 15% of their body weight, as opposed to an average of 2.4% in the placebo group.\n\nAfter 30 weeks of treatment, those who got semaglutide dropped an average of 6.5% of their body weight, compared to an average of 1.9% in the placebo group, in another clinical trial with nearly 2,000 participants who had type 2 diabetes and obesity.\n\nWhen paired with a low-calorie diet and increased physical activity, Wegovy is one of the fastest, most effective ways to help you lose weight rapidly and safely as compared to individuals who took a placebo.
          `,
      },
      {
        id: 4,
        question: 'How much does Wegovy Cost?',
        answer:
          'Wegovy may be an expensive medication, with an out-of-pocket cost above 700,000 Naira. Qilo works with insurance plan providers to get coverage for your doctor-prescribed medication.',
      },
      {
        id: 5,
        question: 'How is Wegovy administered?',
        answer: `Wegovy is taken via a once-a-week injection. Everything comes pre-packaged in a simp-to-use, virtually painless tool.\n\nIf you are prescribed Wegovy, we guide you on how to administer the medication.
          `,
      },
      {
        id: 6,
        question: 'Understanding your Wegovy dosage',
        answer: `Wegovy comes in 5 different dose strengths. You start Wegovy at a dose of 0.25 mg once a week and increase the dose every 4 weeks until you reach the full dose of 2.4 mg. It's important to follow the dosing schedule as recommended by your doctor.`,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Wegovy',
        content: `Almost 95% of people who take GLP-1 drugs do not have negative effects, making side effects relatively rare. In individuals who experience side effects, nausea is frequently the most prevalent and usually goes away within the first month of taking the medicine.\n\nWegovy may also cause other adverse effects like flatulence, gastroenteritis, gastroesophageal reflux disease, headaches, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia in type 2 diabetic patients, nausea, vomiting, diarrhea, and constipation.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Wegovy',
        content:
          'Wegovy should not be taken by individuals with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2),  in patients with a prior serious hypersensitivity reaction to semaglutide or any of the excipients in Wegovy, or patients with a history of pancreatitis.',
      },
    },
    referenceSection: [
      {
        title: 'Wegovy.com',
        description: 'Weight-Loss Prescription Medication',
        link: 'https://www.wegovy.com/',
      },
      {
        title: 'GoodRx',
        description: 'What is Wegovy (semaglutide)?',
        link: 'https://www.goodrx.com/wegovy/what-is',
      },
    ],
    alternativeSection: {
      description: `Wegovy is one of multiple weight loss drugs which fit into the GLP-1 category. Other GLP-1 medications include:`,
      items: [
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: BrownPills,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: PurplePen,
          name: 'Trulicity',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: MudBottle,
          name: 'Victoza',
          bgColor: COLORS.lightMud,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  saxenda: {
    id: 8,
    bg: '#FFECDB',
    icon: BrownPen,
    name: 'Saxenda',
    page: 'saxenda',
    heroSection: {
      color: COLORS.lightGrass,
      heading: 'Lose Weight With Saxenda',
      description: `Saxenda is a glucagon-like peptide-1 (GLP-1) medication used in combination with a low-calorie diet and increased physical activity for weight loss.\n\nSaxenda is effective for weight loss in adult patients who are obese or overweight and have at least one weight-related condition (such as high blood pressure, type 2 diabetes mellitus, or high cholesterol).
        `,
      image: Saxenda,
    },
    aboutSection: {
      heading: 'What is Saxenda ?',
      description: `Saxenda is a GLP-1 medication that is approved by the Food and Drug Administration (FDA) for the treatment of obesity in adults who have a body mass index (BMI) of over 27, with comorbidities such as hypertension or dyslipidemia, or individuals who have obesity (BMI of over 30).\n\nSaxenda is a potent selective GLP-1 receptor agonist that has been shown to reduce hunger and increase the feeling of fullness in subjects with high BMI. Saxenda is one of the weight loss medications that may be prescribed by an Alfie healthcare provider for weight loss or a weight-related medical condition. It is produced by Novo Nordisk.\n\nSaxenda should not be taken by individuals with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), in patients with a prior serious hypersensitivity reaction to liraglutide or any of the ingredients in Saxenda, or in patients with a history of pancreatitis.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Generic Name and Class',
        answer:
          'The active ingredient in Saxenda is liraglutide. Liraglutide is a synthetic peptide that mimics GLP-1, a naturally occurring hormone in the body. Liraglutide works by slowing stomach emptying and acting as an appetite suppressant, allowing you to feel satisfied after eating. It also decreases the pace at which sugar is absorbed into the bloodstream, which aids in blood sugar regulation.',
      },
      {
        id: 2,
        question: 'How does saxenda work?',
        answer: `Saxenda is a synthetic peptide that imitates the natural hormone GLP-1 in the body. GLP-1 is a naturally occurring hormone in your body that acts on your brain to manage your appetite and food intake.\n\nGLP-1s stimulate the pancreas to create insulin after meals, which lowers blood sugar levels. They suppress hunger by binding to receptors in the brain that release chemicals which suppress your appetite by stimulating brain locations that regulate food intake.\n\nGLP-1s are naturally occurring compounds with a short half-life in humans, and as a result, even though your body produces GLP-1s, taking them can help you lose weight.\n\nSaxenda makes you feel less hungry and eat less food to help you lose weight.
          `,
      },
      {
        id: 3,
        question: 'Is Saxenda effective for weight loss?',
        answer: `Saxenda is effective for quick and sustainable weight loss. It is usually recommended for those with a BMI of 27 or above and other comorbidities.\nIt has been shown in clinical trials to help individuals lose an average of 10% of their initial body weight when combined with a reduced-calorie diet and increased physical activity when compared to placebo participants.
          `,
      },
      {
        id: 4,
        question: 'How much does Saxenda cost?',
        answer: 'Saxenda may be an expensive medication, costing over $1000.',
      },
      {
        id: 5,
        question: 'How do injection pens work?',
        answer: `Saxenda is available as an injectable solution in a prefilled dosage pen that is injected beneath the skin surface in your stomach, thigh, or upper arm. It is typically administered at the same time once a day, with or without food.\n\nSaxenda injections are simple to administer and do not require the assistance of a healthcare practitioner or physician.\n\nSaxenda should be stored in the refrigerator at temperatures ranging from 36°F to 46°F, or at room temperature for shorter periods of time.\n\nAt Qilo, if your doctor prescribes Saxenda, he or she will walk you through the injection process into your belly or upper thigh. If you are unable to inject yourself, someone else can assist you.
          `,
      },
      {
        id: 6,
        question: 'Understanding your Saxenda dosage',
        answer: `GLP-1 injectable drugs are provided in a step-up fashion, which means that as you advance through the program, your Qilo healthcare providers will prescribe a greater dose until you reach the complete amount. This reduces the chance of any medication-related negative effects.\n\nSaxenda is available in five distinct dosage strengths. You begin with 0.6 mg of Saxenda once a day and gradually raise the amount every week until you reach the full dose of 3 mg.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Saxenda',
        content: `Saxenda has a very favorable side effect profile and is generally well-tolerated in adults. Some of the common adverse effects go away within the first month of treatment.\n\nThe most common side effects of Saxenda include nausea, diarrhea, constipation, vomiting, injection site reaction, low blood sugar (hypoglycemia), headache, tiredness (fatigue), dizziness, stomach pain, and change in enzyme (lipase) levels in your blood.\n\nTaking GLP-1 medications may also put you at serious risk of hypoglycemia or acute kidney injury if you are taking another similar medication at the same time.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Saxenda',
        content:
          'Saxenda is not recommended if you have a personal or family history of medullary thyroid cancer (MTC) or multiple endocrine neoplasia syndrome type 2 (MEN2). Saxenda is also avoided in individuals who have previously had a major adverse reaction to it, including isomaltulose, aspartame, and sucralose, as well as those who have a history of pancreatitis.',
      },
    },
    referenceSection: [
      {
        title: 'Saxenda.com',
        description: 'Prescription Weight-Loss Medicine | Saxenda®',
        link: 'https://www.saxenda.com/',
      },
      {
        title: 'GoodRx',
        description: 'Saxenda for Weight Loss: What You Need to Know - GoodRx',
        link: 'https://www.goodrx.com/saxenda/what-do-you-need-to-know-about-saxenda-for-weight-loss',
      },
    ],
    alternativeSection: {
      description: `Trulicity is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: GreenPen,
          name: 'Trulicity',
          bgColor: COLORS.lightGrass,
        },
        {
          icon: BrownPen,
          name: 'Victoza',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  trulicity: {
    id: 9,
    bg: '#EEE0FF',
    icon: PurplePen,
    name: 'Trulicity',
    page: 'trulicity',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Trulicity',
      description: `Trulicity is a glucagon-like peptide-1 (GLP-1) drug used in combination with exercise and diet for the management of high blood sugar in adults with type II diabetes.\n\nTrulicity has been shown to help individuals lose weight when combined with diet and exercise lifestyle changes.\n\nIf your assessment makes you eligible, we may prescribe you Trulicity to help you lose weight.
        `,
      image: Trulicity,
    },
    aboutSection: {
      heading: 'What is Trulicity?',
      description: `Trulicity is a long-acting selective GLP-1 receptor agonist that reduces blood sugar levels and enhances feelings of fullness in people who are overweight or obese.\n\nTrulicity has been authorized by the Food and Drug Administration (FDA) for the treatment of diabetes in adults. Trulicity is one of the weight loss medications provided for weight reduction or a weight-related medical problem by the Qilo healthcare professionals.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Brand Name and Class',
        answer: `The active ingredient in Trulicity is dulaglutide. Dulaglutide is a synthetic peptide that acts like a naturally occurring hormone in the body called GLP-1.\n\nTrulicity (Dulaglutide) works by slowing the stomach from emptying, which helps you feel full after eating. It also slows down the rate at which sugar is absorbed into the bloodstream, which helps keep blood sugar levels under control.
        .
          `,
      },
      {
        id: 2,
        question: 'How does Trulicity work?',
        answer: `Trulicity is a synthetic peptide that mimics the body's natural hormone GLP-1. GLP-1 is a naturally occurring hormone in the human body that acts on the brain to modulate appetite and food intake.\n\nGLP-1s in the body increase insulin release after meals, which helps to keep blood sugar levels low. They also bind to brain receptors that suppress hunger. These receptors produce chemicals that reduce your desire to eat, leading to weight loss. However, because these molecules are natural, they do not stay in the human body for long. That is why taking GLP-1s can promote weight loss even if your body produces them naturally.\n\nTrulicity, like GLP-1, reduces your appetite and the amount of food you consume, enabling you to lose weight. Trulicity works by delaying stomach emptying, making you feel fuller after eating. It also slows down sugar absorption into the circulation, which helps to maintain blood sugar levels within a healthy range.
          `,
      },
      {
        id: 3,
        question: 'Is Trulicity effective for weight loss? ',
        answer: `Trulicity is an oral medicine that is both safe and effective in helping patients lose weight. Trulicity was found to be less effective in lowering body weight when compared to a placebo. When compared to individuals who took a placebo and engaged in more physical activity, the average weight loss was more than 10 pounds.\n\nIn studies with other diabetic medicines, weight loss was typically around 10.1 pounds (4.5 mg). Individual outcomes may differ. Many people lost weight in one study over the course of six months, and the majority were able to maintain their weight loss for the duration of the study.
          `,
      },
      {
        id: 4,
        question: 'How much does Trulicity cost?',
        answer:
          'Trulicity may be an expensive medication, and costs above $1,000.',
      },
      {
        id: 5,
        question: 'How is Trulicity taken?',
        answer: `Trulicity is a medicine that is taken once a week. It's injected under the skin using a simple pen injector syringe, and it's convenient to use.\n\nTrulicity injections may be given from the comfort of your own home without the assistance of a medical professional or clinician, and they are easy to use.\n\nTrulicity injections are placed directly into the fatty tissue just beneath the skin's surface and should be administered once weekly at the same time each day. You should keep Trulicity in a refrigerator between 36°F and 46°F.\n\nIf your Qilo doctor prescribes Trulicity, he or she will walk you through the process of injecting it into your belly or upper thigh. Someone else can inject the medicine into your upper arm if you are unable to do it yourself.
          `,
      },
      {
        id: 6,
        question: 'Understanding your Trulicity dosage',
        answer: `GLP-1 injectable drugs are provided in a step-up fashion, which means that as you advance through the program, your Qilo healthcare providers will prescribe a greater dose until you reach the complete amount. This reduces the chance of any medication-related negative effects.\n\nTrulicity is available in four distinct dosing strengths. Trulicity is started at 0.75 mg once daily and gradually increased until the full dose of 4.5 mg is reached. It is recommended to adhere to the dose schedule prescribed by your healthcare practitioner.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Trulicity',
        content: `Trulicity side effects are extremely rare, with over 95% of people using these drugs experiencing no negative effects. The most common side effect in those who do is nausea or indigestion, which usually goes away within the first month of taking the medicine.\n\nNausea, diarrhea, vomiting, constipation, abdominal pain, headache, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia (low blood sugar) in type 2 diabetes patients, flatulence, gastroenteritis, and gastroesophageal reflux disease are other common side effects of Trulicity medications. If you are taking another similar drug at the same time, using GLP-1 medications may put you at risk of hypoglycemia or acute renal injury.\n\nIf you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), the GLP-1 class of medicines is not indicated. They are also not advised if you have had pancreatitis.\n\nSpeak with your healthcare provider if you have any concerns about your family history or ability to use a GLP-1 receptor agonist prescription.`,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Trulicity',
        content:
          'Trulicity is not used by people who have any history of serious hypersensitivity to Trulicity or any of its components. Trulicity is also strongly avoided in patients with a personal or family history of medullary thyroid carcinoma or in patients with multiple endocrine neoplasia syndrome type 2, or in patients with a history of pancreatitis.',
      },
    },
    referenceSection: [
      {
        title: 'Trulixity.com',
        description: 'Trulicity and Weight Loss',
        link: 'https://www.trulicity.com/hcp/efficacy-weight/weight-loss-dosing',
      },
      {
        title: 'GoodRx',
        description: 'Trulicity for Weight Loss: What You Should Know',
        link: 'https://www.goodrx.com/conditions/diabetes-type-2/trulicity-victoza-bydureon-which-is-best-medicine-diabetes',
      },
    ],
    alternativeSection: {
      description: `Trulicity is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: BrownPen,
          name: 'Victoza',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  victoza: {
    id: 10,
    bg: '#FFE4E4',
    icon: BrownPen,
    name: 'Victoza',
    page: 'victoza',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Victoza',
      description: `Victoza is a glucagon-like peptide-1 (GLP-1) medication used in combination with a low-calorie diet and increased physical activity for weight loss.\n\nVictoza is effective for weight loss in adult patients who are obese or overweight and have at least one weight-related condition (such as high blood pressure, type 2 diabetes mellitus, or high cholesterol).
        `,
      image: Victoza,
    },
    aboutSection: {
      heading: 'What is Victoza ?',
      description: `Victoza, which contains the active ingredient Liraglutide, is a selective GLP-1 receptor agonist that was initially approved by the FDA as an anti-diabetic medication for the treatment of type 2 diabetes.\n\nVictoza has been shown to decrease hunger and promote fullness in those with high BMIs. Victoza lowers appetite and postpones stomach emptying, resulting in a feeling of fullness which enables weight loss. It also delays the absorption of sugar into the bloodstream, which maintains blood sugar levels.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How does Victoza work?',
        answer: `Victoza is a synthetic peptide that imitates the natural hormone GLP-1 in the body. GLP-1 is a naturally occurring hormone in your body that acts on your brain to manage your appetite and food intake.\n\nGLP-1s stimulate the pancreas to create insulin after meals, which lowers blood sugar levels. They suppress hunger by binding to receptors in the brain that release chemicals which suppress your appetite by stimulating brain locations that regulate food intake.\n\nGLP-1s are naturally occurring compounds with a short half-life in humans, and as a result, even though your body produces GLP-1s, taking them can help you lose weight.\n\nVictoza makes you feel less hungry and eat less food to help you lose weight.
          `,
      },
      {
        id: 2,
        question: 'Is Victoza effective for weight loss?',
        answer: `Victoza is effective for quick and sustainable weight loss. It is usually recommended for those with a BMI of 27 or above and other comorbidities.\n\nIt has been shown in clinical trials to help individuals lose an average of 10% of their initial body weight when combined with a reduced-calorie diet and increased physical activity when compared to placebo participants.
          `,
      },
      {
        id: 3,
        question: 'How much does Victoza cost?',
        answer: 'Victoza may be an expensive medication, costing over $1000.',
      },
      {
        id: 4,
        question: 'How is Victoza administered?',
        answer: `Victoza is available as an injectable solution in a prefilled dosage pen that is injected beneath the skin surface in your stomach, thigh, or upper arm. It is typically administered at the same time once a day, with or without food.\n\nVictoza injections are simple to administer and do not require the assistance of a healthcare practitioner or physician.\n\nVictoza should be stored in the refrigerator at temperatures ranging from 36°F to 46°F, or at room temperature for shorter periods.\n\nAt Qilo, if your doctor prescribes Victoza, he or she will walk you through the injection process into your belly or upper thigh. If you are unable to inject yourself, someone else can assist you.
          `,
      },
      {
        id: 5,
        question: 'Understanding your Victoza dosage',
        answer: `GLP-1 injectable drugs are provided in a step-up fashion, which means that as you advance through the program, your Qilo healthcare providers will prescribe a greater dose until you reach the complete amount. This reduces the chance of any medication-related negative effects.\n\nThe Victoza pen contains 18 mg of Victoza and can deliver 0.6 mg, 1.2 mg, or 1.8 mg dosages. Your doctor will advise you on how much Victoza to take. You begin Victoza at 0.6 mg once daily and gradually raise the dose over one week until you reach the full dose of 1.2 mg. If the 1.2 mg dose does not work for you, your doctor may suggest 1.8 mg.\n\nEnsure you adhere to the prescribed Victoza dose.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Victoza',
        content: `Victoza has a very favorable side effect profile and is generally well-tolerated in adults. Some of the common adverse effects go away within the first month of treatment.\n\nThe most common side effects of Victoza include nausea, diarrhea, constipation, vomiting, injection site reaction, low blood sugar (hypoglycemia), headache, tiredness (fatigue), dizziness, stomach pain, and change in enzyme (lipase) levels in your blood. 
          Taking GLP-1 medications may also put you at serious risk of hypoglycemia or acute kidney injury if you are taking another similar medication at the same time.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Victoza',
        content:
          'Victoza is not recommended if you have a personal or family history of medullary thyroid cancer (MTC) or multiple endocrine neoplasia syndrome type 2 (MEN2). Victoza is also avoided in individuals who have previously had a major adverse reaction to it, including isomaltulose, aspartame, and sucralose, as well as those who have a history of pancreatitis.',
      },
    },
    referenceSection: [
      {
        title: 'novoMEDLINK',
        description: 'Victoza ® —a once-daily GLP-1 RA therapy',
        link: 'https://www.novomedlink.com/diabetes/products/treatments/victoza.html',
      },
      {
        title: 'Drugs.com',
        description: 'Victoza: 7 things you should know',
        link: 'https://www.drugs.com/tips/victoza-patient-tips',
      },
    ],
    alternativeSection: {
      description: `Semaglutide is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: BluePen,
          name: 'Semaglutide',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenPills,
          name: 'Dulaglutide',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  rybelsus: {
    id: 11,
    bg: COLORS.cream,
    icon: GreenBottle,
    name: 'Rybelsus',
    page: 'rybelsus',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Rybelsus',
      description: `Rybelsus, with the active ingredient semaglutide, is a glucagon-like peptide-1 (GLP-1) medicine for the management of type 2 diabetes mellitus in adults. Rybelsus has been used in combination with diet and exercise for weight loss in people who are obese or overweight.\n\nIf your assessment makes you eligible, our doctors at Qilo may prescribe you Rybelsus to help you lose weight.
        `,
      image: Rybelsus,
    },
    aboutSection: {
      heading: 'What is Rybelsus ?',
      description: `Rybelsus is a GLP-1 drug prescribed to individuals who are obese or overweight and have at least one weight-related medical problem, such as high blood pressure, type 2 diabetes, or high cholesterol, for the control of chronic weight.\n\nRybelsus functions by imitating the actions of glucagon-like peptide-1 (GLP-1), a substance that helps control hunger and blood sugar levels. The U.S. Food and Drug Administration (FDA) approved Rybelsus, and it can only be obtained with a prescription.\n\nRybelsus is a powerful selective GLP-1 receptor agonist, and has been demonstrated to lessen appetite and heighten the feeling of fullness in subjects with high BMI.\n\nRybelsus should not be taken by individuals with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2),  in patients with a prior serious hypersensitivity reaction to semaglutide or any of the excipients in Rybelsus, or patients with a history of pancreatitis.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Brand Name and Class',
        answer:
          'The active ingredient in Rybelsus is semaglutide. Semaglutide is a synthetic peptide that mimics GLP-1, a naturally occurring hormone in the body. Semaglutide works by slowing stomach emptying, making you feel full after eating. It also decreases the pace at which sugar is absorbed into the bloodstream, which aids in blood sugar regulation.',
      },
      {
        id: 2,
        question: 'How does Rybesius work?',
        answer: `Rybesius helps you lose weight by reducing your appetite and how much food you eat by acting like GLP-1.\n\nThe body naturally produces GLP-1, which interacts with your brain to control your hunger and calorie intake. After meals, GLP-1s trigger the pancreas to generate insulin to lower blood sugar levels. They also interact with brain receptors to reduce appetite. As a result of the chemicals released by these receptors, you feel less hungry. GLP-1s are organic substances, but they don't linger for very long in the human body. Because of this, taking GLP-1s—even though your body already makes them—can aid in weight loss.
          `,
      },
      {
        id: 3,
        question: 'Is Rybesius effective for weight loss?',
        answer: `Clinical trials have demonstrated that Rybesius (semaglutide) can help adults who are obese or overweight and have at least one weight-related health problem lose weight. In a clinical experiment with more than 1,900 participants, after 68 weeks of treatment, those who took semaglutide lost an average of 15% of their body weight, as opposed to an average of 2.4% in the placebo group.\n\nAfter 30 weeks of treatment, those who got semaglutide dropped an average of 6.5% of their body weight, compared to an average of 1.9% in the placebo group, in another clinical trial with nearly 2,000 participants who had type 2 diabetes and obesity.\n\nWhen paired with a low-calorie diet and increased physical activity, Rybesius is one of the fastest, most effective ways to help you lose weight rapidly and safely, as compared to individuals who took a placebo.
          `,
      },
      {
        id: 4,
        question: 'How much does Rybelsus cost?',
        answer:
          'Rybelsus may be an expensive medication, with an out-of-pocket cost above $1000. ',
      },
      {
        id: 5,
        question: 'How is Rybelus administered?',
        answer: `Rybelus is taken as a once-daily pill first thing in the morning. It should be taken with no more than 4 ml of water on an empty stomach. You should also wait 30 minutes after taking Rybelsus before eating. Rybelsus should be stored at room temperature.\n\nIf you are prescribed Wegovy, we guide you on how to administer the medication.
          `,
      },
      {
        id: 6,
        question: 'Understanding your Rybelsus dosage',
        answer: `Rybelsus is available in three distinct dosage strengths. Rybelsus is started at 3 mg once daily and gradually increased to 7 mg or 14 mg after 30 days. It's recommended to stick to the dose schedule prescribed by your doctor.`,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Rybelsus',
        content: `The side effects of Rybelsus are relatively rare. In individuals who experience side effects, nausea is frequently the most prevalent and usually goes away within the first month of taking the medicine.\n\nWegovy may also cause other adverse effects like flatulence, gastroenteritis, gastroesophageal reflux disease, headaches, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia in type 2 diabetic patients, nausea, vomiting, diarrhea, and constipation.\n\nTaking GLP-1 medications may also put you at serious risk of hypoglycemia or acute kidney injury if you are taking another similar medication at the same time.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Rybelsus',
        content: `If you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), the GLP-1 class of medicines is not indicated. They are also not advised if you have had pancreatitis. Speak with your health care provider if you have any concerns about your family history or ability to use a GLP-1 receptor agonist prescription.`,
      },
    },
    referenceSection: [
      {
        title: 'Rybelsus.com',
        description: 'How RYBELSUS® Works',
        link: 'https://www.rybelsus.com/why-rybelsus/how-rybelsus-works.html',
      },
      {
        title: 'GoodRx',
        description: 'Rybelsus (Oral Semaglutide) for Weight Loss',
        link: 'https://www.goodrx.com/conditions/weight-loss/rybelsus-weight-loss',
      },
    ],
    alternativeSection: {
      description: `Rybelsus is one of the multiple weight-loss drugs which fit into the GLP-1 category. Other GLP-1 medications include:`,
      items: [
        {
          icon: PurplePen,
          name: 'Wegovy',
          bgColor: COLORS.lightPurple,
        },
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: BrownPen,
          name: 'Saxenda',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: BrownPen,
          name: 'Victoza',
          bgColor: COLORS.lightBrown,
        },
        {
          icon: PurplePen,
          name: 'Trulicity',
          bgColor: COLORS.lightPurple,
        },
      ],
    },
  },
  phenetermine: {
    id: 12,
    bg: COLORS.secondaryLightBlue,
    icon: BluePills,
    name: 'Phenetermine',
    page: 'phenetermine',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Phenetermine',
      description: `Phentermine is a commonly prescribed medication for weight loss that has been used for several decades. It is typically prescribed to individuals with a body mass index (BMI) of 30 or higher or those with a BMI of 27 or higher who have obesity-related health conditions such as diabetes, high blood pressure, or high cholesterol.\n\nIt is an appetite suppressant that is used for short-term weight loss management in adults with obesity or overweight. It works by stimulating the release of certain chemicals in the brain that reduce appetite.
        `,
      image: Phenetermine,
    },
    aboutSection: {
      heading: 'What is Phenetermine ?',
      description: `Phentermine is a longstanding appetite suppressant and has been employed for decades in aiding weight loss. Initially formulated as an anti-depressant and dispensed under the brand name Adipex-P, its primary use evolved as it exhibited notable efficacy in weight management. Functioning as a potent appetite suppressant, phentermine, when coupled with a reduced-calorie diet, facilitates weight loss at a rate of approximately five to ten pounds per month.\n\nDespite its effectiveness, phentermine is categorized as a Schedule IV controlled substance by the FDA, reflecting its potential for abuse and the potential for addiction with prolonged use. It's crucial to acknowledge that this classification represents the lowest risk level for abuse. Safeguarding this medication is imperative, necessitating storage in a secure location out of the reach of children.
        .`,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How Does Phentermine Work?',
        answer: `Phentermine works primarily by suppressing appetite. It stimulates the release of certain neurotransmitters in the brain, which helps to decrease hunger and control cravings.\n\nAdditionally, phentermine increases heart rate and blood pressure, leading to increased energy expenditure and metabolic rate. This combination of appetite suppression and increased energy expenditure can help individuals consume fewer calories and achieve weight loss.
          `,
      },
      {
        id: 2,
        question: 'Is Phentermine Safe and Effective for Weight Loss?',
        answer: `Phentermine has been proven to be effective in promoting weight loss when used as part of a comprehensive weight management plan. Clinical studies have shown that it can result in significant weight loss, improved metabolic health markers, and increased insulin sensitivity.\n\nHowever, it is important to note that Phentermine should be used under the guidance of a doctor and is not a standalone solution. Safety considerations, potential side effects, and individual suitability should be taken into account.
          `,
      },
      {
        id: 3,
        question: 'Is Semaglutide effective for weight loss?',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 4,
        question: 'How Much Does Phentermine Cost?',
        answer: `The cost of Phentermine without insurance varies, typically ranging from $10 to $20 for a month's supply. Generic versions are usually more cost-effective than brand-name medications. Pharmacy location and choice influence the cost, making it essential to explore different options for the most economical solution.`,
      },
      {
        id: 5,
        question: 'How is Phentermine Taken?',
        answer: `Phentermine is administered orally, available in two common brands: Adipex-P (37.5 mg) and Lomaira (8 mg). Additionally, a generic version is available in 15mg or 30mg forms. The correct dosage is determined by healthcare providers, starting at 15mg per day, taken three times with food. Dosages may be adjusted to 30mg per day after several weeks, or higher dosages (like 37.5 mg) once per day in the morning or 1–2 hours after breakfast.
          `,
      },
      {
        id: 6,
        question: 'Understanding Your Dosage',
        answer: `Determining the appropriate dosage for Phentermine involves a thorough review of individual medical history and current health conditions by your doctor.\n\nThe recommended starting dose is typically 15mg per day, three times with food. Adjustments may be made based on progress and tolerability, with higher dosages considered for some individuals.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Phentermine',
        content:
          'Phentermine, while effective, is associated with potential side effects. These include heart-related issues, seizures, anxiety, and insomnia. Common side effects such as dry mouth, dizziness, and constipation may also be experienced.',
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Phentermine',
        content: `Pregnant or breastfeeding individuals, those with specific health conditions (such as glaucoma, overactive thyroid, severe heart problems, uncontrolled high blood pressure, or advanced coronary artery disease), those with a history of drug abuse, and those who have used an MAO inhibitor in the past 14 days are contraindicated.\n\nAdditionally, Phentermine should not be used with alcohol.
          `,
      },
    },
    referenceSection: [
      {
        title: 'Drugs.com',
        description: 'Phentermine: 7 things you should know',
        link: 'https://www.drugs.com/tips/phentermine-patient-tips',
      },
      {
        title: 'Kaiser Permanente Washington Health Research Institute',
        description:
          'Phentermine for weight loss seems safe, effective longer-term',
        link: 'https://www.kpwashingtonresearch.org/news-and-events/blog/2019/mar-2019/Using_phentermine_for_weight_loss_more_than_3_months_seems_safe_and_effective',
      },
    ],
    alternativeSection: {
      description: `Semaglutide is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: BlueSyringe,
          name: 'Qysmia',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenPills,
          name: 'Phenetermine-Topiramate',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  contrave: {
    id: 13,
    bg: COLORS.secondaryLightBlue,
    icon: BlueBottle,
    name: 'Contrave',
    page: 'contrave',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Contrave',
      description:
        'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.\n\nIf your assessment makes you eligible, we may prescribe you a form of semaglutide to help you lose weight.',
      image: Contrave,
    },
    aboutSection: {
      heading: 'What is Semaglutide ?',
      description:
        'Semaglutide is a GLP-1 drug prescribed to individuals who are obese or overweight and have at least one weight-related medical problem, such as high blood pressure, type 2 diabetes, or high cholesterol, for the control of chronic weight.\n\nSemaglutide functions by imitating the actions of glucagon-like peptide-1 (GLP-1), a substance that helps control hunger and blood sugar levels. The U.S. Food and Drug Administration (FDA) approved Semaglutide for weight loss, and it can only be obtained with a prescription.\n\nSemaglutide is a powerful selective GLP-1 receptor agonist and has been demonstrated to lessen appetite and heighten the feeling of fullness in subjects with a high BMI of over 27, with comorbidities such as hypertension or dyslipidemia, or individuals who have obesity (BMI of over 30).',
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'Brand Name and Class',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 2,
        question: 'How does semaglutide work?',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 3,
        question: 'Is Semaglutide effective for weight loss?',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 4,
        question: 'How much does semaglutide cost?',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 5,
        question: 'How is semaglutide administered?',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
      {
        id: 6,
        question: 'Understanding your SEMAGLUTIDE dosage',
        answer:
          'Semaglutide is a glucagon-like peptide-1 (GLP-1) drug used in combination with a reduced-calorie diet and increased physical activity to manage obesity or overweight in adults with that have at least one weight-related condition. It has been found to assist people to lose up to an average of 15% of their initial weight.',
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Semaglutide',
        content:
          'Almost 95% of people who take GLP-1 drugs do not have negative effects, making side effects relatively rare. In individuals who experience side effects, nausea is frequently the most prevalent and usually goes away within the first month of taking the medicine.\n\nWegovy may also cause other adverse effects like flatulence, gastroenteritis, gastroesophageal reflux disease, headaches, fatigue, dyspepsia, dizziness, abdominal distention, eructation, hypoglycemia in type 2 diabetic patients, nausea, vomiting, diarrhea, and constipation.',
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Semaglutide',
        content:
          'If you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia syndrome type 2 (MEN2), the GLP-1 class of medicines is not indicated. They are also not recommended if you have had pancreatitis. Speak with your health care provider if you have any concerns about your family history or ability to use a GLP-1 receptor agonist prescription.',
      },
    },
    referenceSection: [
      {
        title: 'Contrave.com',
        description: 'Prescription Weight Loss Pills | CONTRAVE®',
        link: 'https://contrave.com/',
      },
      {
        title: 'GoodRx',
        description: '7 Tips on How to Take Contrave Properly',
        link: 'https://www.goodrx.com/contrave/tips-for-taking-contrave',
      },
    ],
    alternativeSection: {
      description: `Semaglutide is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  'naltrexone-bupropion': {
    id: 14,
    bg: COLORS.lightPurple,
    icon: PurplePills,
    name: 'Naltrexone-bupropion',
    page: 'naltrexone-bupropion',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Naltrexone-bupropion',
      description: `Naltrexone-bupropion is an FDA-approved medication prescribed for weight loss. It is a combination of two drugs, naltrexone and bupropion.\n\nNaltrexone is an opioid receptor antagonist and is commonly used to treat opioid addiction and alcohol dependence. Bupropion is an antidepressant that also aids in smoking cessation.\n\nThe combination of these two medications in Naltrexone-Bupropion helps target different aspects of weight management, making it an effective option for weight loss.
        `,
      image: NaltrexoneBupropion,
    },
    aboutSection: {
      heading: 'What is Semaglutide ?',
      description: `Naltrexone-bupropion, marketed under the brand name Contrave, is a prescription medication used to aid in weight loss. It is an approved medication by the United States Food and Drug Administration (FDA) to assist with weight loss in individuals with a body mass index (BMI) of 30 or greater, or those with a BMI of 27 or greater with at least one obesity-related condition such as diabetes, high blood pressure, or high cholesterol.\n\nNaltrexone is an opioid antagonist that works to reduce food cravings. Bupropion, on the other hand, is an antidepressant that helps control appetite and increase energy expenditure.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How Does the Naltrexone-Bupropion Work?',
        answer: `Naltrexone and bupropion have different mechanisms of action that contribute to weight loss. Naltrexone blocks opioid receptors in the hypothalamus, reducing the pleasurable feelings and cravings associated with food. Bupropion, on the other hand, enhances the activity of certain neurotransmitters in the brain, including dopamine and norepinephrine, which suppress appetite and increase energy expenditure.
          `,
      },
      {
        id: 2,
        question: 'Is Naltrexone-Bupropion Safe and Effective for Weight Loss?',
        answer: `Naltrexone-bupropion has been proven in clinical trials to be effective in aiding weight loss. In a 56-week study, individuals who used naltrexone-bupropion along with lifestyle modifications experienced an average weight loss of 8.1 kilograms (about 9% of their initial body weight) compared to those who took a placebo.\n\nThe medication benefits both weight loss and maintaining weight loss when taken as part of a comprehensive weight management plan that includes lifestyle modifications and behavioral therapy. However, it is important to note that individual results may vary, and weight loss cannot be guaranteed.`,
      },
      {
        id: 3,
        question: 'How Much Does Naltrexone-Bupropion Cost?',
        answer: `The cost of naltrexone-bupropion can vary depending on factors such as insurance coverage and whether you choose the brand name medication or generic options. The brand name Contrave can be expensive, with an estimated cost of up to $300 for a 30-day supply. Generic versions of naltrexone-bupropion are more affordable, typically costing around $40 for a 30-day supply.
          `,
      },
      {
        id: 4,
        question: 'How is Naltrexone-bupropion Taken?',
        answer: `Naltrexone-bupropion is an oral medication that is taken twice daily, with or without food. The initial dose is typically low and gradually increased over time to reach the maintenance dose.\n\nIt is important to follow the designated dosage and not exceed the recommended dosage. Also, one should avoid consuming high-fat meals when taking this medication, as it can reduce its effectiveness.
          `,
      },
      {
        id: 5,
        question: 'How is semaglutide administered?',
        answer: `The dose of naltrexone-bupropion is gradually increased by your doctor, starting at one pill per day for the first week and increasing to two pills twice daily from the second week onward.\n\nIt is important to not exceed four pills per day and to take the medication at roughly the same time every day.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Naltrexone-bupropion',
        content: `Like any medication, naltrexone-bupropion can cause side effects in some individuals. Common side effects may include nausea, constipation, headache, dizziness, insomnia, dry mouth, increased heart rate, or elevated blood pressure. However, some side effects subside as the body adapts to the medication, and it is vital to continue use unless advised by a doctor.\n\nSerious side effects are rare but can occur. Seek immediate medical attention if you experience severe allergic reactions, unusual bleeding or bruising, confusion, hallucinations, seizures, or severe headache.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Naltrexone-bupropion',
        content: `Naltrexone-bupropion is not suitable for individuals with a history of seizures or epilepsy, uncontrolled high blood pressure, or a diagnosis of anorexia or bulimia.\n\nIt is important to inform your doctor of all your health conditions and medications you are currently taking to determine if naltrexone-bupropion is suitable for you.
          `,
      },
    },
    referenceSection: [
      {
        title: 'The National Institute for Health and Care Excellence',
        description: 'Naltrexone–bupropion for managing overweight and obesity',
        link: 'https://www.nice.org.uk/guidance/ta494/resources/naltrexonebupropion-for-managing-overweight-and-obesity-pdf-82605086955205',
      },
      {
        title: 'Cleveland Clinic',
        description: 'Naltrexone & Bupropion: Weight Loss Treatment',
        link: 'https://my.clevelandclinic.org/health/drugs/19686-bupropion-naltrexone-extended-release-tablets',
      },
    ],
    alternativeSection: {
      description: `Individuals who cannot use naltrexone-bupropion due to contraindications or have not achieved satisfactory weight loss may consider alternative weight-loss medications such as:`,
      items: [
        {
          icon: BlueSyringe,
          name: 'Phentermine',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenPills,
          name: 'GLP-1 medications',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
  'phenetermine-topiramate': {
    id: 15,
    bg: COLORS.lightBrown,
    icon: BrownBottle,
    name: 'Phenetermine-topiramate',
    page: 'phenetermine-topiramate',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Phenetermine-topiramate',
      description: `Phentermine-topiramate is a combination medication that includes phentermine, an appetite suppressant, and topiramate, which can help reduce appetite.\n\nIt is used for weight management in adults with obesity or overweight who have weight-related medical problems.\n\nPhentermine-topiramate is taken along with a reduced-calorie diet and increased physical activity to promote weight loss.
        `,
      image: PhenetermineTopiramate,
    },
    aboutSection: {
      heading: 'What is Phentermine-Topiramate ?',
      description:
        'Phentermine-Topiramate, sold under the brand name Qsymia, is an FDA-approved medication used for weight management. It is a combination of two active ingredients: phentermine, an appetite suppressant, and topiramate, an anticonvulsant drug that also has weight loss effects.',
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How Does the Phentermine-Topiramate Work?',
        answer: `Phentermine-Topiramate works through multiple mechanisms to aid weight loss.\n\nPhentermine primarily acts by suppressing appetite through its effect on the central nervous system, reducing feelings of hunger. It stimulates the release of norepinephrine, a neurotransmitter that helps control appetite.\n\nTopiramate has various effects on neurotransmitters and brain activity. It enhances the activity of GABA, an inhibitory neurotransmitter that can reduce overeating, and it modulates the activity of glutamate, a neurotransmitter involved in appetite regulation. The combination of these effects helps to decrease food intake and increase feelings of fullness
          `,
      },
      {
        id: 2,
        question:
          'Is Phentermine-Topiramate Safe and Effective for Weight Loss?',
        answer: `Phentermine-topiramate is generally safe when used appropriately. However, close monitoring is crucial. Patients should report any adverse effects promptly.\n\nIn terms of effectiveness, clinical trials demonstrate significant weight loss when combined with lifestyle modifications. Patients typically lose around 5-10% of their initial body weight within the first year. Individual responses vary, but consistent adherence yields better outcomes. Our healthcare team emphasizes the importance of long-term commitment to achieve sustained results.
          `,
      },
      {
        id: 3,
        question: 'How Much Does Phentermine-Topiramate Cost?',
        answer:
          'SThe cost of Phentermine-Topiramate can vary depending on factors such as insurance coverage, dosage strength, and quantity prescribed. Brand name Qsymia can be relatively expensive, with an estimated cost of up to $200 for a 30-day supply. However, generic versions of phentermine and topiramate may be more affordable, generally ranging from $30 to $60 for a 30-day supply. ',
      },
      {
        id: 4,
        question: 'How is Phentermine-Topiramate Taken?',
        answer: `Phentermine-topiramate is typically taken orally in the form of a capsule. The medication should be taken once daily in the morning, with or without food. It is recommended to take the medication at the same time each day to ensure consistent absorption in the body.\n\nPhentermine-topiramate should not be split, crushed, or chewed, and should be swallowed whole with a full glass of water. It is important to follow the prescribed dosage and administration instructions provided by your healthcare provider.
          `,
      },
      {
        id: 5,
        question: 'Understanding Your Phentermine-Topiramate Dosage',
        answer: `The starting dose of phentermine-topiramate is typically 3.75mg/23mg taken once daily. Your doctor may gradually increase the dosage over time, up to a maximum of 15mg/92mg taken once daily, based on individual response and tolerability.\n\nIt is important to follow your prescribed dosage and not to take more than the recommended amount. If you miss a dose, take it as soon as you remember, unless it is close to your next scheduled dose. Do not double up your dose to make up for a missed dose.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Semaglutide',
        content: `Common side effects of phentermine-topiramate may include dry mouth, constipation, tingling in the hands or feet, changes in taste, difficulty sleeping, dizziness, and headache. These side effects are generally mild and may lessen over time.\n\nHowever, if they persist or worsen, it is important to consult with your healthcare provider. Serious side effects may include signs of an allergic reaction, suicidal thoughts or behaviors, changes in mood or behavior, eye problems, kidney problems, and metabolic acidosis (a serious condition in which the body produces too much acid). If you experience any of these symptoms, contact your doctor immediately.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Semaglutide',
        content: `Phentermine-topiramate is contraindicated in individuals with a history of kidney stones, glaucoma, and hyperthyroidism. It is also contraindicated in women who are pregnant or planning to become pregnant, and in individuals who have recently taken MAO inhibitors.\n\nIt is important to inform your doctor of your complete medical history, including any known allergies or previous medical conditions, before starting phentermine-topiramate. Moreover, this medication carries a risk of birth defects in pregnant women, and it is important to use effective birth control while taking this medication and for at least 1 month after stopping it
          `,
      },
    },
    referenceSection: [
      {
        title: 'AJMC',
        description:
          'Trial Finds Semaglutide With Lifestyle Intervention Reduces Body Weight by Nearly 15%',
        link: 'https://www.drugs.com/mtm/phentermine-and-topiramate.html',
      },
      {
        title: 'Taylor & Francis Online',
        description: 'Phentermine and topiramate for the management of obesity',
        link: 'https://www.tandfonline.com/doi/full/10.2147/DDDT.S31443',
      },
    ],
    alternativeSection: {
      description: `If Phentermine-Topiramate is not suitable or effective for an individual, there are alternative medications available for weight management. Some alternatives include:`,
      items: [
        {
          icon: PurplePills,
          name: 'Naltrexone-bupropion',
          bgColor: COLORS.lightPurple,
        },
      ],
    },
  },
  metformin: {
    id: 16,
    bg: COLORS.cream,
    icon: GreenPills,
    name: 'Metformin',
    page: 'metformin',
    heroSection: {
      color: COLORS.lightPurple,
      heading: 'Lose Weight With Metformin',
      description: `Metformin, also known by its brand names Glucophage, Riomet, and Fortamet, is an oral medication primarily used to treat type 2 diabetes.\n\nIn addition to its glucose-lowering effects, Metformin has shown promise in helping with weight loss in individuals with type 2 diabetes or prediabetes.
        `,
      image: Metformin,
    },
    aboutSection: {
      heading: 'What is Metformin ?',
      description: `Metformin belongs to a class of medications called biguanides. It works by reducing the amount of glucose (sugar) produced by the liver and increasing insulin sensitivity in the body. This helps to lower blood sugar levels and regulate glucose metabolism.\n\nMetformin is available under various brand names, including Glumetza, Riomet, and Fortamet. It comes in both immediate-release and extended-release tablet forms.
        `,
    },
    frequentQuestions: [
      {
        id: 1,
        question: 'How does Metformin work?',
        answer: `Metformin primarily works by inhibiting the production of glucose in the liver and enhancing the body's sensitivity to insulin. It helps your body utilize glucose more efficiently, thus preventing excessive glucose buildup in the bloodstream. By reducing blood sugar levels and optimizing insulin function, Metformin can indirectly contribute to weight loss.
          `,
      },
      {
        id: 2,
        question: 'Is Metformin safe and effective for weight loss?',
        answer: `Metformin has shown promise in aiding weight loss, especially in individuals with obesity who have Type II Diabetes Mellitus. A meta-analysis of several studies on metformin use in overweight or obese individuals with diabetes found that the medication was associated with a modest but statistically significant weight loss compared to placebo. The average weight loss observed in these studies ranged from 1.1 kg to 3.6 kg over a duration of 3 to 12 months.\n\nIt is important to note that individual results may vary, and metformin should not be relied upon as a standalone weight-loss solution. Weight loss with metformin is typically mild to moderate, and it works best when combined with a healthy diet, regular exercise, and lifestyle modifications. Metformin should be used as part of an overall weight loss plan prescribed and supervised by a doctor.
          `,
      },
      {
        id: 3,
        question: 'How much does Metformin cost?',
        answer:
          'The cost for a one-month supply of metformin can range from $10 to $240, depending on these factors.',
      },
      {
        id: 4,
        question: 'How is Metformin taken?',
        answer: `Metformin is typically taken orally, usually with meals to reduce gastrointestinal side effects. The dosage and frequency of Metformin will be determined by your healthcare professional based on various factors, including your blood sugar levels, response to the medication, and any other existing medical conditions.\n\nIt is essential to follow the prescribed instructions provided by your healthcare professional and not adjust the dosage without medical guidance.
          `,
      },
      {
        id: 5,
        question: 'Understanding your Metformin dosage',
        answer: `Metformin is available in various dosage strengths, typically ranging from 500mg to 1000mg tablets. Your healthcare professional will determine the appropriate starting dose and may gradually increase it if necessary. The aim is to find the minimum effective dose while minimizing side effects.\n\nDosage may also be adjusted based on individual factors such as renal function (kidney health). It's crucial to communicate any changes in your health status or medication regimen to your doctor for proper monitoring and dosage adjustments if needed.
          `,
      },
    ],
    warningSection: {
      SIDE_EFFECTS: {
        label: 'Side effects',
        heading: 'Side Effects of Metformin',
        content: `While Metformin is generally well-tolerated, some individuals may experience side effects. These can include gastrointestinal symptoms such as nausea, diarrhea, and abdominal discomfort. These side effects are usually temporary and diminish as the body adjusts to the medication. It's important to discuss any persistent or severe side effects with your healthcare professional.\n\nAdditionally, although rare, Metformin can cause a serious but very uncommon side effect called lactic acidosis. This is more likely to occur in individuals with impaired kidney function or those taking higher doses of the medication. It's crucial to inform your doctor immediately if you experience symptoms such as weakness, fatigue, muscle pain, trouble breathing, or a slow or irregular heartbeat.
          `,
      },
      CONTRAINDICATIONS: {
        label: 'Contraindications',
        heading: 'Contraindications of Metformin',
        content: `Metformin is contraindicated in certain individuals. It is not recommended for individuals with severe kidney disease, liver disease, heart failure, or known allergies to Metformin. Additionally, individuals undergoing certain medical procedures involving contrast dye or surgery should temporarily withhold Metformin. It's essential to discuss your medical history and any existing conditions with your healthcare professional to ensure the safe and appropriate use of Metformin.\n\nFurthermore, be sure to inform your healthcare professional about all other medications and supplements you are taking, as they may interact with Metformin or affect its effectiveness.
          `,
      },
    },
    referenceSection: [
      {
        title: 'Healthline',
        description: 'Metformin and Weight Loss: What You Should Know',
        link: 'https://www.healthline.com/health/diabetes/metformin-weight-loss',
      },
      {
        title: 'Primary Care Diabetes Society',
        description:
          'Metformin beats lifestyle changes for long-term weight loss',
        link: 'https://www.pcdsociety.org/news/details/metformin-beats-lifestyle-changes-for-longterm-weight-loss',
      },
    ],
    alternativeSection: {
      description: `Semaglutide is one of the multiple GLP-1 weight-loss classes of drugs. Other GLP-1 drug classes include:`,
      items: [
        {
          icon: BluePen,
          name: 'Ozempic',
          bgColor: COLORS.secondaryLightBlue,
        },
        {
          icon: GreenBottle,
          name: 'Rybelsus',
          bgColor: COLORS.cream,
        },
      ],
    },
  },
};
