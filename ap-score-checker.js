

//blank template 
/*[
    ["AP Art History","","",""],
    ["AP Biology","","",""],
    ["AP Calculus AB","","",""],
    ["AP Calculus BC","","",""],
    ["AP Capstone Research","","",""],
    ["AP Capstone Seminar","","",""],
    ["AP Chemistry","","",""],
    ["AP Chinese Language and Culture","","",""],
    ["AP Computer Science A","","",""],
    ["AP Computer Science AB","","",""],
    ["AP Computer Science Principles","","",""],
    ["AP Economics: Macro","","",""],
    ["AP Economics: Micro","","",""],
    ["AP English Language","","",""],
    ["AP English Literature","","",""],
    ["AP Environmental Science","","",""],
    ["AP European History","","",""],
    ["AP French Language and Culture","","",""],
    ["AP French Literature","","",""],
    ["AP German Language and Culture","","",""],
    ["AP Government and Politics: Comparative","","",""],
    ["AP Government and Politics: United States","","",""],
    ["AP Human Geography","","",""],
    ["AP Italian Language and Culture","","",""],
    ["AP Japanese Language and Culture","","",""],
    ["AP Latin Literature","","",""],
    ["AP Latin","","",""],
    ["AP Music Theory","","",""],
    ["AP Physics 1","","",""],
    ["AP Physics 2","","",""],
    ["AP Physics B","","",""],
    ["AP Physics C: Electricity and Magnetism","","",""],
    ["Ap Physics C: Mechanics","","",""],
    ["AP Psychcology","","",""],
    ["AP Spanish Language and Culture","","",""],
    ["AP Spanish Literature","","",""],
    ["AP Statistics","","",""],
    ["AP Studio Art: Drawing","","",""],
    ["AP Studio Art: 2-D Design","","",""],
    ["AP Studio Art: 3-D Design","","",""],
    ["AP United States History","","",""],
    ["AP World History","","",""]    
]
*/


//Data lists for each college. CollegeScores represents what appears for the titles on the website for each course. CollegeCourses represents the specific names of these courses which is used in bold in the course descriptions box. CollegeCourse Descriptions is the other text that appears in the course descriptions box. The or symbol "|", is used in the code to signify TWO or more courses that need to appear in the course descriptions. 
let UFScores = 
    [
        ["AP Art History","ARH 2000","ARH 2000/ARH 2050","ARH 2000/ARH 2050"],
        ["AP Biology","BSC 2005/BSC 2005L","BSC 2010/BSC 2010L","BSC 2010/BSC 2010L and BSC 2011/BSC 2011L"],
        ["AP Calculus AB","MAC 2311","MAC 2311","MAC 2311"],
        ["AP Calculus BC","MAC 2311","MAC 2311/MAC 2312","MAC 2311/MAC 2312"],
        ["AP Capstone Research","IDS L000","IDS L000","IDS L000"],
        ["AP Capstone Seminar","IDS L000","IDS L000","IDS L000"],
        ["AP Chemistry","CHM 1020/CHM L000","CHM 2045/CHM 2045L","CHM 2045/CHM 2045L/CHM 2046/CHM 2046L"],
        ["AP Chinese Language and Culture","CHI 2230","CHI 2230/CHI 2231","CHI 2230/CHI 2231"],
        ["AP Computer Science A","CGS L000","CGS L000","CGS L000"],
        ["AP Computer Science AB","N/A","N/A","N/A"],
        ["AP Computer Science Principles","CIS L000","CIS L000","CIS L000"],
        ["AP Economics: Macro","ECO 2013","ECO 2013","ECO 2013"],
        ["AP Economics: Micro","ECO 2023","ECO 2023","ECO 2023"],
        ["AP English Language","ENC 1101","ENC 1101/ENC 1102","ENC 1101/ENC 1102"],
        ["AP English Literature","AML 2070","AML 2070/LIT 2120","AML 2070/LIT 2120"],
        ["AP Environmental Science","ISC L000","ISC L000","ISC L000"],
        ["AP European History","EUH L000","EUH L000/EUH 2001","EUH L000/EUH 2001"],
        ["AP French Language and Culture","FRE 2220","FRE 2220/FRE 2221","FRE 2220/FRE 2221"],
        ["AP French Literature","N/A","N/A","N/A"],
        ["AP German Language and Culture","GER 2200","GER 2200/GER 2240","GER 2200/GER 2240"],
        ["AP Government and Politics: Comparative","CPO 2001","CPO 2001","CPO 2001"],
        ["AP Government and Politics: United States","POS 2041","POS 2041","POS 2041"],
        ["AP Human Geography","GEO 2420","GEO 2420","GEO 2420"],
        ["AP Italian Language and Culture","ITA 2220","ITA 2220/ITA 2221","ITA 2220/ITA 2221"],
        ["AP Japanese Language and Culture","JPN 2230","JPN 2230/JPN 2231","JPN 2230/JPN 2231"],
        ["AP Latin Literature","N/A","N/A","N/A"],
        ["AP Latin","LNW 2321","LNW 2321","LNW 2321"],
        ["AP Music Theory","MUT 1001/MUT 1121","MUT 1001/MUT 1121","MUT 1121"],
        ["AP Physics 1","PHY 2053/PHY 2053L","PHY 2053/PHY 2053L","PHY 2053/PHY 2053L"],
        ["AP Physics 2","PHY 2054/PHY 2054L","PHY 2054/PHY 2054L","PHY 2054/PHY 2054L"],
        ["AP Physics B","N/A","N/A","N/A"],
        ["AP Physics C: Electricity and Magnetism","PHY 2054/PHY 2054L","PHY 2054/PHY 2054L","PHY 2054/PHY 2054L"],
        ["Ap Physics C: Mechanics","PHY 2053/PHY 2053L","PHY 2048/PHY 2048L","PHY 2048/PHY 2048L"],
        ["AP Psychcology","PSY 2012","PSY 2012","PSY 2012"],
        ["AP Spanish Language and Culture","SPN 2200","SPN 2200/SPN 2201","SPN 2200/SPN 2201"],
        ["AP Spanish Literature","SPW L000","SPW L000","SPW 3100/SPW L000"],
        ["AP Statistics","STA 2023","STA 2023","STA 2023"],
        ["AP Studio Art: Drawing","ART 2305C","ART 2305C","ART 2305C"],
        ["AP Studio Art: 2-D Design","ART 1201C","ART 1201C","ART 1201C"],
        ["AP Studio Art: 3-D Design","ART 1203C","ART 1203C","ART 1203C"],
        ["AP United States History","AMH L000","AMH 2010/AMH 2020","AMH 2010/AMH 2020"],
        ["AP World History","WOH L000","WOH L000","WOH L000"]    
    ];


let UFCourses = 
    [
        ["AP Art History","ARH 2000 Art Appreciation: American Diversity and Global Arts","ARH 2000 Art Appreciation: American Diversity and Global Arts | ARH 2050 Introduction to the Principles and History of Art 1","ARH 2000 Art Appreciation: American Diversity and Global Arts | ARH 2050 Introduction to the Principles and History of Art 1"],
        ["AP Biology","BSC 2005 Biological Sciences | BSC 2005L Laboratory in Biological Sciences","BSC 2010 Integrated Principles of Biology 1 | BSC 2010L Integrated Principles of Biology Laboratory 1","BSC 2010 Integrated Principles of Biology 1 | BSC 2010L Integrated Principles of Biology Laboratory 1 | BSC 2011 Integrated Principles of Biology 2 | BSC 2011L Integrated Principles of Biology Laboratory 2"],
        ["AP Calculus AB","MAC 2311 Analytic Geometry and Calculus 1","MAC 2311 Analytic Geometry and Calculus 1","MAC 2311 Analytic Geometry and Calculus 1"],
        ["AP Calculus BC","MAC 2311 Analytic Geometry and Calculus 1","MAC 2311 Analytic Geometry and Calculus 1 | MAC 2312 Analytic Geometry and Calculus 2","MAC 2311 Analytic Geometry and Calculus 1 | MAC 2312 Analytic Geometry and Calculus 2"],
        ["AP Capstone Research","IDS L000","IDS L000","IDS L000"],
        ["AP Capstone Seminar","IDS L000","IDS L000","IDS L000"],
        ["AP Chemistry","CHM 1020 Chemistry for the Liberal Arts | CHM L000","CHM 2045 General Chemistry 1 | CHM 2045L General Chemistry 1 Laboratory","CHM 2045 General Chemistry 1 | CHM 2045L General Chemistry 1 Laboratory | CHM 2046 General Chemistry 2 | CHM 2046L General Chemistry 2 Laboratory"],
        ["AP Chinese Language and Culture","CHI 2230 Intermediate Chinese 1","CHI 2230 Intermediate Chinese 1 | CHI 2231 Intermediate Chinese 2","CHI 2230 Intermediate Chinese 1 | CHI 2231 Intermediate Chinese 2"],
        ["AP Computer Science A","CGS L000","CGS L000","CGS L000"],
        ["AP Computer Science AB","N/A","N/A","N/A"],
        ["AP Computer Science Principles","CIS L000","CIS L000","CIS L000"],
        ["AP Economics: Macro","ECO 2013 Principles of Macroeconomics","ECO 2013 Principles of Macroeconomics","ECO 2013 Principles of Macroeconomics"],
        ["AP Economics: Micro","ECO 2023 Principles of Microeconomics","ECO 2023 Principles of Microeconomics","ECO 2023 Principles of Microeconomics"],
        ["AP English Language","ENC 1101 Expository and Argumentative Writing","ENC 1101 Expository and Argumentative Writing | ENC 1102 Argument and Persuasion","ENC 1101 Expository and Argumentative Writing | ENC 1102 Argument and Persuasion"],
        ["AP English Literature","AML 2070 Survey of American Literature","AML 2070 Survey of American Literature | LIT 2120 Survey of World Literature: 17th Century to Modern","AML 2070 Survey of American Literature | LIT 2120 Survey of World Literature: 17th Century to Modern"],
        ["AP Environmental Science","ISC L000","ISC L000","ISC L000"],
        ["AP European History","EUH L000","EUH 2000 Western Civilization: From Early Times to the Middle Ages | EUH 2001 Western Civilization: From the Middle Ages to the Eighteenth Century","EUH 2000 Western Civilization: From Early Times to the Middle Ages | EUH 2001 Western Civilization: From the Middle Ages to the Eighteenth Century"],
        ["AP French Language and Culture","FRE 2220 Intermediate French 1","FRE 2220 Intermediate French 1 | FRE 2221 Intermediate French 2","FRE 2220 Intermediate French 1 | FRE 2221 Intermediate French 2"],
        ["AP French Literature","N/A","N/A","N/A"],
        ["AP German Language and Culture","GER 2200 Intermediate German 1","GER 2200 Intermediate German 1 | GER 2240 Intermediate German 2","GER 2200 Intermediate German 1 | GER 2240 Intermediate German 2"],
        ["AP Government and Politics: Comparative","CPO 2001 Comparative Politics","CPO 2001 Comparative Politics","CPO 2001 Comparative Politics"],
        ["AP Government and Politics: United States","POS 2041 American Federal Government","POS 2041 American Federal Government","POS 2041 American Federal Government"],
        ["AP Human Geography","GEO 2420 Introduction to Human Geography","GEO 2420 Introduction to Human Geography","GEO 2420 Introduction to Human Geography"],
        ["AP Italian Language and Culture","ITA 2220 Intermediate Italian 1","ITA 2220 Intermediate Italian 1 | ITA 2221 Intermediate Italian 2","ITA 2220 Intermediate Italian 1 | ITA 2221 Intermediate Italian 2"],
        ["AP Japanese Language and Culture","JPN 2230 Intermediate Japanese 1","JPN 2230 Intermediate Japanese 1 | JPN 2231 Intermediate Japanese 2","JPN 2230 Intermediate Japanese 1 | JPN 2231 Intermediate Japanese 2"],
        ["AP Latin Literature","N/A","N/A","N/A"],
        ["AP Latin","LNW 2321 Introduction to Vergil","LNW 2321 Introduction to Vergil","LNW 2321 Introduction to Vergil"],
        ["AP Music Theory","MUT 1001 Introduction to Music Theory Rudiments | MUT 1121 Theory of Music 1","MUT 1001 Introduction to Music Theory Rudiments | MUT 1121 Theory of Music 1","MUT 1121 Theory of Music 1"],
        ["AP Physics 1","PHY 2053 Physics 1 | PHY 2053L Laboratory for Physics 1","PHY 2053 Physics 1 | PHY 2053L Laboratory for Physics 1","PHY 2053 Physics 1 | PHY 2053L Laboratory for Physics 1"],
        ["AP Physics 2","PHY 2054 Physics 2 | PHY 2054L Laboratory for Physics 2","PHY 2054 Physics 2 | PHY 2054L Laboratory for Physics 2","PHY 2054 Physics 2 | PHY 2054L Laboratory for Physics 2"],
        ["AP Physics B","N/A","N/A","N/A"],
        ["AP Physics C: Electricity and Magnetism","PHY 2054 Physics 2 | PHY 2054L Laboratory for Physics 2","PHY 2049 Physics with Calculus 2 | PHY 2049L Laboratory for Physics with Calculus 2","PHY 2049 Physics with Calculus 2 | PHY 2049L Laboratory for Physics with Calculus 2"],
        ["Ap Physics C: Mechanics","PHY 2053 Physics 1 | PHY 2053L Laboratory for Physics 1","PHY 2048 Physics with Calculus 1 | PHY 2048L Laboratory for Physics with Calculus 1","PHY 2048 Physics with Calculus 1 | PHY 2048L Laboratory for Physics with Calculus 1"],
        ["AP Psychcology","PSY 2012 General Psychology","PSY 2012 General Psychology","PSY 2012 General Psychology"],
        ["AP Spanish Language and Culture","SPN 2200 Intermediate Spanish 1","SPN 2200 Intermediate Spanish 1 | SPN 2201 Intermediate Spanish 2","SPN 2200 Intermediate Spanish 1 | SPN 2201 Intermediate Spanish 2"],
        ["AP Spanish Literature","SPW L000","SPW L000","SPW 3100 Introduction to Spanish Literature 1 | SPW L000"],
        ["AP Statistics","STA 2023 Introduction to Statistics 1","STA 2023 Introduction to Statistics 1","STA 2023 Introduction to Statistics 1"],
        ["AP Studio Art: Drawing","ART 2305C Perceptual Drawing","ART 2305C Perceptual Drawing","ART 2305C Perceptual Drawing"],
        ["AP Studio Art: 2-D Design","ART 1201C","ART 1201C","ART 1201C"],
        ["AP Studio Art: 3-D Design","ART 1203C","ART 1203C","ART 1203C"],
        ["AP United States History","AMH L000","AMH 2010 United States to 1877 | AMH 2020 United States Since 1877","AMH 2010 United States to 1877 | AMH 2020 United States Since 1877"],
        ["AP World History","WOH L000","WOH L000","WOH L000"]    
    ]
    
//test


let UFDescriptions = 
    [
        ["AP Art History","Introduces the visual arts from a global perspective with an emphasis on diversity in the United States.","Introduces the visual arts from a global perspective with an emphasis on diversity in the United States. | Principles of art and relation of styles to cultural context. Introductory study of art and architecture from ancient times to the end of the Middle Ages.","Introduces the visual arts from a global perspective with an emphasis on diversity in the United States. | Principles of art and relation of styles to cultural context. Introductory study of art and architecture from ancient times to the end of the Middle Ages."],
        ["AP Biology","A comprehensive introduction to living systems, including the scientific basis of biology, cell structure and function, genetic mechanisms, animal and plant anatomy and physiology, and ecology and evolutionary processes. Recommended for students not majoring in the natural sciences. | A laboratory for students who need experience in a nonprofessionally oriented laboratory or for those who need laboratory experience to satisfy requirements for graduation.","General Biology Core: the first of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Studies the origin of life systems; of biological molecules and organization of living things at the subcellular, cellular and organismic levels; and of the activities of living forms in obtaining and utilizing energy and materials in growth, maintenance and reproduction. | Laboratory experiments designed to accompany BSC 2010. Students should register for BSC 2010 and 2010L concurrently.","General Biology Core: the first of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Studies the origin of life systems; of biological molecules and organization of living things at the subcellular, cellular and organismic levels; and of the activities of living forms in obtaining and utilizing energy and materials in growth, maintenance and reproduction. | Laboratory experiments designed to accompany BSC 2010. Students should register for BSC 2010 and 2010L concurrently. | General Biology Core: the second of a two-semester sequence that prepares students for advanced biological sciences courses and allied fields. Examination in living things of the principles of information storage, transmission and utilization at the cell, organism and population levels; of the mechanisms of evolutionary change in the diversification of living things and their life styles; of population growth and regulation; and of energy flow and biogeochemical cycling in the biosphere. | Laboratory experiments designed to accompany BSC 2011. Students should register for BSC 2011 and 2011L concurrently."],
        ["AP Calculus AB","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus"],
        ["AP Calculus BC","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus.","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus. | Techniques of integration; applications of integration; differentiation and integration of inverse trigonometric, exponential and logarithmic functions; sequences and series.","Introduces analytic geometry; limits; continuity; differentiation of algebraic, trigonometric, exponential and logarithmic functions; applications of the derivative; inverse trigonometric functions; differentials; introduction to integration; and the fundamental theorem of calculus. | Techniques of integration; applications of integration; differentiation and integration of inverse trigonometric, exponential and logarithmic functions; sequences and series."],
        ["AP Capstone Research","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP Capstone Seminar","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP Chemistry","Provides non-science majors with a basic understanding of the substances and chemical transformations central to our lives. Introduces chemical concepts and principles help the student better understand the role and impact of modern chemistry in society.  | The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. | Laboratory experiments designed to reflect the topics presented in CHM 2045.","The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. | Laboratory experiments designed to reflect the topics presented in CHM 2045. | The second semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Students who completed CHM 2045 or equivalent at another institution should consult a chemistry advisor before registering for this course. Acids and bases, additional aspects of chemical equilibria, thermodynamics, electrochemistry, complex ions and descriptive chemistry. | Laboratory experiments designed to reflect the topics presented in CHM 2046."],
        ["AP Chinese Language and Culture","Intermediate study of the four skills with new vocabulary and grammar.","Intermediate study of the four skills with new vocabulary and grammar. | Continuation of intermediate study of the four skills with new vocabulary and grammar.","Intermediate study of the four skills with new vocabulary and grammar. | Continuation of intermediate study of the four skills with new vocabulary and grammar."],
        ["AP Computer Science A","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP Computer Science AB","N/A","N/A","N/A"],
        ["AP Computer Science Principles","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP Economics: Macro","The nature of economics, economic concepts and institutions; growth, unemployment and inflation; money and banking; economic policies; and the international economy.","The nature of economics, economic concepts and institutions; growth, unemployment and inflation; money and banking; economic policies; and the international economy.","The nature of economics, economic concepts and institutions; growth, unemployment and inflation; money and banking; economic policies; and the international economy."],
        ["AP Economics: Micro","Theories of production, determination of prices and distribution of income in regulated and unregulated industries. Attention is also given to industrial relations, monopolies and comparative economic systems.","Theories of production, determination of prices and distribution of income in regulated and unregulated industries. Attention is also given to industrial relations, monopolies and comparative economic systems.","Theories of production, determination of prices and distribution of income in regulated and unregulated industries. Attention is also given to industrial relations, monopolies and comparative economic systems."],
        ["AP English Language","The principal elements of writing clearly, efficiently and effectively. ENC 1101 also focuses on writing logical arguments, building research skills and developing critical thinking through reading, writing and discussion.","The principal elements of writing clearly, efficiently and effectively. ENC 1101 also focuses on writing logical arguments, building research skills and developing critical thinking through reading, writing and discussion. | Writing techniques and forms of argument in a range of disciplines. For their major writing assignment in this course, students will write an extensively researched and well-documented research paper, learning professional and academic writing conventions and developing their critical thinking skills.","The principal elements of writing clearly, efficiently and effectively. ENC 1101 also focuses on writing logical arguments, building research skills and developing critical thinking through reading, writing and discussion. | Writing techniques and forms of argument in a range of disciplines. For their major writing assignment in this course, students will write an extensively researched and well-documented research paper, learning professional and academic writing conventions and developing their critical thinking skills."],
        ["AP English Literature","Introduces some of the major writers, issues and forms found in the history of American literature. The instructor determines the breadth and focus of this survey.","Introduces some of the major writers, issues and forms found in the history of American literature. The instructor determines the breadth and focus of this survey. | ntroduces some of the major writers, issues and forms found in history of the period. The instructor determines the breadth and focus of this survey.","Introduces some of the major writers, issues and forms found in the history of American literature. The instructor determines the breadth and focus of this survey. | ntroduces some of the major writers, issues and forms found in history of the period. The instructor determines the breadth and focus of this survey."],
        ["AP Environmental Science","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP European History","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","Introduces western civilization that studies the early cultures in Mesopotamia and Egypt, the Minoan-Mycenaean society, Greece, the Hellenistic period and the Roman Empire to the Barbarian invasions. | Treats feudal, urban and religious institutions in Medieval society, Renaissance and Reformation, the Thirty Years' War, the Age of Louis XIV and the Age of Reason.","Introduces western civilization that studies the early cultures in Mesopotamia and Egypt, the Minoan-Mycenaean society, Greece, the Hellenistic period and the Roman Empire to the Barbarian invasions. | Treats feudal, urban and religious institutions in Medieval society, Renaissance and Reformation, the Thirty Years' War, the Age of Louis XIV and the Age of Reason."],
        ["AP French Language and Culture","Devoted to grammar review and composition as well as to the advancement of spoken proficiency, FRE 2220 and its sequel, FRE 2221, develop reading and writing skills in French.","Devoted to grammar review and composition as well as to the advancement of spoken proficiency, FRE 2220 and its sequel, FRE 2221, develop reading and writing skills in French. | Continued grammar review. Emphasizes practice in reading and developing vocabulary. Selected readings in French and Francophone fiction.","Devoted to grammar review and composition as well as to the advancement of spoken proficiency, FRE 2220 and its sequel, FRE 2221, develop reading and writing skills in French. | Continued grammar review. Emphasizes practice in reading and developing vocabulary. Selected readings in French and Francophone fiction."],
        ["AP French Literature","N/A","N/A","N/A"],
        ["AP German Language and Culture","Participants will improve their skills in the four basic areas (reading, writing, listening comprehension, speaking) by reviewing elements of grammar, particularly morphology (i.e., word forms), and by expanding vocabulary. Upon successful completion, students may go directly to Advanced German.","Participants will improve their skills in the four basic areas (reading, writing, listening comprehension, speaking) by reviewing elements of grammar, particularly morphology (i.e., word forms), and by expanding vocabulary. Upon successful completion, students may go directly to Advanced German. | Objectives include improving reading and speaking skills at the intermediate level. Upon completion participants will be able to pronounce German words more accurately, listen with greater comprehension to German and respond to questions about a variety of recorded texts. Upon successful completion, students may go directly to Advanced German.","Participants will improve their skills in the four basic areas (reading, writing, listening comprehension, speaking) by reviewing elements of grammar, particularly morphology (i.e., word forms), and by expanding vocabulary. Upon successful completion, students may go directly to Advanced German. | Objectives include improving reading and speaking skills at the intermediate level. Upon completion participants will be able to pronounce German words more accurately, listen with greater comprehension to German and respond to questions about a variety of recorded texts. Upon successful completion, students may go directly to Advanced German."],
        ["AP Government and Politics: Comparative","The classification of political systems according to institutional and developmental characteristics. Causes and costs of political stability and instability. Comparison relates to contemporary political institutions and processes in specific countries.","The classification of political systems according to institutional and developmental characteristics. Causes and costs of political stability and instability. Comparison relates to contemporary political institutions and processes in specific countries.","The classification of political systems according to institutional and developmental characteristics. Causes and costs of political stability and instability. Comparison relates to contemporary political institutions and processes in specific countries."],
        ["AP Government and Politics: United States","Basic principles of the Federal Constitution and Civil Rights. Political parties and the electoral process. The structure and machinery of the federal government, including Congress, the president and the judiciary.","Basic principles of the Federal Constitution and Civil Rights. Political parties and the electoral process. The structure and machinery of the federal government, including Congress, the president and the judiciary.","Basic principles of the Federal Constitution and Civil Rights. Political parties and the electoral process. The structure and machinery of the federal government, including Congress, the president and the judiciary."],
        ["AP Human Geography","Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world.","Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world.","Introduces cultural geography with an emphasis upon the development and spatial arrangement of the major societies of the modern world."],
        ["AP Italian Language and Culture","Enhances knowledge of Italian in all four skills: listening, reading, speaking and writing. The goal is to create communicative competence that enables students to advance to third year study and to benefit from their visits to Italy.","Enhances knowledge of Italian in all four skills: listening, reading, speaking and writing. The goal is to create communicative competence that enables students to advance to third year study and to benefit from their visits to Italy. | Completes second year sequence with emphasis on composition, literature and communication skills.","Enhances knowledge of Italian in all four skills: listening, reading, speaking and writing. The goal is to create communicative competence that enables students to advance to third year study and to benefit from their visits to Italy. | Completes second year sequence with emphasis on composition, literature and communication skills."],
        ["AP Japanese Language and Culture","Intermediate study of the four skills with new vocabulary and grammar. JPN 2230 has a strict attendance policy: if registered students miss two or more class meetings during drop/add, they may be dropped from the class upon notification by the instructor.","Intermediate study of the four skills with new vocabulary and grammar. JPN 2230 has a strict attendance policy: if registered students miss two or more class meetings during drop/add, they may be dropped from the class upon notification by the instructor. | Continuation of intermediate study. JPN 2231 has a strict attendance policy: if registered students miss two or more class meetings during drop/add, they may be dropped from the class upon notification by the instructor.","Intermediate study of the four skills with new vocabulary and grammar. JPN 2230 has a strict attendance policy: if registered students miss two or more class meetings during drop/add, they may be dropped from the class upon notification by the instructor. | Continuation of intermediate study. JPN 2231 has a strict attendance policy: if registered students miss two or more class meetings during drop/add, they may be dropped from the class upon notification by the instructor."],
        ["AP Latin Literature","N/A","N/A","N/A"],
        ["AP Latin","Readings in Vergil's Eclogues, Georgics and/or the Aeneid, with emphasis on introducing Vergilian style, diction poetic techniques and basic genre differences. Review of Latin grammar and syntax.","Readings in Vergil's Eclogues, Georgics and/or the Aeneid, with emphasis on introducing Vergilian style, diction poetic techniques and basic genre differences. Review of Latin grammar and syntax.","Readings in Vergil's Eclogues, Georgics and/or the Aeneid, with emphasis on introducing Vergilian style, diction poetic techniques and basic genre differences. Review of Latin grammar and syntax."],
        ["AP Music Theory","If composite score is 3 or higher: The study of notation, scales, intervals, triads, aural skills and keyboard skills. | if both aural and non-aural subscores are 3 or higher: Rhythms, intervals, motifs, phrases, melodies, chords and chord progressions, in the standard clefs through listening, playing, singing and writing. Chord study includes primary and secondary triads in root position and inversions, non-harmonic tones and diatonic seventh chords.","If composite score is 3 or higher: The study of notation, scales, intervals, triads, aural skills and keyboard skills. | if both aural and non-aural subscores are 3 or higher: Rhythms, intervals, motifs, phrases, melodies, chords and chord progressions, in the standard clefs through listening, playing, singing and writing. Chord study includes primary and secondary triads in root position and inversions, non-harmonic tones and diatonic seventh chords.","Rhythms, intervals, motifs, phrases, melodies, chords and chord progressions, in the standard clefs through listening, playing, singing and writing. Chord study includes primary and secondary triads in root position and inversions, non-harmonic tones and diatonic seventh chords."],
        ["AP Physics 1","First semester of introductory physics de-emphasizing calculus. Structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound. | aboratory experience for PHY 2053 illustrating the practical applications of the structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound.","First semester of introductory physics de-emphasizing calculus. Structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound. | aboratory experience for PHY 2053 illustrating the practical applications of the structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound.","First semester of introductory physics de-emphasizing calculus. Structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound. | aboratory experience for PHY 2053 illustrating the practical applications of the structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound."],
        ["AP Physics 2","Second semester of introductory physics de-emphasizing calculus. Electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei. | Laboratory experience for PHY 2054 illustrating the practical applications of electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei.","Second semester of introductory physics de-emphasizing calculus. Electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei. | Laboratory experience for PHY 2054 illustrating the practical applications of electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei.","Second semester of introductory physics de-emphasizing calculus. Electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei. | Laboratory experience for PHY 2054 illustrating the practical applications of electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei."],
        ["AP Physics B","N/A","N/A","N/A"],
        ["AP Physics C: Electricity and Magnetism","Second semester of introductory physics de-emphasizing calculus. Electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei. | Laboratory experience for PHY 2054 illustrating the practical applications of electric charge, fields and circuits; electromagnetism, applied electricity; geometrical optics, wave optics, applied optics; electrons and photons; atoms and nuclei.","The second of a two-semester sequence of physics for scientists and engineers. Content includes Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction. | Laboratory experience for PHY 2049 illustrating the practical applications of Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction.","The second of a two-semester sequence of physics for scientists and engineers. Content includes Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction. | Laboratory experience for PHY 2049 illustrating the practical applications of Coulomb's law, electric fields and potentials, capacitance, currents and circuits, Ampere's law, Faraday's law, inductance, Maxwell's equations, electromagnetic waves, ray optics, interference and diffraction."],
        ["Ap Physics C: Mechanics","First semester of introductory physics de-emphasizing calculus. Structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound. | Laboratory experience for PHY 2053 illustrating the practical applications of the structure and properties of matter; kinematics, dynamics and statics; momentum and energy; rotation, elasticity; vibration; fluids; temperature and expansion, heat transfer, thermal behavior of gases; wave motion and sound.","The first of a two-semester sequence of physics for scientists and engineers. The course covers Newtonian mechanics and includes motion, vectors, Newton's laws, work and conservation of energy, systems of particles, collisions, equilibrium, oscillations and waves. | Laboratory experience for PHY 2048 illustrating the practical applications of Newtonian mechanics.","The first of a two-semester sequence of physics for scientists and engineers. The course covers Newtonian mechanics and includes motion, vectors, Newton's laws, work and conservation of energy, systems of particles, collisions, equilibrium, oscillations and waves. | Laboratory experience for PHY 2048 illustrating the practical applications of Newtonian mechanics."],
        ["AP Psychcology","Introduction to psychology; this course is the prerequisite for advanced courses. Emphasis is on psychology as a research enterprise. Students are required to participate as subjects in psychological research or to write a paper on a psychological research article.","Introduction to psychology; this course is the prerequisite for advanced courses. Emphasis is on psychology as a research enterprise. Students are required to participate as subjects in psychological research or to write a paper on a psychological research article.","Introduction to psychology; this course is the prerequisite for advanced courses. Emphasis is on psychology as a research enterprise. Students are required to participate as subjects in psychological research or to write a paper on a psychological research article."],
        ["AP Spanish Language and Culture","First of the intermediate Spanish language sequence. Develops intermediate skills in reading, writing, speaking and listening. Builds communicative competence and enhances social and cultural awareness of the Spanish-speaking world. Taught entirely in Spanish.","First of the intermediate Spanish language sequence. Develops intermediate skills in reading, writing, speaking and listening. Builds communicative competence and enhances social and cultural awareness of the Spanish-speaking world. Taught entirely in Spanish. | Second course in the intermediate Spanish language sequence. Continues development of intermediate skills in reading, writing, speaking and listening. Continues to enhance communicative competence and social and cultural awareness. Taught entirely in Spanish.","irst of the intermediate Spanish language sequence. Develops intermediate skills in reading, writing, speaking and listening. Builds communicative competence and enhances social and cultural awareness of the Spanish-speaking world. Taught entirely in Spanish. | Second course in the intermediate Spanish language sequence. Continues development of intermediate skills in reading, writing, speaking and listening. Continues to enhance communicative competence and social and cultural awareness. Taught entirely in Spanish."],
        ["AP Spanish Literature","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","Selected readings in epic, lyric, ballad and popular poetry, early forms of recreational and didactic prose and dramatic works from Spain's Medieval and Golden Ages are presented with attention to form and historical context. | The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."],
        ["AP Statistics","Graphical and numerical descriptive measures. Simple linear regression. Basic probability concepts, random variables, sampling distributions, central limit theorem. Large and small sample confidence intervals and significance tests for parameters associated with a single population and for comparison of two populations. Use of statistical computer software and computer applets to analyze data and explore new concepts.","Graphical and numerical descriptive measures. Simple linear regression. Basic probability concepts, random variables, sampling distributions, central limit theorem. Large and small sample confidence intervals and significance tests for parameters associated with a single population and for comparison of two populations. Use of statistical computer software and computer applets to analyze data and explore new concepts.","Graphical and numerical descriptive measures. Simple linear regression. Basic probability concepts, random variables, sampling distributions, central limit theorem. Large and small sample confidence intervals and significance tests for parameters associated with a single population and for comparison of two populations. Use of statistical computer software and computer applets to analyze data and explore new concepts."],
        ["AP Studio Art: Drawing","Introduces descriptive drawing. Basic theories of observation and depiction including perspective and chiaroscuro.","Introduces descriptive drawing. Basic theories of observation and depiction including perspective and chiaroscuro.","Introduces descriptive drawing. Basic theories of observation and depiction including perspective and chiaroscuro."],
        ["AP Studio Art: 2-D Design","N/A","N/A","N/A"],
        ["AP Studio Art: 3-D Design","N/A","N/A","N/A"],
        ["AP United States History","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","Surveys the development of the U.S. from its colonial origins to the end of Reconstruction. | Surveys the emergence of modern America as an industrial and world power; the Progressive Era; WWI; the Great Depression and the New Deal; WW II; and the Cold War era.","Surveys the development of the U.S. from its colonial origins to the end of Reconstruction. | Surveys the emergence of modern America as an industrial and world power; the Progressive Era; WWI; the Great Depression and the New Deal; WW II; and the Cold War era."],
        ["AP World History","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major.","The L000 course number has no UF course equivalent. The credit applies to the minimum credits for the degree but does not provide credit toward general education, writing requirement, or count toward the major."]
    ]


let UCFScores = 
    [
        ["AP Art History","ARH 1000","ARH 1000/ARH 2050","ARH 1000/ARH 2050"],
        ["AP Biology","BSC 1005/BSC 1005L","BSC 2010C","BSC 2010C/BSC 2011C "],
        ["AP Calculus AB","MAC 2311","MAC 2311","MAC 2311"],
        ["AP Calculus BC","MAC 2311","MAC 2311/MAC 2312","MAC 2311 and MAC 2312"],
        ["AP Capstone Research","IDS 1911","IDS 1911","IDS 1911"],
        ["AP Capstone Seminar","IDS 1350","IDS 1350","IDS 1350"],
        ["AP Chemistry","CHM 1020/1020L","CHM 2045C","CHM 2045C/CHM 2046/CHM 2046L"],
        ["AP Chinese Language and Culture","CHI 2200","CHI 2200/CHI 2201","CHI 2200/CHI 2201"],
        ["AP Computer Science A","CGS 1075","CGS 1075","CGS 1075"],
        ["AP Computer Science AB","CGS 1076","CGS 1076","CGS 1076"],
        ["AP Computer Science Principles","COP 2000","COP 2000","COP 2000"],
        ["AP Economics: Macro","ECO 2013","ECO 2013","ECO 2013"],
        ["AP Economics: Micro","ECO 2023","ECO 2023","ECO 2023"],
        ["AP English Language","ENC 1101","ENC 1101/ENC 1102","ENC 1101/ENC 1102"],
        ["AP English Literature","ENC 1101","ENC 1101/LIT 1005","ENC 1101/LIT 1005"],
        ["AP Environmental Science","ISC 1051","ISC 1051","ISC 1051"],
        ["AP European History","EUH 1009","EUH 2000/EUH 2001","EUH 2000/EUH 2001"],
        ["AP French Language and Culture","FRE 2200","FRE 2200/FRE 2201","FRE 2200/FRE 2201"],
        ["AP French Literature","FRW 3100","FRW 3100/FRW 3101","FRW 3100/FRW 3101"],
        ["AP German Language and Culture","GER 2200","GER 2200/GER 2201","GER 2200/GER 2201"],
        ["AP Government and Politics: Comparative","CPO 1002","CPO 1002","CPO 1002"],
        ["AP Government and Politics: United States","POS 2041","POS 2041","POS 2041"],
        ["AP Human Geography","GEO 2400","GEO 2400","GEO 2400"],
        ["AP Italian Language and Culture","ITA 2200","ITA 2200/ITA 2201","ITA 2200/ITA 2201"],
        ["AP Japanese Language and Culture","JPN 2200","JPN 2200/JPN 2201","JPN 2200/JPN 2201"],
        ["AP Latin Literature","LNW 3700","LNW 3700","LNW 3700"],
        ["AP Latin","LNW 2321","LNW 2321","LNW 2321"],
        ["AP Music Theory","MUT 1001/MUT 1111/MUT 1241","MUT 1001/MUT 1111/MUT 1241","MUT 1001/MUT 1111/MUT 1241"],
        ["AP Physics 1","PHY 2053C","PHY 2053C","PHY 2053C"],
        ["AP Physics 2","PHY 2054C","PHY 2054C","PHY 2054C"],
        ["AP Physics B","PHY 2053C","PHY 2053C/PHY 2054C","PHY 2053C/PHY 2054C"],
        ["AP Physics C: Electricity and Magnetism","PHY 2054C","PHY 2049C","PHY 2049C"],
        ["Ap Physics C: Mechanics","PHY 2053C","PHY 2048C","PHY 2048C"],
        ["AP Psychcology","PSY 2012","PSY 2012","PSY 2012"],
        ["AP Spanish Language and Culture","SPN 2200","SPN 2200/SPN 2201","SPN 2200/SPN 2201"],
        ["AP Spanish Literature","SPW 3100","SPW 3100/SPW 3201","SPW 3100/SPW 3201"],
        ["AP Statistics","STA 2023","STA 2023","STA 2023"],
        ["AP Studio Art: Drawing","ART 2300C","ART 2300C","ART 2300C"],
        ["AP Studio Art: 2-D Design","ART 2201C","ART 2201C","ART 2201C"],
        ["AP Studio Art: 3-D Design","ART 2203C","ART 2203C","ART 2203C"],
        ["AP United States History","AMH 2000","AMH 2010/AMH 2020","AMH 2010/AMH 2020"],
        ["AP World History","WOH 2022","WOH 2022","WOH 2022"]    
    ];

let UCFCourses = 
    [
        ["AP Art History","ARH 1000","ARH 1000 | ARH 2050 History of Western Art I","ARH 1000 | ARH 2050 History of Western Art I"],
        ["AP Biology","BSC 1005 Biological Principles | BSC 1005L Biological Principles Laboratory","BSC 2010C Biology I","BSC 2010C Biology I | BSC 2011C Biology II"],
        ["AP Calculus AB","MAC 2311C Calculus with Analytic Geometry I","MAC 2311C Calculus with Analytic Geometry I","MAC 2311C Calculus with Analytic Geometry I"],
        ["AP Calculus BC","MAC 2311C Calculus with Analytic Geometry I","MAC 2311C Calculus with Analytic Geometry I | MAC 2312 Calculus with Analytic Geometry II","MAC 2311C Calculus with Analytic Geometry I | MAC 2312 Calculus with Analytic Geometry II"],
        ["AP Capstone Research","IDS 1911 Introduction to Research I","IDS 1911 Introduction to Research I","IDS 1911 Introduction to Research I"],
        ["AP Capstone Seminar","IDS 1350","IDS 1350","IDS 1350"],
        ["AP Chemistry","CHM 1020 Concepts in Chemistry | CHM 1020L Concepts in Chemistry Labratory","CHM 2045C Chemistry Fundamentals I","CHM 2045C Chemistry Fundamentals I | CHM 2046 Chemistry Fundamentals II | CHM 2046L Chemistry Fundamentals Laboratory"],
        ["AP Chinese Language and Culture","CHI 2200 Intermediate Chinese I","CHI 2200 Intermediate Chinese I | CHI 2201 Intermediate Chinese II","CHI 2200 Intermediate Chinese I | CHI 2201 Intermediate Chinese II"],
        ["AP Computer Science A","CGS 1075","CGS 1075","CGS 1075"],
        ["AP Computer Science AB","CGS 1076","CGS 1076","CGS 1076"],
        ["AP Computer Science Principles","COP 2000","COP 2000","COP 2000"],
        ["AP Economics: Macro","ECO 2013 Principles of Macroeconomics","ECO 2013 Principles of Macroeconomics","ECO 2013 Principles of Macroeconomics"],
        ["AP Economics: Micro","ECO 2023 Principles of Microeconomics","ECO 2023 Principles of Microeconomics","ECO 2023 Principles of Microeconomics"],
        ["AP English Language","ENC 1101 Composition I","ENC 1101 Composition I | ENC 1102 Composition II","ENC 1101 Composition I | ENC 1102 Composition II"],
        ["AP English Literature","ENC 1101 Composition I","ENC 1101 Composition I | LIT 1005","ENC 1101 Composition I | LIT 1005"],
        ["AP Environmental Science","ISC 1051","ISC 1051","ISC 1051"],
        ["AP European History","EUH 1009","EUH 2000 Western Civilization I | EUH 2001 Western Civilization II","EUH 2000 Western Civilization I | EUH 2001 Western Civilization II"],
        ["AP French Language and Culture","FRE 2200 Intermediate French Language and Civilization I","FRE 2200 Intermediate French Language and Civilization I | FRE 2201 Intermediate French Language and Civilization II","FRE 2200 Intermediate French Language and Civilization I | FRE 2201 Intermediate French Language and Civilization II"],
        ["AP French Literature","FRW 3100 Survey of French Literature I","FRW 3100 Survey of French Literature I | FRW 3101 Survey of French Literature II","FRW 3100 Survey of French Literature I | FRW 3101 Survey of French Literature II"],
        ["AP German Language and Culture","GER 2200 Intermediate German Language and Civilization I","GER 2200 Intermediate German Language and Civilization I | GER 2201 Intermediate German Language and Civilization II","GER 2200 Intermediate German Language and Civilization I | GER 2201 Intermediate German Language and Civilization II"],
        ["AP Government and Politics: Comparative","CPO 1002","CPO 1002","CPO 1002"],
        ["AP Government and Politics: United States","POS 2041 American National Government","POS 2041 American National Government","POS 2041 American National Government"],
        ["AP Human Geography","GEO 2400","GEO 2400","GEO 2400"],
        ["AP Italian Language and Culture","ITA 2200 Intermediate Italian Language and Civilization I","ITA 2200 Intermediate Italian Language and Civilization I | ITA 2201 - Intermediate Italian Language and Civilization II","ITA 2200 Intermediate Italian Language and Civilization I | ITA 2201 - Intermediate Italian Language and Civilization II"],
        ["AP Japanese Language and Culture","JPN 2200 Intermediate Japanese Language and Civilization I","JPN 2200 Intermediate Japanese Language and Civilization I | JPN 2201 Intermediate Japanese Language and Civilization II","JPN 2200 Intermediate Japanese Language and Civilization I | JPN 2201 Intermediate Japanese Language and Civilization II"],
        ["AP Latin Literature","LNW 3700","LNW 3700","LNW 3700"],
        ["AP Latin","LNW 2321","LNW 2321","LNW 2321"],
        ["AP Music Theory","MUT 1001 | MUT 1111 | MUT 1241","MUT 1001 | MUT 1111 | MUT 1241","MUT 1001 | MUT 1111 | MUT 1241"],
        ["AP Physics 1","PHY 2053C College Physics I","PHY 2053C College Physics I","PHY 2053C College Physics I"],
        ["AP Physics 2","PHY 2054C College Physics II","PHY 2054C College Physics II","PHY 2054C College Physics II"],
        ["AP Physics B","PHY 2053C College Physics I","PHY 2053C College Physics I | PHY 2054C College Physics II","PHY 2053C College Physics I | PHY 2054C College Physics II"],
        ["AP Physics C: Electricity and Magnetism","PHY 2054C College Physics II","PHY 2049C General Physics Using Calculus II","PHY 2049C General Physics Using Calculus II"],
        ["Ap Physics C: Mechanics","PHY 2053C College Physics I","PHY 2048C General Physics Using Calculus I","PHY 2048C General Physics Using Calculus I"],
        ["AP Psychcology","PSY 2012 General Psychology","PSY 2012 General Psychology","PSY 2012 General Psychology"],
        ["AP Spanish Language and Culture","SPN 2200 Intermediate Spanish Language and Civilization I","SPN 2200 Intermediate Spanish Language and Civilization I | SPN 2201 Intermediate Spanish Language and Civilization II","SPN 2200 Intermediate Spanish Language and Civilization I | SPN 2201 Intermediate Spanish Language and Civilization II"],
        ["AP Spanish Literature","SPW 3100 Survey of Spanish Literature I","SPW 3100 Survey of Spanish Literature I | SPW 3201","SPW 3100 Survey of Spanish Literature I | SPW 3201"],
        ["AP Statistics","STA 2023 Statistical Methods I","STA 2023 Statistical Methods I","STA 2023 Statistical Methods I"],
        ["AP Studio Art: Drawing","ART 2300C Drawing Fundamentals I","ART 2300C Drawing Fundamentals I","ART 2300C Drawing Fundamentals I"],
        ["AP Studio Art: 2-D Design","ART 2201C Design Fundamentals-Two Dimensional","ART 2201C Design Fundamentals-Two Dimensional","ART 2201C Design Fundamentals-Two Dimensional"],
        ["AP Studio Art: 3-D Design","ART 2203C Design Fundamentals-Three Dimensional","ART 2203C Design Fundamentals-Three Dimensional","ART 2203C Design Fundamentals-Three Dimensional"],
        ["AP United States History","AMH 2000","AMH 2010 U.S. History: 1492-1877 | AMH 2020 U.S. History: 1877-Present","AMH 2010 U.S. History: 1492-1877 | AMH 2020 U.S. History: 1877-Present"],
        ["AP World History","WOH 2022 World Civilization II","WOH 2022 World Civilization II","WOH 2022 World Civilization II"]    
    ]

let UCFDescriptions = 
    [
        ["AP Art History","N/A","N/A | Painting, sculpture and architecture from the Prehistoric Era through the Renaissance.","N/A | Painting, sculpture and architecture from the Prehistoric Era through the Renaissance."],
        ["AP Biology","A study of various biological factors which affect the health and survival of man in modern society. Designed for non-majors. | The laboratory to accompany BSC 1005.","Open only to students whose major requires this specific course. Cellular and chemical basis of life, genetics, and the theory of evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively.","Open only to students whose major requires this specific course. Cellular and chemical basis of life, genetics, and the theory of evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively. | Continuation of BSC 2010C. Organismal anatomy and physiology as it relates to biodiversity, ecology and evolution. Emphasis on problem solving, analysis, synthesis of information, and applying data effectively."],
        ["AP Calculus AB","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals."],
        ["AP Calculus BC","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals. | Differentiation and integration of exponential, logarithmic, inverse trigonometric functions; techniques of integration; further applications of integration; parametric equations, polar coordinates; infinite sequences and series.","Analytic geometry; limits, continuity, differentiation of algebraic and trigonometric functions; applications of derivatives; integration and the fundamental theorem of calculus; applications of definite integrals. | Differentiation and integration of exponential, logarithmic, inverse trigonometric functions; techniques of integration; further applications of integration; parametric equations, polar coordinates; infinite sequences and series."],
        ["AP Capstone Research","N/A","N/A","N/A"],
        ["AP Capstone Seminar","N/A","N/A","N/A"],
        ["AP Chemistry","Concepts will be examined to provide insight into the significant role that chemistry plays in our culture. Intended as a general education course. | N/A","Principles of modern chemistry, units and measures, basic physical theory of chemical reactivity, stoichiometry, reactions in aqueous solutions, thermochemistry, atomic structure, periodicity, chemical bonding, states of matter, gases.","Principles of modern chemistry, units and measures, basic physical theory of chemical reactivity, stoichiometry, reactions in aqueous solutions, thermochemistry, atomic structure, periodicity, chemical bonding, states of matter, gases. | Continuation of CHM 2045C or the CHM 2040 & CHM 2041 sequence. Intermolecular forces, solutions and colligative properties. equilibria, thermodynamics, chemical kinetics, electrochemistry, nuclear chemistry. | Illustration of chemical principles and introduction to the techniques of inorganic and physical chemistry. IMPORTANT: Attendance of the first laboratory session dealing with safety procedures is mandatory; students who do not attend must immediately call the Chemistry Department, and may be dropped from the class."],
        ["AP Chinese Language and Culture","Development of Chinese language skills at the intermediate level.","Development of Chinese language skills at the intermediate level. | Continuation of CHI 2200 with emphasis on Chinese cultures.","Development of Chinese language skills at the intermediate level. | Continuation of CHI 2200 with emphasis on Chinese cultures."],
        ["AP Computer Science A","N/A","N/A","N/A"],
        ["AP Computer Science AB","N/A","N/A","N/A"],
        ["AP Computer Science Principles","N/A","N/A","N/A"],
        ["AP Economics: Macro","An introduction to macroeconomics, including an overview of the market economy; national income, employment, and price level determination, stabilization policies, and international economics.","An introduction to macroeconomics, including an overview of the market economy; national income, employment, and price level determination, stabilization policies, and international economics.","An introduction to macroeconomics, including an overview of the market economy; national income, employment, and price level determination, stabilization policies, and international economics."],
        ["AP Economics: Micro","The determination of prices in a market economy; their role in allocating consumer and producer goods and in distributing incomes, including attempts to improve market efficiency through public policy.","The determination of prices in a market economy; their role in allocating consumer and producer goods and in distributing incomes, including attempts to improve market efficiency through public policy.","The determination of prices in a market economy; their role in allocating consumer and producer goods and in distributing incomes, including attempts to improve market efficiency through public policy."],
        ["AP English Language","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences.","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences. | Focus on extensive research in analytical and argumentative writing based on a variety of readings from the humanities. Emphasis on developing critical thinking and diversity of perspective.","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences. | Focus on extensive research in analytical and argumentative writing based on a variety of readings from the humanities. Emphasis on developing critical thinking and diversity of perspective."],
        ["AP English Literature","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences.","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences. | N/A","Expository writing with emphasis on effective communication and critical thinking. Emphasizing the writing process writing topics are based on selected readings and on student experiences. | N/A"],
        ["AP Environmental Science","N/A","N/A","N/A"],
        ["AP European History","N/A","A survey of western civilization from ancient to 1648. | A survey of western civilization from 1648 to present. May be taken before EUH 2000.","A survey of western civilization from ancient to 1648. | A survey of western civilization from 1648 to present. May be taken before EUH 2000."],
        ["AP French Language and Culture","Development of language skills and cultural knowledge at the intermediate level.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of FRE 2200 with emphasis on French civilization.","Development of language skills and cultural knowledge at the intermediate level.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of FRE 2200 with emphasis on French civilization."],
        ["AP French Literature","Main literary currents and works from the Middle Ages through the 18th century.","Main literary currents and works from the Middle Ages through the 18th century. | Main literary currents and works of the 19th and 20th centuries.","Main literary currents and works from the Middle Ages through the 18th century. | Main literary currents and works of the 19th and 20th centuries."],
        ["AP German Language and Culture","Development of language skills and cultural knowledge at the intermediate level.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of GER 2200 with emphasis on German civilization.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of GER 2200 with emphasis on German civilization."],
        ["AP Government and Politics: Comparative","N/A","N/A","N/A"],
        ["AP Government and Politics: United States","A study of the dynamics of American national government, including its structure, organization, powers, and procedures.","A study of the dynamics of American national government, including its structure, organization, powers, and procedures.","A study of the dynamics of American national government, including its structure, organization, powers, and procedures."],
        ["AP Human Geography","N/A","N/A","N/A"],
        ["AP Italian Language and Culture","Designed to continue development of language skills at intermediate level, plus a review of grammar, study of syntax, idiomatic expression, extensive readings, and further study of Italian culture.","Designed to continue development of language skills at intermediate level, plus a review of grammar, study of syntax, idiomatic expression, extensive readings, and further study of Italian culture. | Designed to continue development of language skills at intermediate level, plus a review of grammar and study of syntax, with emphasis on Italian civilization.","Designed to continue development of language skills at intermediate level, plus a review of grammar, study of syntax, idiomatic expression, extensive readings, and further study of Italian culture. | Designed to continue development of language skills at intermediate level, plus a review of grammar and study of syntax, with emphasis on Italian civilization."],
        ["AP Japanese Language and Culture","This course aims to aid in acquiring and refining the acquisition of the four skills in modern Japanese: speaking, listening, reading, and writing. The emphasis is on accurate communication in Japanese. The culture of Japan will also be studied.","This course aims to aid in acquiring and refining the acquisition of the four skills in modern Japanese: speaking, listening, reading, and writing. The emphasis is on accurate communication in Japanese. The culture of Japan will also be studied. | Continuation of JPN 2200 with emphasis on Japanese civilization.","This course aims to aid in acquiring and refining the acquisition of the four skills in modern Japanese: speaking, listening, reading, and writing. The emphasis is on accurate communication in Japanese. The culture of Japan will also be studied. | Continuation of JPN 2200 with emphasis on Japanese civilization."],
        ["AP Latin Literature","N/A","N/A","N/A"],
        ["AP Latin","N/A","N/A","N/A"],
        ["AP Music Theory","MUT 1001 if composite score is 3 or higher | MUT 1111 if both aural and non-aural subscores are 3 or higher | MUT 1241 if both aural and non-aural subscores are 3 or higher","MUT 1001 if composite score is 3 or higher | MUT 1111 if both aural and non-aural subscores are 3 or higher | MUT 1241 if both aural and non-aural subscores are 3 or higher","MUT 1001 if composite score is 3 or higher | MUT 1111 if both aural and non-aural subscores are 3 or higher | MUT 1241 if both aural and non-aural subscores are 3 or higher"],
        ["AP Physics 1","Mechanics, waves, thermodynamics.","Mechanics, waves, thermodynamics.","Mechanics, waves, thermodynamics."],
        ["AP Physics 2","Fluids, electricity and magnetism, optics, x-rays, radioactivity.","Fluids, electricity and magnetism, optics, x-rays, radioactivity.","Fluids, electricity and magnetism, optics, x-rays, radioactivity."],
        ["AP Physics B","Mechanics, waves, thermodynamics.","Mechanics, waves, thermodynamics. | Fluids, electricity and magnetism, optics, x-rays, radioactivity.","Mechanics, waves, thermodynamics. | Fluids, electricity and magnetism, optics, x-rays, radioactivity."],
        ["AP Physics C: Electricity and Magnetism","Fluids, electricity and magnetism, optics, x-rays, radioactivity.","Electricity, magnetism, optics.","Electricity, magnetism, optics."],
        ["Ap Physics C: Mechanics","Mechanics, waves, thermodynamics.","Mechanics, Thermodynamics, fluids.","Mechanics, Thermodynamics, fluids."],
        ["AP Psychcology","A survey of the basic principles, theories, and methods of contemporary psychology, including the study of human diversity.","A survey of the basic principles, theories, and methods of contemporary psychology, including the study of human diversity.","A survey of the basic principles, theories, and methods of contemporary psychology, including the study of human diversity."],
        ["AP Spanish Language and Culture","Development of language skills and cultural knowledge at the intermediate level.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of SPN 2200, with emphasis on Spanish civilization.","Development of language skills and cultural knowledge at the intermediate level.","Development of language skills and cultural knowledge at the intermediate level. | Continuation of SPN 2200, with emphasis on Spanish civilization."],
        ["AP Spanish Literature","Main literary currents and works from the Middle Ages through the Eighteenth century.","Main literary currents and works from the Middle Ages through the Eighteenth century. | N/A","Main literary currents and works from the Middle Ages through the Eighteenth century.","Main literary currents and works from the Middle Ages through the Eighteenth century. | N/A"],
        ["AP Statistics","First methods course introducing probability and statistical inference, including estimation, hypothesis testing, binomial and normal distributions, sample size.","First methods course introducing probability and statistical inference, including estimation, hypothesis testing, binomial and normal distributions, sample size.","First methods course introducing probability and statistical inference, including estimation, hypothesis testing, binomial and normal distributions, sample size."],
        ["AP Studio Art: Drawing","Priority given to students whose major requires this course. Drawing as a means of formal organization. Introduction to problems in drawing methods and media. Emphasis on description techniques.","Priority given to students whose major requires this course. Drawing as a means of formal organization. Introduction to problems in drawing methods and media. Emphasis on description techniques.","Priority given to students whose major requires this course. Drawing as a means of formal organization. Introduction to problems in drawing methods and media. Emphasis on description techniques."],
        ["AP Studio Art: 2-D Design","Priority given to students whose major requires this course. Materials, processes, form. Emphasis on two-dimensional design problems, including problems in black and white and basic color theory.","Priority given to students whose major requires this course. Materials, processes, form. Emphasis on two-dimensional design problems, including problems in black and white and basic color theory.","Priority given to students whose major requires this course. Materials, processes, form. Emphasis on two-dimensional design problems, including problems in black and white and basic color theory."],
        ["AP Studio Art: 3-D Design","Priority given to students whose major requires this course. Basic three-dimensional design using the various sculptural media.","Priority given to students whose major requires this course. Basic three-dimensional design using the various sculptural media.","Priority given to students whose major requires this course. Basic three-dimensional design using the various sculptural media."],
        ["AP United States History","N/A","Survey of U.S. History from 1492-1877. | Survey of U.S. History from 1877 to the present.","N/A","Survey of U.S. History from 1492-1877. | Survey of U.S. History from 1877 to the present."],
        ["AP World History","Rise of modern civilization from 1500 to the present, with an emphasis on the confrontation between the Western and non-Western spheres of civilization.","Rise of modern civilization from 1500 to the present, with an emphasis on the confrontation between the Western and non-Western spheres of civilization.","Rise of modern civilization from 1500 to the present, with an emphasis on the confrontation between the Western and non-Western spheres of civilization."]
    ]


let table = document.getElementById("table");
let content = document.getElementById("content");
let body = document.querySelector("body");

//Takes input from the dropdown search bars, and runs handleSelect on it.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("collegeSearchbar").addEventListener("input", handleSelect);
    document.getElementById("apExamSearchbar").addEventListener("input", handleSelect);
});


function handleSelect(ev){
    
    let collegeSelect = (document.getElementById("collegeSearchbar")[document.getElementById("collegeSearchbar").selectedIndex].value);
    let apSelect = (document.getElementById("apExamSearchbar")[document.getElementById("apExamSearchbar").selectedIndex].value);
    //As long as a college option is selected, the webpage is updated to show the AP courses for the college.
    clear();
    if(collegeSelect != "N/A"){
        let condition = eval(collegeSelect + "Scores.length");
        for(let i = 0; i < condition; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            table.appendChild(row, document.querySelector("#courseDescription"));
            for(let j = 0; j < 4; j++){
                let item = document.createElement("div");
                item.classList.add("box");
                if(j > 0){
                    item.classList.add("pointer");
                }
                item.innerHTML = eval(collegeSelect + "Scores[i][j]");
                row.appendChild(item);
            }
        }
    }

    if(collegeSelect == "N/A"){
        content.style.backgroundColor = "white";
        body.style.backgroundImage = "url('https://i.redd.it/92p34mtzd3y41.png')";
    }else if(collegeSelect == "UF"){
        content.style.backgroundColor = "orange";
        body.style.backgroundImage = "url('https://i.ytimg.com/vi/Sr4zllx6ue0/maxresdefault.jpg')";   
    }else if(collegeSelect == "UCF"){
        content.style.backgroundColor = "#ffcf06";
        body.style.backgroundImage = "url('https://pbs.twimg.com/profile_images/462235833274073088/2Mo_aqES.png')";
    }

   
    let rows = document.querySelectorAll(".row");
    
    //As long as an AP course is selected, the webpage is updated to show that specific AP course for the specific college.
    if(apSelect != "N/A"){
        for(let i = 0; i < rows.length; i++){
                if((rows[i].firstElementChild.textContent) == apSelect){
                }else{
                    table.removeChild(rows[i]);
                }
        }
    }
}

//Clears the DOM/ webpage.
function clear(){
        let rows = document.querySelectorAll(".row");
        let count = rows.length;
        for(let i = 0; i < count; i++){
            table.removeChild(rows[i]);
        }
        clearCourseDescription();
}





let courseDescription = document.createElement("div");
let exitBox = document.createElement("button");
exitBox.setAttribute("id","exitBox");

//creates the courseDescription box
document.addEventListener("click", (e) => {
    let collegeSelect = (document.getElementById("collegeSearchbar")[document.getElementById("collegeSearchbar").selectedIndex].value);
    for(let r = 0; r < eval(collegeSelect +"Scores.length"); r++){
        for(let c = 1; c < eval(collegeSelect + "Scores[0].length"); c++){
            if(e.target.innerHTML == eval(collegeSelect + "Scores[r][c]")){
                if(eval(collegeSelect + 'Scores[r][c].includes("/")')){
                    let coursesArray = eval(collegeSelect + 'Courses[r][c].split("|")');
                    let descriptionsArray = eval(collegeSelect + 'Descriptions[r][c].split("|")');
                    console.log(table);
                    createCourseDescription();
                    for(let i = 0; i < coursesArray.length; i++){                        
                         courseDescription.innerHTML += "<b>" + coursesArray[i] + "</b>" + "<br>"+ descriptionsArray[i] + "<br>" + "<br>";
                    }
                    return("");
                }else{
                    createCourseDescription();
                    courseDescription.innerHTML += "<b>" + eval(collegeSelect + "Courses[r][c]") + "</b>" + "<br>"+ eval(collegeSelect + "Descriptions[r][c]");
                    return("");
                }
                
            }
        }

    }   
})

//clears the courseDescription when the red X is clicked
document.addEventListener("click", (e) => {
    if(e.target.innerHTML == "X"){
        clearCourseDescription();
        document.querySelector("body").removeChild(courseDescription);
        
    }
});

document.addEventListener("keyup", (e) => {
    if(e.keyCode == "27"){
        clearCourseDescription();
        document.querySelector("body").removeChild(courseDescription);
        
    }
});

function clearCourseDescription(){
    courseDescription.innerHTML = "Course Descriptions: <br>";
}

function createCourseDescription(){
    courseDescription.setAttribute("id","courseDescription");
    document.querySelector("body").appendChild(courseDescription);
    courseDescription.style.height = "auto";
    courseDescription.style.width = "800px";
    courseDescription.style.border = "2px solid black";
    clearCourseDescription();
    courseDescription.style.position = "fixed"; 
    courseDescription.style.top = "-10px"
    courseDescription.style.zIndex = "2";
    courseDescription.style.backgroundColor = "lightgray";
    courseDescription.style.opacity = "100%";
    courseDescription.style.fontSize = "25px";
    courseDescription.style.overflowY = "scroll";
    courseDescription.style.maxHeight = "95%"

    
    exitBox.style.height = "25px";
    exitBox.style.width = "25px";
    exitBox.style.backgroundColor = "red";
    exitBox.style.position = "absolute";
    exitBox.style.right = "0px";
    exitBox.style.top = "0px";
    exitBox.innerHTML = "X"
    exitBox.style.color = "white";
    exitBox.style.display = "flex";
    exitBox.style.alignItems = "center";
    exitBox.style.justifyContent = "center";
    exitBox.classList.add("pointer");
    courseDescription.appendChild(exitBox);
}
