"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
let articles = [{
        title: "Empagliflozin and Progression of Kidney Disease in Type 2 Diabetes",
        text: "Conclusions: In patients with type 2 diabetes at high cardiovascular risk, empagliflozin was associated with slower progression of kidney disease and lower rates of clinically relevant renal events than was placebo when added to standard care.",
        year: 2022,
        id: 1,
    },
    {
        title: "Cardiac and Kidney Benefits of Empagliflozin in Heart Failure Across the Spectrum of Kidney Function: Insights From EMPEROR-Reduced.",
        text: "We aim to study the effect of empagliflozin on cardiovascular and kidney outcomes across the spectrum of kidney function. ...Empagliflozin was well tolerated in CKD patients. CONCLUSIONS: In EMPEROR-Reduced, empagliflozin had a beneficial effect on the key ef …",
        year: 2022,
        id: 2,
    },
    {
        title: "Efficacy and safety of nintedanib in idiopathic pulmonary fibrosis",
        text: "In INPULSIS-1, there was no significant difference between the nintedanib and placebo groups in the time to the first acute exacerbation (hazard ratio with nintedanib, 1.15; 95% CI, 0.54 to 2.42; P=0.67); in INPULSIS-2, there was a significant benefit with ninted …",
        year: 2020,
        id: 3,
    },
    {
        title: "Nintedanib in Progressive Fibrosing Interstitial Lung Diseases.",
        text: "Although the efficacy of nintedanib has been shown in idiopathic pulmonary fibrosis, its efficacy across a broad range of fibrosing lung diseases is unknown. ...Diarrhea was the most common adverse event, as reported in 66.9% and 23.9% of patients treated with nintedani …",
        year: 2022,
        id: 4,
    },
    {
        title: "Nintedanib for Systemic Sclerosis-Associated Interstitial Lung Disease.",
        text: "Diarrhea, the most common adverse event, was reported in 75.7% of the patients in the nintedanib group and in 31.6% of those in the placebo group. CONCLUSIONS: Among patients with ILD associated with systemic sclerosis, the annual rate of decline in FVC was lower with n …",
        year: 2021,
        id: 5,
    },
    {
        title: "Tiotropium in Early-Stage Chronic Obstructive Pulmonary Disease",
        text: "RESULTS: Of 841 patients who underwent randomization, 388 patients in the tiotropium group and 383 in the placebo group were included in the full analysis set. ...In contrast, the annual decline in the FEV(1) after bronchodilator use was significantly less in the tiotro …",
        year: 2020,
        id: 6,
    },
    {
        title: "Tiotropium bromide.",
        text: "Fairly recently, a long-acting, once-daily anticholinergic medication, tiotropium bromide, has been developed which may improve symptom management in COPD patients. ",
        year: 2019,
        id: 7,
    },
    {
        title: "Effect of Endovascular Treatment Alone vs Intravenous Alteplase Plus Endovascular Treatment on Functional Independence in Patients With Acute Ischemic Stroke: The DEVT Randomized Clinical Trial.",
        text: "OBJECTIVE: To investigate whether endovascular thrombectomy alone is noninferior to intravenous alteplase followed by endovascular thrombectomy for achieving functional independence at 90 days among patients with large vessel occlusion stroke. ...No significant betw …",
        year: 2022,
        id: 8,
    },
    {
        title: "A randomized trial of tenecteplase versus alteplase for acute ischemic stroke.",
        text: "BACKGROUND: Intravenous alteplase is the only approved treatment for acute ischemic stroke. Tenecteplase, a genetically engineered mutant tissue plasminogen activator, is an alternative thrombolytic agent. ...",
        year: 2020,
        id: 9,
    },
    {
        title: "Idarucizumab for Dabigatran Reversal - Full Cohort Analysis",
        text: "BACKGROUND: Idarucizumab, a monoclonal antibody fragment, was developed to reverse the anticoagulant effect of dabigatran. METHODS: We performed a multicenter, prospective, open-label study to determine whether 5 g of intravenous idarucizumab would be able to reverse the a",
        year: 2019,
        id: 10,
    },
    {
        title: "Dabigatran Etexilate: A Review in Nonvalvular Atrial Fibrillation.",
        text: "Dabigatran etexilate is a prodrug of dabigatran, a direct inhibitor of thrombin. ...Dabigatran etexilate was also effective and generally well tolerated across various patient subgroups. ...",
        year: 2019,
        id: 11,
    },
    {
        title: "Randomized Trial of Empagliflozin in Nondiabetic Patients With Heart Failure and Reduced Ejection Fraction",
        text: "Secondary endpoints included changes in LV mass, LV ejection fraction, peak oxygen consumption in the cardiopulmonary exercise test, 6-min walk test, and quality of life. RESULTS: Empagliflozin was associated with a significant reduction of LV end-diastolic volume",
        year: 2021,
        id: 12,
    },
];
app.get('/googleSearch', (req, res) => {
    const search = req.query.search;
    const filtered = filter(search);
    res.send(filtered);
});
app.post('/addArticle', (req, res) => {
    const addTitle = req.body.title;
    const addText = req.body.text;
    const articlesAdd = AddArticle(addTitle, addText);
    res.send(articlesAdd);
});
function AddArticle(addTitle, addText) {
    let idRandom = Math.random().toString(36);
    articles.push({ title: addTitle, text: addText, year: 2022, id: +idRandom });
    return articles;
}
app.post('/deleteArticle', (req, res) => {
    const idItem = req.body.array;
    idItem.forEach(element => {
        deleteItem(element);
    });
    res.send(articles);
});
function filter(search) {
    if (search) {
        const searchTerm = new RegExp(search, 'i');
        return articles.filter(article => searchTerm.test(article.title) || searchTerm.test(article.text));
    }
}
;
function deleteItem(idItem) {
    articles = articles.filter((article) => article.id != idItem);
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
