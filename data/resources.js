//
// I could support concepts like links, people, organizations and the like in a variety of ways.
// For now I am using the JS namespace to define them as first class objects with links to each other as needed by name
// Another way would be to make them first class objects and actually link them together
//

var topic_resources = {

label:"resource",
art:"",
children:[

////////////////////////////////////////////////////////////////////////
// NEW LINKS
////////////////////////////////////////////////////////////////////////

{
label:"<h1>News and Links</h1>",
},

{
label:"Simulate World - Twitter Feed",
url:"http://twitter.com/worldsimulate",
},

{
label:"Ecological Jenga: Which Creatures Of Influence Need To Be Preserved From Extinction",
created:"2001 01 01", // year month day
tags:"link,article,philosophy,jenga,existential",
link:"http://www.science20.com/news_articles/ecological_jenga_which_creatures_influence_need_be_preserved_extinction-123887",
notes:"“The role each block plays in the stability of the towers is relative and constantly changing, if ecosystems are jenga towers almost any species can play a keystone role under the appropriate circumstances",
},

{
label:"What it would really take to reverse climate change",
created:"2001 01 01", // year month day
tags:"link,article",
url:"http://spectrum.ieee.org/energy/renewables/what-it-would-really-take-to-reverse-climate-change",
},

{
label:"Forests are making inroads against climate change",
created:"2001 01 01", // year month day
url:"http://www.nytimes.com/2014/12/24/science/earth/restored-forests-are-making-inroads-against-climate-change-.html",
tags:"link,article",
},

{
label:"Three ways humans have created poverty",
created:"2001 01 01", // year month day
url:"http://www.fastcoexist.com/3043284/3-ways-humans-create-poverty",
tags:"link,article,poverty",
},

{
label:"How climate change may alter forests world wide",
created:"2001 01 01", // year month day
url:"http://www.rollingstone.com/politics/news/the-fate-of-trees-how-climate-change-may-alter-forests-worldwide-20150312",
tags:"link,article,forests,climate",
},

{
label:"The year humans started to ruin the world",
created:"2001 01 01", // year month day
url:"http://www.bloomberg.com/news/articles/2015-03-11/the-year-humans-started-to-ruin-the-world",
tags:"link,article,philosophy",
},

{
label:"Elements of Biodiversity Extinction Crisis",
created:"2001 01 01", // year month day
url:"http://www.biologicaldiversity.org/programs/biodiversity/elements_of_biodiversity/extinction_crisis",
tags:"links,article,existential,biodiversity",
},

{
label:"We are the asteriod",
created:"2001 01 01", // year month day
url:"http://www.mediafactory.org.au/matthew-jowett/2014/08/30/fodi-we-are-the-asteroid",
tags:"link,article,existential",
},

{
label:"Industrial Civilization will collapse by 2040 says British Foreign Office",
created:"2015 06 22", // year month day
url:"https://medium.com/insurge-intelligence/uk-government-backed-scientific-model-flags-risk-of-civilisation-s-collapse-by-2040-4d121e455997",
tags:"link,article,existential,threats,media",
notes:"New scientific models supported by the British government’s Foreign Office show that if we don’t change course, in less than three decades industrial civilisation will essentially collapse due to catastrophic food shortages, triggered by a combination of climate change, water scarcity, energy crisis, and political instability.",
parent:"Global Resource Observatory",
},

{
label:"NASA Study Concludes When Civilization Will End",
created:"2001 01 01", // year month day
url:"http://mic.com/articles/85541/nasa-study-concludes-when-civilization-will-end-and-it-s-not-looking-good-for-us",
tags:"link, article, existential, threats, media, nasa, emotion",
notes:"Update: NASA is now clarifying its role in this study. NASA officials released this statement on the study on March 20, which seeks to distance the agency from the paper: 'A soon-to-be published research paper, 'Human and Nature Dynamics (HANDY): Modeling Inequality and Use of Resources in the Collapse or Sustainability of Societies' by University of Maryland researchers Safa Motesharrei and Eugenia Kalnay, and University of Minnesota's Jorge Rivas, was not solicited, directed or reviewed by NASA. It is an independent study by the university researchers utilizing research tools developed for a separate NASA activity. As is the case with all independent research, the views and conclusions in the paper are those of the authors alone. NASA does not endorse the paper or its conclusions.' Read the original story below.",
},

{
label:"Californa is so over",
created:"2001 01 01", // year month day
tags:"link, article, california, drought",
url:"http://www.thedailybeast.com/articles/2015/04/19/big-idea-california-is-so-over.html",
notes:"California’s drought and how it’s handled show just what kind of place the Golden State is becoming: feudal, super-affluent and with an impoverished interior.",
},

{
label:"How Growers Games California's Drought",
created:"2001 01 01", // year month day
tags:"link, article, california, drought, growers, crops, water",
notes:"Consuming 80 percent of California’s developed water but accounting for only 2 percent of the state’s GDP, agriculture thrives while everyone else is parched.",
url:"http://www.thedailybeast.com/articles/2015/03/30/how-growers-gamed-california-s-drought.html",
},

{
label:"Everything I thought I knew about water in California is wrong",
created:"2001 01 01", // year month day
tags:"link, article, california, drought, water",
url:"http://grist.org/food/everything-i-thought-i-knew-about-water-in-california-is-wrong/",
notes:"This piece started out as a confident prescription for California’s drought ills. But when I began writing, I kept coming across things that seemed confusing or contradictory. And each time I went to the experts to clarify, they’d explode all my basic assumptions.",
},

{
label:"The Dying Sea",
created:"2001 01 01", // year month day
tags:"link, article, california, drought, water, salton sea",
url:"http://www.newyorker.com/magazine/2015/05/04/the-dying-sea",
notes:"The San Diego Water Authority has taken pains to present the problems at the Salton Sea as far outside the scope of the water transfer.",
},

{
label:"Rethinking Extinction",
created:"2001 01 01", // year month day
tags:"link, article, existential, emotion, positive",
url:"http://aeon.co/magazine/science/why-extinction-is-not-the-problem/",
art:"http://cdn-imgs-mag.aeon.co/images/2015/04/Phanerozoic_Biodiversity.jpg",
notes:"Viewing every conservation issue through the lens of extinction threat is simplistic and usually irrelevant. Worse, it introduces an emotional charge that makes the problem seem cosmic and overwhelming rather than local and solvable. It’s as if the entire field of human medicine were treated solely as a matter of death prevention. Every session with a doctor would begin: ‘Well, you’re dying. Let’s see if we can do anything to slow that down a little.’",
parent:"Stewart Brand",
},

{
label:"The Great Grief: How to cope with losing our world",
created:"2001 01 01", // year month day
tags:"link, article, existential, emotion, grief",
url:"http://www.commondreams.org/views/2015/05/14/great-grief-how-cope-losing-our-world",
notes:"To cope with losing our world requires us to descend through the anger into mourning and sadness, not speedily bypass them to jump onto the optimism bandwagon or escape into indifference. And with this deepening, an extended caring and gratitude may open us to what is still here, and finally, to acting accordingly.",
},

{
label:"What animals are likely to go extinct first due to climate change",
created:"2001 01 01", // year month day
tags:"link, article, existential, emotion, grief",
url:"http://news.nationalgeographic.com/2015/04/150430-extinction-climate-warming-animals-species-conservation-wildlife/?sf8919812=1",
notes:"One in six species could disappear as the climate warms over the next century, with animals and plants in South America particularly hard hit while those in North America  would face the lowest risk, according to a major new analysis published Thursday.",
parent:"National Geographic",
},

{
label:"River catches on fire",
created:"2001 01 01",
tags:"link,article,india,river,pollution",
url:"http://www.latimes.com/world/asia/la-fg-fire-springs-forth-on-india-lake-20150619-story.html#page=1",
},

{
label:"Bulk of Oregon now under drought conditions",
created:"2015 06 24",
tags:"link,article,oregon,drought",
url:"http://www.bendbulletin.com/localstate/environment/3265041-151/bulk-of-oregon-under-drought-declarations",
},

{
label:"Conceptualizing the Risk and Uncertainty of Climate Change with Valentina Bosetti",
created:"2015 06 24",
tags:"link,event,talk,long now,climate",
url:"https://www.eventbrite.com/e/valentina-bosetti-at-the-interval-conceptualizing-the-risk-and-uncertainty-of-climate-change-tickets-17284305824",
notes:"At The Interval Dr. Bosetti will talk about the many uncertainties around climate change, ranging from the limitations (and variations) of predictive models to the possibilities for technological innovation. Her talk includes approaches for evaluating and making decisions amongst all that uncertainty. Valentina will also discuss her work as the lead author of the “Integrated Risk and Uncertainty Assessment of Climate Change Response Policies” chapter for Working Group III of the 5th IPCC Assessment Report and the IPCC process more broadly.",
parent:"Valentina Bosetti",
},

{
label:"Globaia Cartography of the Anthropocene",
url:"http://globaia.org/portfolio/cartography-of-the-anthropocene/",
tags:"link,article,media",
},

{
label:"Globaia Anthropocene",
url:"http://www.antropocene.info",
tags:"link,article,media",
},

////////////////////////////////////////////////////////////////////////
// ORGS 
////////////////////////////////////////////////////////////////////////

{
label:"<h1>Orgs</h1>",
},

{
label:"Project Drawdown",
created:"2001 01 01",
url:"http://www.drawdown.org",
tags:"link,org,grassroots",
},

{
label:"Intergovernmental Panel on Climate Change",
created:"2001 01 01",
url:"https://www.ipcc.ch",
tags:"link,org,academic,gov",
},

{
label:"Greenpeace",
created:"2001 01 01", // year month day
url:"http://greenpeace.org",
tags:"link,org,grassroots",
},

{
label:"Grantham Research Instutite on Climate Change and the Environment",
created:"2001 01 01", // year month day
url:"http://www.lse.ac.uk/GranthamInstitute/",
tags:"link,org,academic",
},


{
label:"Sustainable Rotterdam School of Management",
created:"2001 01 01", // year month day
url:"http://www.sustainable.rsm.nl/",
tags:"link,org,academic",
},

{
label:"Improbable",
created:"2001 01 01", // year month day
url:"http://improbable.io",
tags:"link,org,climate,biz,model",
},

{
label:"Digital Democracy",
created:"2001 01 01", // year month day
url:"http://www.digital-democracy.com",
tags:"link,org,climate,social",
},

{
label:"MIT Climate CoLab",
created:"2001 01 01", // year month day
art:"model_oil.jpg",
url:"http://climatecolab.org",
tags:"link, org, climate, social",
notes:"The Climate CoLab is a project of the MIT Center for Collective Intelligence. It allows you to work with people from all over the world to create proposals for what to do about climate change. There are a series of contests that phrase specific problems and then users submit proposals which are voted on. Some of the models are quite detailed and may have real utility: <a href='http://climatecolab.org/web/guest/plans/-/plans/contestId/1301419/planId/1316105'>Carbon Value through Utilization</a>. Also they had a reddit AMA here <a href='http://www.reddit.com/r/science/comments/32ww7t/science_ama_series_im_prof_thomas_malone_from_the/'>MIT CoLab Reddit AMA</a>"
},

{
label:"The Cultural Cognition Project",
created:"2001 01 01", // year month day
url:"http://www.culturalcognition.net/",
tags:"link, org, climate, social",
notes:"The Cultural Cognition Project is a group of scholars interested in studying how cultural values shape public risk perceptions and related policy beliefs. Cultural cognition refers to the tendency of individuals to conform their beliefs about disputed matters of fact (e.g., whether global warming is a serious threat; whether the death penalty deters murder; whether gun control makes society more safe or less) to values that define their cultural identities. Project members are using the methods of various disciplines -- including social psychology, anthropology, communications, and political science -- to chart the impact of this phenomenon and to identify the mechanisms through which it operates. The Project also has an explicit normative objective: to identify processes of democratic decisionmaking by which society can resolve culturally grounded differences in belief in a manner that is both congenial to persons of diverse cultural outlooks and consistent with sound public policymaking.",
},

{
label:"Club of Rome",
created:"2001 01 01",
tags:"link, org, climate, simulation",
url:"http://www.clubofrome.org",
notes:"The Club of Rome was founded in 1968 as an informal association of independent leading personalities from politics, business and science, men and women who are long-term thinkers interested in contributing in a systemic interdisciplinary and holistic manner to a better world. The Club of Rome members share a common concern for the future of humanity and the planet.",
},

{
label:"Global Resource Observatory",
created:"2001 01 01",
tags:"link, org, climate, model",
url:"http://ww2.anglia.ac.uk/ruskin/en/home/microsites/global_sustainability_institute/our_research/resource_management.html",
notes:"In 1972 the Club of Rome produced a report the Limits to Growth. This used systems dynamics theory and computer modelling to analyze the long term causes and consequences of growth in the world's population and material economy. Twelve scenarios from the World 3 computer model showed different possible patterns of world development over the two centuries from 1900 to 2100. These illustrated how world population and resource use interact with a variety of limits.",
},

{
label:"The National Socio-Environmental Synthesis Center",
created:"2001 01 01", // year month day
tags:"link, org, climate, social",
url:"http://www.sesync.org/",
notes:"The National Socio-Environmental Synthesis Center (SESYNC) is dedicated to accelerating scientific discovery at the interface of human and ecological systems. We support new interdisciplinary collaborations that pursue data-driven solutions to pressing socio-environmental problems. SESYNC features a range of services from project inception through results dissemination, including supporting the team science process, meeting planning and facilitation, travel and logistical support, and cyberinfrastructure resources. SESYNC is funded by an award to the University of Maryland from the National Science Foundation.",
},

{
label:"Smarter Cleanup",
created:"2001 01 01", // year month day
tags:"link, org, model, simulation, community, water",
url:"http://smartercleanup.org",
art:"http://smartercleanup.org/smc/wp-content/uploads/2015/06/duwamish_homepage_background-800x440.jpg",
notes:"We are a coalition of community organizers whose mission is to optimize collective knowledge and resources to address environmental health issues over the next century. We do this by pairing the latest open source technology with good old fashioned community building. We call it collective cartography.",
},

{
label:"Euro-Mediterranean Center for Climate Change",
tags:"link,org,climate",
url:"http://www.cmcc.it",
notes:"The Euro-Mediterranean Center on Climate Change (CMCC) is a new Italian research centre dedicated to climate and climate related research, including climate variability, its causes and consequences, carried out through numerical models ranging from Global Earth System to Regional models within the Euro-Mediterranean area.",
},

{
label:"Future of Humanity Institute",
created:"2001 01 01", // year month day
tags:"link, org, existential",
url:"http://www.fhi.ox.ac.uk/",
notes:"The Future of Humanity Institute is a multidisciplinary research institute at the University of Oxford.  It enables a select set of leading intellects to bring the tools of mathematics, philosophy, and science to bear on big-picture questions about humanity and its prospects.  The Institute belongs to the Faculty of Philosophy and is affiliated with the Oxford Martin School.",
},

{
label:"Centre for the Study of Existential Risk",
created:"2001 01 01", // year month day
tags:"link, org, existential",
url:"http://cser.org/",
notes:"The Centre for Study of Existential Risk is an interdisciplinary research centre focused on the study of human extinction-level risks that may emerge from technological advances. We aim to combine key insights from the best minds across disciplines to tackle the greatest challenge of the coming century: safely harnessing our rapidly-developing technological power.",
},

{
label:"Globaia",
created:"2001 01 01",
tags:"link,org",
url:"http://globaia.org",
},

////////////////////////////////////////////////////////
// people
////////////////////////////////////////////////////////

{
label:"<h1>Voices</h1>",
},

{
label:"Nicholas de Monchaux",
created:"2001 01 01", // year month day
tags:"person",
url:"http://ced.berkeley.edu/ced/faculty-staff/nicholas-de-monchaux",
},

{
label:"Safa Motesharrei",
created:"2001 01 01", // year month day
tags:"person",
parent:"University of Maryland, The National Socio-Environmental Synthesis Center",
},

{
label:"Eugenia Kalnay",
created:"2001 01 01", // year month day
tags:"person",
parent:"University of Maryland, The National Socio-Environmental Synthesis Center",
},

{
label:"Jorge Rivas",
created:"2001 01 01", // year month day
tags:"person",
parent:"University of Minnesota, The National Socio-Environmental Synthesis Center",
},

{
label:"Stewart Brand",
created:"2001 01 01", // year month day
tags:"person",
parent:"The Long Now Foundation",
},

{
label:"Valentina Bosetti",
tags:"person",
},

{
label:"Nick Bostrom",
created:"2001 01 01", // year month day
tags:"person",
parent:"Future of Humanity Institute",
},

{ label:"Dianne Ackerman", tags:"person", },
{ label:"Charles Darwin", tags:"person", },
{ label:"Jared Diamond", tags:"person", },
{ label:"Paul Hawken", tags:"person", },
{ label:"Amanda Ravenhill", tags:"person", },
{ label:"Derrek Jensen", tags:"person", },
{ label:"Elizabeth Kolbert", tags:"person", },
{ label:"Gaia Vince", tags:"person", },
{ label:"Antifragile", tags:"person", },
{ label:"Intertwingled", tags:"person", },
{ label:"Stephen Lansing", tags:"person", },
{ label:"EO Wilson", "tags":"person", },

////////////////////////////////////////////////////
// philosophy
////////////////////////////////////////////////////

{
label:"<h1>Philosophy</h1>",
},

{
label:"BBC Extinction Events",
created:"2001 01 01", // year month day
url:"http://www.bbc.co.uk/nature/extinction_events",
tags:"link,article,existential,extinction",
},

{
label:"Mass Extinction as shadows of anti entropic growth",
created:"2001 01 01", // year month day
url:"http://archive.larouchepac.com/node/21941",
tags:"link,article",
},

{
label:"The Great Filter",
created:"2001 01 01", // year month day
url:"http://en.wikipedia.org/wiki/Great_Filter",
tags:"link,article,existential",
},

{
label:"Weaponized Sacredness",
created:"2001 01 01", // year month day
tags:"link, article, hyperobject, philosophy, cognition, reasoning,philosophy",
url:"http://www.ribbonfarm.com/2015/05/07/weaponized-sacredness/",
notes:"Why does a phenomenon so seemingly inevitable in hindsight go unforeseen? ",
},

{
label:"Building an alternative to Hierarchy: Rhizome Theory",
created:"2001 01 01", // year month day
tags:"link, article, cognition, reasoning, social,philosophy",
url:"http://www.jeffvail.net/2008/02/building-alternative-to-hierarchy.html",
notes:"This third essay in a five-part series, The Problem of Growth, looks at the theoretical requirements for a sustainable alternative to hierarchy.",
},

{
label:"Collapse Comes of Age",
created:"2001 01 01", // year month day
tags:"link, article, existential,philosophy",
url:"http://therationalpessimist.com/tag/existential-risks/",
notes:"However, Bostrom extends this concept to take in scope: whether a particular risk is limited to a locality or whether it is all encompassing. This produces a risk matrix ",
},

{
label:"Global Catastrophic Risk",
created:"2001 01 01", // year month day
tags:"link, reference, wikipedia,philosophy",
url:"http://en.wikipedia.org/wiki/Global_catastrophic_risk",
art:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/X-risk-chart-en-01a.svg/1000px-X-risk-chart-en-01a.svg.png",
notes:"A global catastrophic risk is a hypothetical future event with the potential to seriously damage human well-being on a global scale.[2] Some events could destroy or cripple modern civilization. Other, even more severe, events could cause human extinction.[3] These are referred to as existential risks.",
},

{
label:"The Collapse of Complex Societies",
created:"2001 01 01", // year month day
tags:"link, article, existential, social, organization,philosophy",
url:"http://www.historytoday.com/christopher-chippindale/collapse-complex-societies",
notes:"When and why do states, empires and civilisations collapse? When and why do they survive and prosper despite all perils? Is there a pattern in their history, even a pattern that indicates a best path for the world today? These questions, above all the great collapse of the western Roman Empire, have concerned historians since Gibbon. The value of Tainter's new comparative study is to look at the larger pattern of other collapses beyond the usual handful of examples.",
},

{
label:"Human Extinction",
created:"2001 01 01", // year month day
tags:"link, article, futurism, existential,philosophy",
url:"http://aeon.co/magazine/philosophy/ross-andersen-human-extinction/",
notes:"Last December I came face to face with a Megalosaurus at the Oxford University Museum of Natural History. I was there to meet Nick Bostrom, a philosopher who has made a career out of contemplating distant futures, hypothetical worlds that lie thousands of years ahead in the stream of time. Bostrom is the director of Oxford’s Future of Humanity Institute, a research collective tasked with pondering the long-term fate of human civilisation. He founded the institute in 2005, at the age of 32, two years after coming to Oxford from Yale. Bostrom has a cushy gig, so far as academics go. He has no teaching requirements, and wide latitude to pursue his own research interests, a cluster of questions he considers crucial to the future of humanity.",
},

{
label:"One Straw Revolution",
url:"https://www.youtube.com/watch?v=XSKSxLHMv9k",
tags:"link,media,philosophy,permaculture,video,youtube",
},

{
label:"Cadillac Desert",
url:"https://www.youtube.com/watch?v=hkbebOhnCjA",
tags:"link,media,philosophy,california,drought",
},

//////////////////////////////////////////////////////////////////////////////////////
// actual models
//////////////////////////////////////////////////////////////////////////////////////

{
label:"<h1>Models</h1>",
},

{
label:"Limits To Growth",
created:"2001 01 01",
tags:"link, article, model",
url:"http://www.clubofrome.org/?p=326",
notes:"Limits to Growth is a study about the future of our planet. On behalf of the Club of Rome, Donnella Meadows, Dennis Meadows, Jorgen Randers and their team worked on systems analysis at Jay W. Forrester’s institute at MIT. They created a computing model which took into account the relations between various global developments and produced computer simulations for alternative scenarios. Part of the modelling were different amounts of possibly available resources, different levels of agricultural productivity, birth control or environmental protection.  12 million copies were distributed in 37 languages.",
parent:"Club Of Rome",
},

{
label:"Human and Nature Dynamics (HANDY): Modeling Inequality and Use of Resources in the Collapse of Sustainability in Societies",
created:"2001 01 01", // year month day
tags:"link, paper, existential, threats, media, ecology, model",
url:"http://www.sciencedirect.com/science/article/pii/S0921800914000615",
notes:"In this paper, we build a human population dynamics model by adding accumulated wealth and economic inequality to a predator–prey model of humans and nature. The model structure, and simulated scenarios that offer significant implications, are explained. Four equations describe the evolution of Elites, Commoners, Nature, and Wealth. The model shows Economic Stratification or Ecological Strain can independently lead to collapse, in agreement with the historical record.",
parent:"Safa Motesharrei, Eugenia Kalnay, Jorge Rivas",
},

/*

under a green sky
cadillac desert
antifragile?
intertwingled?
author of that wolf yellowstone thing
.
interesting companies and organizations

climate.com
esri

who else?

Emergent Properties of Balinese Water Temples - JS Lansing
New California Water Atlas
At home on this Moveable Earth - William Kloefkorn
At Home On Earth - David Landis Barnhill
The Human Age - Diane Ackerman
Distributed Hydrological Modeling - K J Beven
The Alexandria Digital Earth Modeling System
The Playful World - Mark Pesce
Earth System Modeling Framework (ESMF)

http://www.reddit.com/r/science/comments/32ww7t/science_ama_series_im_prof_thomas_malone_from_the/

deep - free diving 

*/


]};



